import React, { useEffect, useState } from "react";
import dummyData from "./Attendance";
import AttendanceData from "./AttendanceData";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  InputGroup,
  Label,
  Row,
} from "reactstrap";
import Select from "react-select";
import ActionButton from "../../common/ActionButton";

// Function to extract unique month options from data
const getMonthOptions = (data) => {
  const months = [...new Set(data.map((item) => item.month))];
  const monthMap = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    10: "October",
    11: "November",
    12: "December",
  };

  return months
    .map((month) => {
      const [year, monthNum] = month.split("-");
      return {
        value: month,
        label: `${monthMap[monthNum]} ${year}`,
      };
    })
    .sort((a, b) => new Date(a.value + "-01") - new Date(b.value + "-01"));
};

const AttendanceTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [attendance, setAttendance] = useState(dummyData);
  const [selectedMonth, setSelectedMonth] = useState(null);

  // Get month options from the data
  const monthOptions = getMonthOptions(dummyData);

  useEffect(() => {
    const filtered = dummyData.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setAttendance(filtered);
  }, [searchTerm]);

  useEffect(() => {
    if (selectedMonth) {
      const filtered = dummyData.filter(
        (item) => item.month === selectedMonth.value
      );
      setAttendance(filtered);
    } else {
      setAttendance(dummyData);
    }
  }, [selectedMonth]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedMonth(null);
    setAttendance(dummyData);
  };

  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title mb-0">ATTENDANCE RECORD</h5>
            </CardHeader>
            <CardBody>
              <Row className="g-4 flex-column flex-lg-row">
                <Col className="col-sm d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center ">
                  <div className="app-search d-flex mt-0 align-items-center gap-3">
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
                  </div>
                  <ActionButton data={attendance} setdata={setAttendance} />
                  <div className="d-flex justify-content-center align-items-center gap-4">
                    <Label
                      className="mb-0 ms-0 ms-lg-5"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      Month
                      <i
                        className="fas fa-asterisk"
                        style={{
                          color: "red",
                          fontSize: "0.5em",
                          position: "absolute",
                          top: "0.5em",
                          right: "-1.5em",
                        }}
                      ></i>
                    </Label>
                    <InputGroup>
                      <Select
                        options={monthOptions}
                        value={selectedMonth}
                        onChange={setSelectedMonth}
                        placeholder="Select Month"
                        classNamePrefix="select2-selection"
                      />
                    </InputGroup>
                  </div>
                  <Button
                    color="secondary"
                    className="btn btn-rounded btn-light waves-effect mb-3 mb-lg-0 "
                    onClick={clearFilters}
                  >
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="">CLEAR</span>{" "}
                      <i
                        className="fas fa-times ms-2"
                        style={{ fontSize: "0.9rem" }}
                      ></i>
                    </div>
                  </Button>
                </Col>
              </Row>
              <AttendanceData data={attendance} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AttendanceTable;
