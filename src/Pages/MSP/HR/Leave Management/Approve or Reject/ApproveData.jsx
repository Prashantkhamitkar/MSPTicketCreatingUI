import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import ModalForAP from './ModalForAP';

const ApproveData = ({data}) => {
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedRow, setSelectedRow] = useState(null);

const toggleModal = () => {
  setIsModalOpen(!isModalOpen);
  setSelectedRow(null);
};

const handleEdit = (row) => {
  setSelectedRow(row);
  setIsModalOpen(true);
  console.log(row);
};
     const columns = [
       {
         name: <span className="font-weight-bold fs-13">ACTION</span>,
         sortable: true,

         cell: (row) => {
           return (
             <button
               className="btn btn-soft-info p-0 ms-2"
               onClick={() => handleEdit(row)}
             >
               <span className="badge badge-soft-warning p-0">
                 <i className="fas fa-edit"></i>
               </span>
             </button>
           );
         },
         width: "80px",
       },

       {
         name: <span className="font-weight-bold fs-13">DISPLAY NAME</span>,
         selector: (row) => row.displayName,
         sortable: true,
       },
       {
         name: <span className="font-weight-bold fs-13">START DATE</span>,
         selector: (row) => row.startDate,
         sortable: true,
       },
       {
         name: <span className="font-weight-bold fs-13">END DATE</span>,
         selector: (row) => row.endDate,
         sortable: true,
       },
       {
         name: <span className="font-weight-bold fs-13">LEAVE TYPE</span>,
         selector: (row) => row.leaveType,
         sortable: true,
       },
       {
         name: <span className="font-weight-bold fs-13">STATUS</span>,
         selector: (row) => row.status,
         sortable: true,
         cell: (row) => {
           switch (row.status) {
             case "Approved":
               return (
                 <span className="badge badge-soft-success">
                   {" "}
                   {row.status}{" "}
                 </span>
               );
             case "Rejected":
               return (
                 <span className="badge badge-soft-danger"> {row.status} </span>
               );
             default:
               return <span className="badge badge-soft-danger"> </span>;
           }
         },
       },
       {
         name: <span className="font-weight-bold fs-13">REASON</span>,
         selector: (row) => row.reason,
         sortable: true,
       },
     ];
  return (
   <><DataTable data={data} columns={columns} pagination/>
   {selectedRow&&<ModalForAP toggle={toggleModal} modal={isModalOpen} selectedRow={selectedRow}/>}
   </>
  )
}

export default ApproveData