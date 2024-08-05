import React, { useState, useEffect } from "react";
import {
  Button,
  FormGroup,
  Row,
  Col,
  Modal,
  Input,
  InputGroup,
  ModalBody,
  ModalFooter,
  Label,
  InputGroupText,
} from "reactstrap";
import Select from "react-select";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

const EditContractModal = ({
  modal,
  toggle,
  selectedRow,
  customers,
  sites,
  products,
  contractTypes,
}) => {
  const [formData, setFormData] = useState({
    Customer: "",
    Site: "",
    Product: "",
    Description: "",
    StartDate: "",
    EndDate: "",
    TypeOfService: "",
    ContractPricing: "",
    ContractType: "",
  });

  useEffect(() => {
    if (selectedRow) {
      setFormData({
        Customer: { label: selectedRow.Customer, value: selectedRow.Customer },
        Site: { label: selectedRow.Site, value: selectedRow.Site },
        Product: { label: selectedRow.Product, value: selectedRow.Product },
        Description: selectedRow.Description,
        StartDate: new Date(selectedRow.StartDate),
        EndDate: new Date(selectedRow.EndDate),
        TypeOfService: selectedRow.TypeOfService,
        ContractPricing: selectedRow.ContractPricing,
        ContractType: {
          label: selectedRow.ContractType,
          value: selectedRow.ContractType,
        },
      });
    }
  }, [selectedRow]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name, selectedOption) => {
    setFormData({ ...formData, [name]: selectedOption });
  };

  const handleDateChange = (name, date) => {
    setFormData({ ...formData, [name]: date });
  };

  const handleSubmit = () => {
    // Logic to save changes
    console.log("Form data submitted: ", formData);
    // Here you can call your API to update the record
    toggle(); // Close the modal after saving
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
      <Modal isOpen={modal} toggle={toggle} size="xl" centered>
        <ModalBody>
          <FormGroup>
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
                      value={formData.Customer}
                      onChange={(selectedOption) =>
                        handleSelectChange("Customer", selectedOption)
                      }
                      options={customers}
                      name="Customer"
                      placeholder="Select Customer"
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
                      value={formData.Site}
                      onChange={(selectedOption) =>
                        handleSelectChange("Site", selectedOption)
                      }
                      options={sites}
                      styles={customStyles}
                      name="Site"
                      placeholder="Select Site"
                      classNamePrefix="select2-selection"
                      menuPlacement="auto"
                      menuPortalTarget={document.body}
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
                        value={formData.StartDate}
                        onChange={(date) => handleDateChange("StartDate", date)}
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
                        value={formData.EndDate}
                        onChange={(date) => handleDateChange("EndDate", date)}
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
                      type="text"
                      name="ContractPricing"
                      value={formData.ContractPricing}
                      onChange={handleChange}
                      required
                      placeholder="Enter Contract Pricing"
                      className="custominput"
                    />
                  </Col>
                  <Col lg="6">
                    <Label
                      for="TypeOfService"
                      style={{ position: "relative", display: "inline-block" }}
                      className="mt-3 mt-md-3 mt-lg-0"
                    >
                      TYPE OF SERVICE
                    </Label>
                    <Input
                      type="text"
                      name="TypeOfService"
                      value={formData.TypeOfService}
                      onChange={handleChange}
                      required
                      placeholder="Enter Type Of Service"
                      className="custominput"
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg="6">
                    <Label>PRODUCT</Label>
                    <Select
                      value={formData.Product}
                      onChange={(selectedOption) =>
                        handleSelectChange("Product", selectedOption)
                      }
                      options={products}
                      styles={customStyles}
                      name="Product"
                      placeholder="Select Product"
                      menuPlacement="auto"
                      classNamePrefix="select2-selection"
                      menuPortalTarget={document.body}
                    />
                  </Col>
                  <Col lg="6">
                    <Label for="ContractType" className="mt-3 mt-md-3 mt-lg-0">
                      CONTRACT TYPE
                    </Label>
                    <Select
                      value={formData.ContractType}
                      onChange={(selectedOption) =>
                        handleSelectChange("ContractType", selectedOption)
                      }
                      options={contractTypes}
                      styles={customStyles}
                      name="ContractType"
                      placeholder="Select Contract Type"
                      menuPlacement="auto"
                      classNamePrefix="select2-selection"
                      menuPortalTarget={document.body}
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg="6">
                    <Label>DESCRIPTION</Label>
                    <textarea
                      name="Description"
                      value={formData.Description}
                      onChange={handleChange}
                      placeholder="Enter Description"
                      required
                      className="form-control custominput"
                      rows="3"
                    ></textarea>
                  </Col>
                </Row>
              </Col>
            </Row>
          </FormGroup>
        </ModalBody>
        <ModalFooter className="d-flex flex-column flex-md-row align-items-center justify-content-end">
          <div className="d-flex flex-column flex-md-row">
            <Button
              color="success"
              className="mb-2 mb-md-0 me-md-3"
              onClick={handleSubmit}
            >
              Apply Changes
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default EditContractModal;
