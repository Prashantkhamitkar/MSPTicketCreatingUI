import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import EditContractModal from './EditContractModal';

const ContractData = ({data}) => {
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedRow, setSelectedRow] = useState(null);

const toggleModal = () => {
  setIsModalOpen(!isModalOpen);
  setSelectedRow(null);
};

const handleEdit = (row) => {
  setSelectedRow(row);
  setIsModalOpen(true);
  
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
         width:"80px"
       },

       {
         name: <span className="font-weight-bold fs-13">CUSTOMER</span>,
         selector: (row) => row.Customer,
         sortable: true,
        
       },
       {
         name: <span className="font-weight-bold fs-13">SITE</span>,
         selector: (row) => row.Site,
         sortable: true,
       },
       {
         name: <span className="font-weight-bold fs-13">PRODUCT</span>,
         selector: (row) => row.Product,
         sortable: true,
       },
       {
         name: <span className="font-weight-bold fs-13">DESCRIPTION</span>,
         selector: (row) => row.Description,
         sortable: true,
       },
       {
         name: <span className="font-weight-bold fs-13">START DATE</span>,
         selector: (row) => row.StartDate,
         sortable: true,
       },
       {
         name: <span className="font-weight-bold fs-13">END DATE</span>,
         selector: (row) => row.EndDate,
         sortable: true,
        
       },
       {
         name: (
           <span className="font-weight-bold fs-13">TYPE OF SERVICE</span>
         ),
         selector: (row) => row.TypeOfService,
         sortable: true,
       },
       {
         name: <span className="font-weight-bold fs-13">CONTRACT PRICING</span>,
         selector: (row) => row.ContractPricing,
         sortable: true,
       },
       {
         name: <span className="font-weight-bold fs-13">CONTRACT TYPE</span>,
         selector: (row) => row.ContractType,
         sortable: true,
        
       },
      
     ];

  return (
<>
<DataTable columns={columns} data={data} pagination/>
{selectedRow&&<EditContractModal modal={isModalOpen} toggle={toggleModal} selectedRow={selectedRow}/>}
</>
  )
}

export default ContractData