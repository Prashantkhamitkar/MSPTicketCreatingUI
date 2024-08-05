import React, { useState } from "react";
import {
  Button,
  Col,
  FormGroup,
  InputGroup,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  Row,
  InputGroupText
} from "reactstrap";
import Select from "react-select";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

const BackupModal = ({
  modal,
  toggleModal,
  customers,
  assets,
  onSubmit,
  initialData,
}) => {
  const [selectedCustomer, setSelectedCustomer] = useState(
    initialData.selectedCustomer || null
  );
  const [selectedSite, setSelectedSite] = useState(
    initialData.selectedSite || null
  );
  const [selectedAsset, setSelectedAsset] = useState(
    initialData.selectedAsset || null
  );
  const [backupDate, setBackupDate] = useState(
    initialData.backupDate || new Date()
  );
  const [status, setStatus] = useState(
    initialData.status || { value: "Success", label: "Success" }
  );
  const [comments, setComments] = useState(initialData.comments || "");

  const statusOptions = [
    { value: "Success", label: "Success" },
    { value: "Failed", label: "Failed" },
    { value: "Warning", label: "Warning" },
  ];

  const handleSubmit = () => {
    const data = {
      selectedCustomer,
      selectedSite,
      selectedAsset,
      backupDate,
      status,
      comments,
    };
    onSubmit(data);
    toggleModal();
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
    <Modal isOpen={modal} toggle={toggleModal} size="lg" centered>
      <ModalBody>
        <FormGroup>
          <Row>
            <Col md={12}>
              <Row className="mt-3">
                <Col lg="6">
                  <Label>CUSTOMER</Label>
                  <Select
                    placeholder="Select Customer"
                    options={customers}
                    onChange={setSelectedCustomer}
                    value={selectedCustomer}
                    classNamePrefix="select2-selection"
                    menuPlacement="auto"
                    menuPortalTarget={document.body}
                    styles={customStyles}
                  />
                </Col>
                <Col lg="6">
                  <Label for="site" className="mt-3 mt-md-3 mt-lg-0">
                    SITE
                  </Label>
                  <Select
                    placeholder="Select Site"
                    options={customers} // Assuming customers contain site options
                    onChange={setSelectedSite}
                    value={selectedSite}
                    classNamePrefix="select2-selection"
                    menuPlacement="auto"
                    menuPortalTarget={document.body}
                    styles={customStyles}
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col lg="6">
                  <Label for="asset" className="mt-3 mt-md-3 mt-lg-0">
                    ASSET
                  </Label>
                  <Select
                    placeholder="Select Asset"
                    options={assets}
                    onChange={setSelectedAsset}
                    value={selectedAsset}
                    classNamePrefix="select2-selection"
                    menuPlacement="auto"
                    menuPortalTarget={document.body}
                    styles={customStyles}
                  />
                </Col>
                <Col lg="6">
                  <div className="mb-3">
                    <Label className="form-label">BACKUP DATE</Label>
                    <InputGroup>
                      <Flatpickr
                        className="form-control d-block custominput"
                        options={{
                          altInput: true,
                          altFormat: "F j, Y",
                          dateFormat: "Y-m-d",
                        }}
                        value={backupDate}
                        onChange={(date) => setBackupDate(date[0])}
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
                  <div className="mb-3">
                    <Label>STATUS</Label>
                    <Select
                      placeholder="Select Status"
                      classNamePrefix="select2-selection"
                      styles={customStyles}
                      menuPlacement="auto"
                      menuPortalTarget={document.body}
                      options={statusOptions}
                      value={status}
                      onChange={setStatus}
                    />
                  </div>
                </Col>
                <Col lg="6">
                  <div className="mb-3">
                    <Label>COMMENTS</Label>
                    <textarea
                      placeholder="Enter Additional Product Information"
                      required
                      className="form-control custominput"
                      rows="5"
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                    ></textarea>
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
        <Button color="secondary" onClick={toggleModal}>
          CANCEL
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default BackupModal;
