import React from 'react'
import DataTable from 'react-data-table-component';

const TimesheetData = ({data}) => {
 const columns = [
   {
     name: <span className="font-weight-bold fs-13">USER ID</span>,
     selector: (row) => row.UserID,
     sortable: true,
   },
   {
     name: <span className="font-weight-bold fs-13">TS DATE</span>,
     selector: (row) => row.TsDate,
     sortable: true,
   },
   {
     name: <span className="font-weight-bold fs-13">TASK TYPE</span>,
     selector: (row) => row.TaskType,
     sortable: true,
   },
   {
     name: <span className="font-weight-bold fs-13">INCIDENT ID</span>,
     selector: (row) => row.IncidentID,
     sortable: true,
   },
   {
     name: <span className="font-weight-bold fs-13">TASK ID</span>,
     selector: (row) => row.TaskID,
     sortable: true,
   },
   {
     name: <span className="font-weight-bold fs-13">TIME</span>,
     selector: (row) => row.Time,
     sortable: true,
   },
   {
     name: <span className="font-weight-bold fs-13">NOTE</span>,
     selector: (row) => row.Note,
     sortable: true,
   },
   {
     name: <span className="font-weight-bold fs-13">FROM DATE</span>,
     selector: (row) => row.From_date,
     sortable: true,
   },
 ];

  return (
    <>
      {" "}
      <DataTable  columns={columns} data={data} pagination />
    </>
  );
}

export default TimesheetData