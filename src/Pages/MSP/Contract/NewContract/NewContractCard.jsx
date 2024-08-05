import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";
import Select from "react-select";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

const NewContractCard = () => {
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Card body>
        <CardBody>
          <Row>
            <Col md={12}>
              <Row className="mt-3">
                <Col lg="6">
                  <Label
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    CUSTOMER
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
                    placeholder="Select Customer"
                    //   options={customers}
                    //   onChange={setSelectedCustomer}
                    //   value={selectedCustomer}
                    classNamePrefix="select2-selection"
                    menuPlacement="auto"
                    menuPortalTarget={document.body}
                    styles={customStyles}
                  />
                </Col>
                <Col lg="6">
                  <Label
                    for="SITE"
                    style={{ position: "relative", display: "inline-block" }}
                    className="mt-3 mt-md-3 mt-lg-0"
                  >
                    SITE
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
                    placeholder="Select Site"
                    //   options={customers}
                    //   onChange={setSelectedCustomer}
                    //   value={selectedCustomer}
                    classNamePrefix="select2-selection"
                    menuPlacement="auto"
                    menuPortalTarget={document.body}
                    styles={customStyles}
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col lg="6">
                  <Label
                    for="startdate"
                    style={{ position: "relative", display: "inline-block" }}
                    className="mt-3 mt-md-3 mt-lg-0"
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
                <Col lg="6">
                  <Label
                    for="enddate"
                    style={{ position: "relative", display: "inline-block" }}
                    className="mt-3 mt-md-3 mt-lg-0"
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
              <Row className="mt-3">
                <Col lg="6">
                  <Label
                    for="contractpricing"
                    style={{ position: "relative", display: "inline-block" }}
                    className="mt-3 mt-md-3 mt-lg-0"
                  >
                    CONTRACT PRICING
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
                  <Input
                    id="contractpricing"
                    className="custominput"
                    required={true}
                    placeholder="Enter the Contract Price"
                  />
                </Col>
                <Col lg="6">
                  <Label for="typeofservice" className="mt-3 mt-md-3 mt-lg-0">
                    TYPE OF SERVICE
                  </Label>
                  <Input
                    id="typeofservice"
                    className="custominput"
                    required={true}
                    placeholder="Enter the Type Of Service"
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col lg="6">
                  <Label>PRODUCT</Label>
                  <Select
                    placeholder="Select Product"
                    //   options={customers}
                    //   onChange={setSelectedCustomer}
                    //   value={selectedCustomer}
                    classNamePrefix="select2-selection"
                    menuPlacement="auto"
                    menuPortalTarget={document.body}
                    styles={customStyles}
                  />
                </Col>
                <Col lg="6">
                  <Label for="SITE" className="mt-3 mt-md-3 mt-lg-0">
                    CONTRACT TYPE
                  </Label>
                  <Select
                    placeholder="Select Contract Type"
                    //   options={customers}
                    //   onChange={setSelectedCustomer}
                    //   value={selectedCustomer}
                    classNamePrefix="select2-selection"
                    menuPlacement="auto"
                    menuPortalTarget={document.body}
                    styles={customStyles}
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col lg="6">
                  <Label>DESCRIPTION</Label>
                  <textarea
                    placeholder="Enter Description"
                    required
                    className="form-control custominput"
                    rows="3"
                  ></textarea>
                </Col>
              </Row>
              <Row className="mt-4 d-flex justify-content-end">
                <Col
                  xs="12"
                  md="auto"
                  className="d-flex justify-content-end mb-2 mb-md-0"
                >
                  <Button color="info" className="me-2">
                    CREATE
                  </Button>
                  <Button color="secondary">CANCEL</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default NewContractCard;
