import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import BackupEditModal from './BackupEditModal';


const BackupData = ({data,setToggle,modal,check}) => {
const [selectedRow, setSelectedRow] = useState([]);
const handleSelectedRow = (row) => {
  const isSelected = selectedRow.includes(row);
  if (isSelected) {
    setSelectedRow(selectedRow.filter((selectdata) => selectdata !== row));
  } else {
    setSelectedRow([...selectedRow, row]);
  }
};
useEffect(() => {
  check(selectedRow.length > 0);
}, [selectedRow, check]);
 const columns = [
   {
     cell: (row) => (
       <input
         className="form-check-input"
         type="checkbox"
         name="checkAll"
         checked={selectedRow.includes(row)}
         onChange={() => handleSelectedRow(row)}
       />
     ),
     width: "30px",
   },
   {
     name: <span className="font-weight-bold fs-13">STATUS</span>,
     selector: (cell) => {
       switch (cell.Status) {
         case "Success":
           return (
             <span className="badge badge-soft-success"> {cell.Status} </span>
           );
         case "Warning":
           return (
             <span className="badge badge-soft-warning"> {cell.Status} </span>
           );
         case "Failed":
           return (
             <span className="badge badge-soft-danger"> {cell.Status} </span>
           );

         default:
           return (
             <span className="badge badge-soft-success"> {cell.Status} </span>
           );
       }
     },
     sortable: true,
   },

   {
     name: <span className="font-weight-bold fs-13">COMMENTS</span>,
     selector: (row) => row.Comments,
     sortable: true,

     width: "150px",
   },
   {
     name: <span className="font-weight-bold fs-13">BACKUP DATE</span>,
     selector: (row) => row.BackupDate,
     sortable: true,
     width: "120px",
   },
   {
     name: <span className="font-weight-bold fs-13">TAKEN BY</span>,
     selector: (row) => row.TakenBy,
     sortable: true,
   },

   {
     name: <span className="font-weight-bold fs-13">CUSTOMER NAME</span>,
     selector: (row) => row.CustomerName,
     sortable: true,
     width: "120px",
   },
   {
     name: <span className="font-weight-bold fs-13">ASSET NAME</span>,
     selector: (row) => row.AssetName,
     sortable: true,
   },
   {
     name: <span className="font-weight-bold fs-13">ASSET TAG</span>,
     selector: (row) => row.AssetTag,
     sortable: true,
   },
   {
     name: <span className="font-weight-bold fs-13">SCHEDULE DATE</span>,
     selector: (row) => row.ScheduleDate,
     sortable: true,
   },
   {
     name: <span className="font-weight-bold fs-13">BACKUP SCHEDULE</span>,
     selector: (row) => row.BackupSchedule,
     sortable: true,
     width: "150px",
   },
   {
     name: <span className="font-weight-bold fs-13">BACKUP TYPE</span>,
     selector: (row) => row.BackupType,
     sortable: true,
     width: "100px",
   },

   {
     name: <span className="font-weight-bold fs-13">BACKUP SERVER</span>,
     selector: (row) => row.BackupServer,
     sortable: true,
   },
   {
     name: <span className="font-weight-bold fs-13">BACKUP SOFTWARE</span>,
     selector: (row) => row.BackupSoftware,
     sortable: true,
   },
 ];

    return (
      <>
     
        <DataTable columns={columns} data={data} pagination />
        <BackupEditModal modal={modal} toggle={setToggle} />
      </>
    );
}

export default BackupData