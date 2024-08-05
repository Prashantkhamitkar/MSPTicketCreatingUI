import React, { useState } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import MyLeaveModal from "./MyLeaveModal";

const MyLeavesTable = () => {
  const [modal, setToggle] = useState(false);
  const handleclick = () => {
    setToggle(!modal);
  };
  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title mb-0">MY LEAVES</h5>
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
                    APPLY FOR LEAVE
                  </button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <MyLeaveModal modal={modal} toggle={setToggle} />
    </>
  );
};

export default MyLeavesTable;
