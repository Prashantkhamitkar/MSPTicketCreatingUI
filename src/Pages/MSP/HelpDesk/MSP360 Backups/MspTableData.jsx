import React from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const MspTableData = ({data}) => {
     const columns = [
       {
         name: <span className="font-weight-bold fs-13">CUSTOMER NAME</span>,
         selector: (row) => row.Customer_Name,
         sortable: true,
         width:"260px"
       },
       {
         name: <span className="font-weight-bold fs-13">COMPUTER NAME</span>,
         selector: (row) => row.Computer_Name,
         sortable: true,
         cell: (row) => <Link to="#!">{row.Computer_Name}</Link>,
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
                 <span className="badge badge-soft-warning">
                   {" "}
                   {cell.Status}{" "}
                 </span>
               );
             case "Failed":
               return (
                 <span className="badge badge-soft-danger">
                   {" "}
                   {cell.Status}{" "}
                 </span>
               );
             
            
             default:
               return (
                 <span className="badge badge-soft-success">
                   {" "}
                   {cell.Status}{" "}
                 </span>
               );
           }
         },
         sortable: true,
       },
       {
         name: <span className="font-weight-bold fs-13">PRODUCT VERSION</span>,
         selector: (row) => row.Product_Version,
         sortable: true,
       },

       {
         name: <span className="font-weight-bold fs-13">SPACE USED</span>,
         selector: (row) => row.Space_Used,
         sortable: true,
       },
       {
         name: <span className="font-weight-bold fs-13">BACKUP TYPE</span>,
         selector: (row) => row.Backup_Type,
         sortable: true,
       },
       {
         name: <span className="font-weight-bold fs-13">ENCRYPTED</span>,
         selector: (row) => <span className="ms-3">{row.Encrypted}</span>,
         sortable: true,
       },
     ];
  return (
    <>
      <DataTable columns={columns} data={data} pagination />
    </>
  );
}

export default MspTableData