import React, { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import ShiftManagementModal from "./ShiftManagementModal";

const ShiftManagementTable = () => {
  const [modal, setToggle] = useState(false);
  const handleclick = () => {
    setToggle(!modal);
  };
  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
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
                    REQUEST FOR SHIFT TRANSFER
                  </button>
                </Col>
              </Row>
              <Row className="g-4">
                <Col className="col-sm">
                  <div
                    className="app-search d-flex mt-0 align-items-center gap-3"
                    style={{ width: "100%" }}
                  >
                    <p className="text-muted mb-0">Summary</p>
                    <div className="position-relative">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        // value={search}
                        // onChange={(e) => setsearch(e.target.value)}
                      />
                      <span
                        className="ri-search-line"
                        style={{ zIndex: "0" }}
                      ></span>
                    </div>
                  </div>
                </Col>
              </Row>
              <ShiftManagementModal modal={modal} toggal={setToggle} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ShiftManagementTable;
