import React from "react";
import {
  Button,
  Col,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  Row,
} from "reactstrap";
import Select from "react-select";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";
const ShiftManagementModal = ({ modal, toggal }) => {
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
  const handleSubmit = () => {};
  const handlecancle = () => {
    toggal();
  };

  return (
    <>
      <Modal isOpen={modal} toggle={toggal} size="lg" centered>
        <ModalBody>
          <FormGroup>
            <Row>
              <Col md={12}>
                <Row className="mt-3">
                  <Col lg="6">
                    <Label
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      TARGET USER
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
                      for="shiftdate"
                      style={{ position: "relative", display: "inline-block" }}
                      className="mt-3 mt-md-3 mt-lg-0"
                    >
                      SHIFT DATE
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
                    <Label for="shiftname">SHIFT NAME</Label>
                    <Input
                      id="shiftname"
                      className="custominput"
                      required={true}
                    />
                  </Col>
                  <Col lg="6">
                    <div className="mb-3">
                      <Label className="form-label">REASON</Label>
                      <div>
                        <textarea
                          placeholder="Enter Additional Product Information"
                          required
                          className="form-control custominput"
                          rows="5"
                          //   value={resolution}
                          //   onChange={(e) => setResolution(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="info" onClick={handleSubmit}>
            CREATE
          </Button>
          <Button color="secondary" onClick={handlecancle}>
            CANCLE
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ShiftManagementModal;
