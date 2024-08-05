import React, { useState } from "react";
import {
  Col,
  FormGroup,
  Input,
  InputGroup,
  ModalFooter,
  Button,
  Label,
  Modal,
  ModalBody,
  Row,
  Card,
  Form,
  InputGroupText,
} from "reactstrap";
import Select from "react-select";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";
const ContractCalendarModal = ({ modal, toggleModal }) => {
      const [selectedFiles, setSelectedFiles] = useState([]);
  const handleSubmit = () => {
    console.log("submit");
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
    const handleAcceptedFiles = (files) => {
      const formattedFiles = files.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          formattedSize: formatBytes(file.size),
        })
      );
      setSelectedFiles(formattedFiles);
      
    };

    const formatBytes = (bytes, decimals = 2) => {
      if (bytes === 0) return "0 Bytes";
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    };
const truncateString = (str, numWords) => {
  const words = str.split(" ");
  const truncated = words.slice(0, numWords).join(" ");
  if (words.length > numWords) {
    return truncated + "...";
  }
  return truncated;
};

  return (
    <>
      <Modal isOpen={modal} toggle={toggleModal} size="lg" centered>
        <ModalBody>
          <FormGroup>
            <Row>
              <Col md={12}>
                <Row className="mt-3">
                  <Col lg="6">
                    <Label
                      className="form-label"
                      style={{
                        position: "relative",
                        display: "inline-block",
                      }}
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
                    <Label for="site" className="mt-3 mt-md-3 mt-lg-0">
                      VENDOR
                    </Label>
                    <Select
                      placeholder="Select Vendor"
                      //   options={customers} // Assuming customers contain site options
                      //   onChange={setSelectedSite}
                      //   value={selectedSite}
                      classNamePrefix="select2-selection"
                      menuPlacement="auto"
                      menuPortalTarget={document.body}
                      styles={customStyles}
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg="6">
                    <Label for="CONTRACT" className=" mt-md-3 mt-lg-0">
                      CONTRACT TITLE
                    </Label>
                    <Input
                      id="CONTRACT"
                      className="custominput"
                      required={true}
                      placeholder="Enter the Contract Title"
                    />
                  </Col>
                  <Col lg="6">
                    <Label for="url" className="mt-3 mt-md-3 mt-lg-0">
                      URL
                    </Label>
                    <Input
                      id="url"
                      className="custominput"
                      required={true}
                      placeholder="Enter the URL"
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg="6">
                    <div className="">
                      <Label className="form-label">START DATE</Label>
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
                    <div className="mt-3 mt-lg-0">
                      <Label className="form-label">END DATE</Label>
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
                <Row className="mt-3">
                  <Col lg="6">
                    <div className="">
                      <Label>NOTE</Label>
                      <textarea
                        placeholder="Enter Notes"
                        required
                        className="form-control custominput"
                        rows="5"
                      ></textarea>
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="mt-3 mt-lg-0">
                      <Label className="form-label">FILE</Label>
                      <Form className="dropzone">
                        <Dropzone
                          onDrop={(acceptedFiles) => {
                            handleAcceptedFiles(acceptedFiles);
                          }}
                        >
                          {({ getRootProps, getInputProps }) => (
                            <div style={{ textAlign: "center" }}>
                              <div
                                className="dz-message needsclick mt-4"
                                {...getRootProps()}
                              >
                                <input {...getInputProps()} />
                                <div className="mb-3">
                                  <i className="display-4 text-muted mdi mdi-cloud-upload-outline"></i>
                                </div>
                                <h4>Drop files here to upload</h4>
                              </div>
                            </div>
                          )}
                        </Dropzone>
                        <div
                          className="dropzone-previews mt-2"
                          id="file-previews"
                        >
                          {selectedFiles.map((file, index) => (
                            <Card
                              className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                              key={index + "-file"}
                            >
                              <div className="p-2">
                                <Row className="align-items-center">
                                  <Col className="col-auto">
                                    <img
                                      data-dz-thumbnail=""
                                      height="80"
                                      className="avatar-sm rounded bg-light"
                                      alt={file.name}
                                      src={file.preview}
                                    />
                                  </Col>
                                  <Col>
                                    <Link
                                      to="#"
                                      className="text-muted font-weight-bold"
                                    >
                                      {truncateString(file.name, 4)}
                                    </Link>
                                    <p className="mb-0">
                                      <strong>{file.formattedSize}</strong>
                                    </p>
                                  </Col>
                                </Row>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </FormGroup>
        </ModalBody>
        <ModalFooter className="d-flex flex-column flex-md-row justify-content-between ">
          <div className="d-flex justify-content-start mb-2 mb-md-0">
            <Button color="danger" className="w-100 w-md-auto">
              DELETE
            </Button>
          </div>
          <div className="d-flex gap-3 justify-content-end flex-column flex-md-row">
            <Button color="info" onClick={handleSubmit} className="">
              APPLY CHANGES
            </Button>
            <Button color="secondary" onClick={toggleModal} className="">
              CANCEL
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ContractCalendarModal;
