import React from "react";
import {
  Button,
  Col,
  FormGroup,
  InputGroup,
  InputGroupText,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  Row,
} from "reactstrap";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
const MyLeaveModal = ({ modal, toggle }) => {
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
  const handleSubmit = () => {
    console.log("submit clicked");
  };
  const handlecancle = () => {
    toggle();
  };

  return (
    <>
      <Modal isOpen={modal} toggle={toggle} size="lg" centered>
        <ModalBody>
          <FormGroup>
            <Row>
              <Col md={12}>
                <Row className="mt-3">
                  <Col lg="6">
                    <Label
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      REASON
                    </Label>
                    <div>
                      <textarea
                        placeholder="Enter Reason"
                        required
                        className="form-control custominput"
                        rows="3"
                        // value={description}
                        // onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                  </Col>
                  <Col lg="6">
                    <Label
                      for="subject"
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
                    <Select
                      placeholder="Select.."
                      classNamePrefix="select2-selection"
                      styles={customStyles}
                      menuPlacement="auto"
                      menuPortalTarget={document.body}
                      //   options={statusOptions}
                      //   value={status}
                      //   onChange={setStatus}
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg="6">
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
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
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="mb-3">
                      <Label
                        className="form-label"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        LAST DATE
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
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="info" onClick={handleSubmit}>
            APPLY
          </Button>
          <Button color="secondary" onClick={handlecancle}>
            CANCLE
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default MyLeaveModal;
