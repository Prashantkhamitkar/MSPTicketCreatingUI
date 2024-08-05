import React from "react";
import DataTable from "react-data-table-component";

const CheckedInDataComponent = ({ data }) => {


  const columns = [
    {
      name: <span className="font-weight-bold fs-13">DISPLAY NAME</span>,
      selector: (row) => row.displayName,
      sortable: true,
      width:"160px"
    },
    {
      name: <span className="font-weight-bold fs-13">CHECKED IN</span>,
      selector: (row) => row.checkedIn,
      sortable: true,
      
    },
    {
      name: <span className="font-weight-bold fs-13">CHECKED OUT</span>,
      selector: (row) => row.checkedOut,
      sortable: true,
      width:"150px"
    },
  ];

const customStyles = {
  headRow: {
    style: {
      backgroundColor: "#D4FBDE", // Header background color
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
      <DataTable data={data} columns={columns} pagination paginationPerPage={7}  customStyles={customStyles}/>
    </>
  );
};

export default CheckedInDataComponent;
