import React from "react";
import DataTable from "react-data-table-component";

const OverTimeData = ({ data }) => {
  const columns = [
    {
      name: <span className="font-weight-bold fs-13">DISPLAY NAME</span>,
      selector: (row) => row.displayName,
      sortable: true,
      width: "200px",
    },
    {
      name: (
        <span className="font-weight-bold fs-13">TOTAL OVERTIME MINUTES</span>
      ),
      selector: (row) => row.totalOvertimeMinutes,
      cell: (row) => <span className="ms-5">{row.totalOvertimeMinutes}</span>,

      sortable: true,
      width: "210px",
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
      <DataTable
        data={data}
        columns={columns}
        pagination
        paginationPerPage={7}
        customStyles={customStyles}
      />
    </>
  );
};

export default OverTimeData;
