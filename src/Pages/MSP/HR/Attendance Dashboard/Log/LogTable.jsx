import React, { useEffect, useState } from "react";
import LogData from "./LogData";
import data from "./Log";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  InputGroup,
  InputGroupText,
  Row,
} from "reactstrap";

const LogTable = () => {
  const [logData, setlogData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    let filtered = data;

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        Object.values(item).some((val) =>
          String(val).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split("T")[0];
      filtered = filtered.filter((item) => item.date === formattedDate);
    }

    setlogData(filtered);
  }, [searchTerm, selectedDate]);

  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title mb-0">TEAM ATTENDANCE LOG</h5>
            </CardHeader>
            <CardBody>
              <Row className="g-4 flex-column flex-lg-row">
                <Col className="col-sm">
                  <div
                    className="app-search d-flex mt-0 align-items-center gap-3"
                    style={{ width: "100%" }}
                  >
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
                  </div>
                  <div className="d-flex align-items-center mb-3 gap-3">
                    <InputGroup style={{ maxWidth: "14rem" }}>
                      <Flatpickr
                        className="form-control d-block custominput"
                        options={{
                          altInput: true,
                          altFormat: "F j, Y",
                          dateFormat: "Y-m-d",
                        }}
                        onChange={(date) => setSelectedDate(date[0])}
                        value={selectedDate}
                      />
                      <InputGroupText>
                        <i className="fa fa-calendar"></i>
                      </InputGroupText>
                    </InputGroup>
                    <Button
                      color="secondary"
                      onClick={() => {
                        setSelectedDate(new Date());
                        setSearchTerm("");
                      }}
                    >
                      Clear
                    </Button>
                  </div>
                </Col>
              </Row>
              <LogData data={logData} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default LogTable;
