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

const ModalForAP = ({
  modal,
  toggle,
  selectedRow,
 status
}) => {
  const [formData, setFormData] = useState({
   startDate:"",
   endDate:"",
   leaveType:"",
   reason:"",
   status:"",
   comments:"",
  });

  useEffect(() => {
    if (selectedRow) {
      setFormData({
    
        startDate: new Date(selectedRow.startDate),
        endDate: new Date(selectedRow.endDate),
        leaveType: selectedRow.leaveType,
        reason: selectedRow.reason,
        comments:selectedRow.comments||"",
        status: {
          label: selectedRow.status,
          value: selectedRow.status,
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
                        className="form-control d-block custominput text-muted"
                        value={formData.startDate}
                        onChange={(date) => handleDateChange("StartDate", date)}
                        options={{
                          altInput: true,
                          altFormat: "F j, Y",
                          dateFormat: "Y-m-d",
                        }}
                        readOnly
                        disabled
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
                        className="form-control d-block custominput text-muted"
                        value={formData.endDate}
                        onChange={(date) => handleDateChange("EndDate", date)}
                        options={{
                          altInput: true,
                          altFormat: "F j, Y",
                          dateFormat: "Y-m-d",
                        }}
                        readOnly
                        disabled

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
                      for="leavetype"
                      style={{ position: "relative", display: "inline-block" }}
                      className="mt-3 mt-md-3 mt-lg-0"
                    >
                      LEAVE TYPE
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
                      name="leavetype"
                      value={formData.leaveType}
                      onChange={handleChange}
                      required
                      readOnly
                      className="custominput text-muted"
                    />
                  </Col>
                  <Col lg="6">
                    <Label
                      for="REASON"
                      style={{ position: "relative", display: "inline-block" }}
                      className="mt-3 mt-md-3 mt-lg-0"
                    >
                      REASON
                    </Label>
                    <Input
                      type="text"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      required
                      readOnly
                      placeholder="Enter Type Of Service"
                      className="custominput text-muted"
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg="6">
                    <Label>STATUS</Label>
                    <Select
                      value={formData.status}
                      onChange={(selectedOption) =>
                        handleSelectChange("Product", selectedOption)
                      }
                      options={status}
                      styles={customStyles}
                      name="Product"
                      placeholder="Select Product"
                      menuPlacement="auto"
                      classNamePrefix="select2-selection"
                      menuPortalTarget={document.body}
                    />
                  </Col>
                  <Col lg="6">
                    <Label>COMMENTS</Label>
                    <textarea
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      placeholder="Enter Comments"
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

export default ModalForAP;
