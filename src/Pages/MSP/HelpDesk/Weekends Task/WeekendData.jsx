import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import EditModal from './EditModal';



const WeekendData = ({data,customers,assignees}) => {
     const [editModal, setEditModal] = useState(false);
     const [selectedRowData, setSelectedRowData] = useState(null);
      const toggleEditModal = () => setEditModal(!editModal);
    const columns = [
      {
        name: <span className="font-weight-bold fs-13">TASK ID</span>,
        selector: (row) => row.TASK_ID,
        sortable: true,

        cell: (row) => (
          <span
            className="badge badge-soft-warning ms-0"
            style={{ fontSize: "0.6rem", cursor: "pointer" }}
            onClick={() => {
              setSelectedRowData(row);
              toggleEditModal();
            }}
          >
            <span style={{ color: "red" }}>{row.TASK_ID}</span>
          </span>
        ),
        width: "100px",
      },
      {
        name: <span className="font-weight-bold fs-13">SUBJECT</span>,
        selector: (row) => row.SUBJECT,
        sortable: true,
      },
      {
        name: <span className="font-weight-bold fs-13">STATUS</span>,
        selector: (cell) => {
          switch (cell.STATUS) {
            case "Open":
              return (
                <span className="badge badge-soft-info">{cell.STATUS}</span>
              );
            case "Completed":
              return (
                <span className="badge badge-soft-success">
                  {" "}
                  {cell.STATUS}{" "}
                </span>
              );
            case "In_Progress":
              return (
                <span className="badge badge-soft-warning">
                  {" "}
                  {cell.STATUS}{" "}
                </span>
              );
            default:
              return (
                <span className="badge badge-soft-success">
                  {" "}
                  {cell.STATUS}{" "}
                </span>
              );
          }
        },
        sortable: true,
      },
      {
        name: <span className="font-weight-bold fs-13">ASSIGNED TO</span>,
        selector: (row) => row.ASSIGNED_TO,
        sortable: true,
      },
      {
        name: <span className="font-weight-bold fs-13">CUSTOMER NAME</span>,
        selector: (row) => row.CUSTOMER_NAME,
        sortable: true,
      },
      {
        name: <span className="font-weight-bold fs-13">CREATED</span>,
        selector: (row) => row.CREATED,
        sortable: true,
      },
      {
        name: <span className="font-weight-bold fs-13">LAST UPDATED</span>,
        selector: (row) => row.LAST_UPDATED,
        sortable: true,
      },
      {
        name: <span className="font-weight-bold fs-13">CLOSED</span>,
        selector: (row) => row.CLOSED,
        sortable: true,
      },
    ];
  return (
    <>
    <DataTable columns={columns} pagination data={data} paginationPerPage={8}/>
    <EditModal toggleModal={toggleEditModal} modal={editModal} rowData={selectedRowData} customers={customers} assignees={assignees} />
    </>
  )
}

export default WeekendData