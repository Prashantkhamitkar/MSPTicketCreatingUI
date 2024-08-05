import React, { useEffect, useState } from 'react'
import { Tickets } from './Tickets';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import TicketData from './TicketData';
import StickyButton from './StickyButton';
import ActionButton from '../../common/ActionButton';
import Select from "react-select"

const TicketTable = () => {
  const [ticketData, setTicketData] = useState(Tickets);
  const [searchTerm, setSearchTerm] = useState("");
  const [toggle,setToggle]=useState(false);

  useEffect(() => {
    const filtered = Tickets.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setTicketData(filtered);
  }, [searchTerm]);
   const options = [
     {
       label: "Default",
       options: [
         { value: "primary-report", label: "1. Primary Report" },
         { value: "closed-tickets", label: "2. Closed Tickets" },
         { value: "my-closed-tickets", label: "3. My Closed Tickets" },
         { value: "my-open-tickets", label: "4. My Open Tickets" },
         { value: "my-overdue-tickets", label: "5. My Overdue Tickets" },
         { value: "open-tickets", label: "6. Open Tickets" },
         { value: "overdue-tickets", label: "7. Overdue Tickets" },
         { value: "unassigned-tickets", label: "8. Unassigned Tickets" },
       ],
     },
     {
       label: "Public",
       options: [
         { value: "closed-tickets", label: "1. Closed Tickets" },
         { value: "my-tickets", label: "2. My Tickets" },
       ],
     },
   ];
const  resetRecord=()=>{
  setTicketData(Tickets);
  setSearchTerm("");
}

  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title mb-0">TICKETS DATA</h5>
            </CardHeader>
            <CardBody>
              <Row>
                <Col
                  md="12"
                  className="col-sm d-flex justify-content-end align-items-center"
                >
                  <StickyButton toggle={toggle} />
                </Col>
              </Row>
              <Row className="g-4">
                <Col className="col-sm">
                  <div className="app-search d-flex flex-column flex-sm-row mt-0 align-items-start align-items-sm-center gap-3">
                    <p className="text-muted mb-0">Summary</p>
                    <div className="position-relative">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <span
                        className="ri-search-line"
                        style={{ zIndex: "0" }}
                      ></span>
                    </div>
                    <div>
                      <Select
                        classNamePrefix="select2-selection"
                        menuPlacement="auto"
                        menuPortalTarget={document.body}
                        placeholder="Select the option ......."
                        options={options}
                      />
                    </div>
                    <ActionButton data={ticketData} setdata={setTicketData} />
                    <Button
                      color="secondary"
                      className="btn btn-rounded btn-light waves-effect  d-flex align-items-center justify-content-center"
                      onClick={resetRecord}
                    >
                      CLEAR
                      <i
                        className="fas fa-times ms-2"
                        style={{ fontSize: "0.9rem" }}
                      ></i>
                    </Button>
                  </div>
                </Col>
              </Row>
              <TicketData data={ticketData} setToggle={setToggle} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default TicketTable