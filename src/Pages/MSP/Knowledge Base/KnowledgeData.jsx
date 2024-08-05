import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';




const KnowledgeData = ({data}) => {
  const [selectedRow, setSelectedRow] = useState(null);  
  const handleRowClick = (row) => {
      setSelectedRow(row.title);
    };
 const columns = [
   {
     name: <span className="font-weight-bold fs-13">TITLE</span>,
     selector: (row) => row.title,
     sortable: true,
     cell: (row) => <Link to={`/edit-article/:${row.title}`}>{row.title}</Link>,
     width: "47rem",
   },
   {
     name: <span className="font-weight-bold fs-13">AUTHOR</span>,
     selector: (row) => row.author,
     sortable: true,
   },
   {
     name: <span className="font-weight-bold fs-13">CREATED DATE</span>,
     selector: (row) => row.createdDate,
     sortable: true,
   },
   {
     name: <span className="font-weight-bold fs-13">CATEGORY</span>,
     selector: (row) => row.category,
     sortable: true,
   },
 ];
 const conditionalRowStyles = [
   {
     when: (row) => row.title === selectedRow,
     style: {
       backgroundColor: "#A2C4F4",
       color: "white",
       
     },
   },
 ];
    return (
      <>
        <DataTable
          columns={columns}
          data={data}
          pagination
          onRowClicked={handleRowClick}
          conditionalRowStyles={conditionalRowStyles}
        />
      </>
    );
}

export default KnowledgeData