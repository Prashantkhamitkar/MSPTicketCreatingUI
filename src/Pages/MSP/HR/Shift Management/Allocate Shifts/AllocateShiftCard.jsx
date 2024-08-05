import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";
import Select from "react-select";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";
const AllocateShiftsCard = () => {
  const [selectedOption, setSelectedOption] = useState(null);
const shiftOptions = [
  {
    value: "monday-to-friday-early-login",
    label: "Monday to Friday-Early Login",
  },
  { value: "monday-to-friday-general", label: "Monday to Friday-General" },
  {
    value: "monday-to-friday-late-login",
    label: "Monday to Friday-Late Login",
  },
  { value: "saturday-general", label: "Saturday-General" },
  { value: "sunday-general", label: "Sunday-General" },
];
const handleChange = (option) => {
  setSelectedOption(option);
};
  const customStyles = {
    menu: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 9999,
    }),
  };
  return (
    <>
      <Row className="d-flex justify-content-center mt-1 mt-md-5">
        <Col lg={6}>
          <Card className="card-primary" style={{ backgroundColor: "#A2C4F4" }}>
            <h6 className="card-header text-center">Allocate Shift</h6>

            <CardBody>
              <Row className="mt-3 d-flex justify-content-center ">
                <Col>
                  <Label
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    SHIFT TYPE
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
                  <Select
                    placeholder="Select Shift Type"
                    options={shiftOptions}
                    onChange={handleChange}
                    value={selectedOption}
                    classNamePrefix="select2-selection"
                    menuPlacement="auto"
                    menuPortalTarget={document.body}
                    styles={customStyles}
                  />
                </Col>
              </Row>
              <Row className="mt-3 d-flex justify-content-center ">
                <Col>
                  <Label
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    USER
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
                  <Select
                    placeholder="Select User"
                    // options={customers}
                    // onChange={setSelectedCustomer}
                    // value={selectedCustomer}
                    classNamePrefix="select2-selection"
                    menuPlacement="auto"
                    menuPortalTarget={document.body}
                    styles={customStyles}
                  />
                </Col>
              </Row>
              <Row className="mt-3 d-flex justify-content-center ">
                <Col>
                  <Label
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    START DATE
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
                    <Flatpickr
                      className="form-control d-block custominput"
                      options={{
                        altInput: true,
                        altFormat: "F j, Y",
                        dateFormat: "Y-m-d",
                      }}
                    />
                    <InputGroupText>
                      <i className="fa fa-calendar"></i>
                    </InputGroupText>
                  </InputGroup>
                </Col>
              </Row>
              <Row className="mt-3 d-flex justify-content-center ">
                <Col>
                  <Label
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    END DATE
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
                    <Flatpickr
                      className="form-control d-block custominput"
                      options={{
                        altInput: true,
                        altFormat: "F j, Y",
                        dateFormat: "Y-m-d",
                      }}
                    />
                    <InputGroupText>
                      <i className="fa fa-calendar"></i>
                    </InputGroupText>
                  </InputGroup>
                </Col>
              </Row>
            </CardBody>
            <CardFooter className="d-flex justify-content-center justify-content-md-end mb-3">
              <Button color="info" className="me-4 me-md-3">
                CREATE
              </Button>
              <Button color="danger">CANCEL</Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AllocateShiftsCard;
