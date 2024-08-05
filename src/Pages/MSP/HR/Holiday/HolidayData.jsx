import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import EditHoliday from "./EditHoliday";

const HolidayData = ({ data, setToggle, modal, check }) => {
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
      width: "60px",
    },

    {
      name: <span className="font-weight-bold fs-13">
        HOLIDAY DATE
        
        </span>,
      selector: (row) => row.holidayDate,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">HOLIDAY</span>,
      selector: (row) => row.holiday,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">LOCATION</span>,
      selector: (row) => row.location,
      sortable: true,
    },

    {
      name: <span className="font-weight-bold fs-13">YEAR</span>,
      selector: (row) => row.year,
      sortable: true,
    },
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
      <DataTable columns={columns} data={data} pagination customStyles={customStyles} />
      {selectedRow&&<EditHoliday modal={modal} toggle={setToggle} selectedRow={selectedRow} />}
    </>
  );
};

export default HolidayData;
