import React from 'react'
import DataTable from 'react-data-table-component';

const AttendanceData = ({data}) => {
    const columns = [
      {
        name: <span className="font-weight-bold fs-13">DISPLAY NAME</span>,
        selector: (row) => row.displayName,
        sortable: true,
        cell: (row) => <span>{row.displayName}</span>,
        width:"150px"
      },
      ...Array.from({ length: 31 }, (_, i) => ({
        name: <span className="font-weight-bold fs-13">{i + 1}</span>,
        selector: (row) => row[`day${i + 1}`],
        sortable: false,
        cell: (row) => {
            switch (row[`day${i + 1}`]) {
             case "P":
               return (
                 <span className="badge badge-soft-success"> {row[`day${i + 1}`]} </span>
               );
               case "AL":
                 return (
                 <span className="badge badge-soft-danger"> {row[`day${i + 1}`]} </span>
               );
               default:
                 return (
                 <span className="badge badge-soft-danger">  </span>
               );
            }},
        width:"50px"
      })),
    ];
     const customStyles = {
       headRow: {
         style: {
           backgroundColor: "#EEF8F1", // Header background color
           color: "#333", // Header text color
         },
       },
       headCells: {
         style: {
           fontWeight: "bold", // Make header text bold
           fontSize: "13px", // Set font size for header text
         },
       },
     };
  return (
   <>
   <DataTable data={data} columns={columns} pagination customStyles={customStyles}/>
   </>
  )
}

export default AttendanceData