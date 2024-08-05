import React, { useEffect, useState } from 'react'
import {data} from "./Weekend"
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import WeekendData from './WeekendData';
import CreateModal from './CreateModal';
import ActionButton from '../../common/ActionButton';
const customers = [
  { value: "Acme Corp", label: "Acme Corp" },
  { value: "customer2", label: "Customer 2" },
  // add more customers here
];

const assignees = [
  { value: "John Doe", label: "John Doe" },
  { value: "jane_doe", label: "Jane Doe" },
  // add more assignees here
];

const WeekendTable = () => {
const [taskdata,setTaskData]=useState(data);
const [toggle,setToggle]=useState(false);
const[search,setsearch]=useState("");
useEffect(()=>{
    const filtered=data.filter((item)=>
        Object.values(item).some((val)=>
        String(val).toLowerCase().includes(search.toLowerCase())
        )
    );
    setTaskData(filtered);
},[search])
const handleclick=()=>{
setToggle(!toggle);
}
  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title mb-0">TASKS</h5>
            </CardHeader>
            <CardBody>
              <Row>
                <Col
                  md="12"
                  className="col-sm d-flex justify-content-end align-items-center"
                >
                  <button
                    type="button"
                    className="btn btn-rounded btn-info waves-effect waves-light "
                    onClick={handleclick}
                  >
                    CREATE
                  </button>
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
                        value={search}
                        onChange={(e) => setsearch(e.target.value)}
                      />
                      <span
                        className="ri-search-line"
                        style={{ zIndex: "0" }}
                      ></span>
                    </div>
                    <ActionButton data={taskdata} setdata={setTaskData} />
                    <Button
                      color="secondary"
                      className="btn btn-rounded btn-light waves-effect  d-flex align-items-center justify-content-center"
                      onClick={() => {
                        setTaskData(data);
                        setsearch("");
                      }}
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

              <WeekendData
                data={taskdata}
                customers={customers}
                assignees={assignees}
              />
              <CreateModal
                modal={toggle}
                toggleModal={handleclick}
                customers={customers}
                assignees={assignees}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default WeekendTable
