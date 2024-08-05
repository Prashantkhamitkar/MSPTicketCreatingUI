import React from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const AttachmentData = ({data}) => {
const columns = [
  {
    name: <span className="font-weight-bold fs-13">FILE NAME</span>,
    selector: (row) => row.FileName,
    sortable: true,
    cell: (row) => <Link to="#!">{row.FileName}</Link>,
  },
  {
    name: <span className="font-weight-bold fs-13">CREATED</span>,
    selector: (row) => row.created,
    sortable: true,
  },
  {
    name: <span className="font-weight-bold fs-13">CREATED BY</span>,
    selector: (row) => row.createdBy,
    sortable: true,
   
  },
];
    return (
   <>
   <DataTable data={data} columns={columns} pagination/>
   </>
  )
}

export default AttachmentData