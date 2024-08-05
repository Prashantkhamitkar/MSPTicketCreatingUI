import React from 'react'
import DataTable from 'react-data-table-component';

const BackblazeData = ({data}) => {
   const columns = [
     {
       name: <span className="font-weight-bold fs-13">CUSTOMER NAME</span>,
       selector: (row) => row.CustomerName,
       sortable: true,
     },
     {
       name: <span className="font-weight-bold fs-13">PAYMENT DATE</span>,
       selector: (row) => row.PaymentDate,
       sortable: true,
     },
     {
       name: <span className="font-weight-bold fs-13">AMOUNT</span>,
       selector: (row) => row.Amount,
       sortable: true,
     },
   ];
  return (
<>
<DataTable data={data} columns={columns} pagination/>
</>
  )
}

export default BackblazeData