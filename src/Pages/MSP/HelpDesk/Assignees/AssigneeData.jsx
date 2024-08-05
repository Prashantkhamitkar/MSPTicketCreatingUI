import React from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const AssigneeData = ({data}) => {
    const columns = [
      {
        name: <span className="font-weight-bold fs-13">USERNAME</span>,
        selector: (row) => row.Username,
        sortable: true,
      },
      {
        name: <span className="font-weight-bold fs-13">EMAIL</span>,
        selector: (row) => row.Email,
        sortable: true,
      },

      {
        name: <span className="font-weight-bold fs-13">OPEN TICKETS</span>,
        selector: (row) => row.OpenTickets,
        sortable: true,
        cell: (row) => (
          <Link to="#!" className="ms-5">
            {row.OpenTickets}
          </Link>
        ),
      },
      {
        name: <span className="font-weight-bold fs-13">CLOSED TICKETS</span>,
        selector: (row) => row.ClosedTickets,
        sortable: true,
        cell: (row) => (
          <Link to="#!" className="ms-5">
            {row.ClosedTickets}
          </Link>
        ),
      },

      {
        name: <span className="font-weight-bold fs-13">LAST CLOSED</span>,
        selector: (row) => row.LastClosed,
        sortable: true,
      },
    ];

  return (
    <>
      <DataTable columns={columns} data={data} pagination />
    </>
  );
}

export default AssigneeData