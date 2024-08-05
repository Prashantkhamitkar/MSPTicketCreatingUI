import React from 'react'
import { Button, Col, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, Row } from 'reactstrap';
import Select from "react-select";

const BackupEditModal = ({modal,toggle,selectedRow})=>{
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
   // Handle form submission for editing
  
   toggle();
 };

 const handleDelete = () => {
   // Handle delete operation
   console.log("Deleting...");
   toggle(); // Close modal after delete operation
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
                       
                      >
                        CUSTOMER
                      </Label>
                      <Select
                        placeholder="Select Customer"
                        // options={customers}
                        // onChange={setSelectedCustomer}
                        // value={selectedCustomer}
                        classNamePrefix="select2-selection"
                        menuPlacement="auto"
                        menuPortalTarget={document.body}
                        styles={customStyles}
                      />
                    </Col>
                    <Col lg="6">
                      <Label
                       
                      >
                        SUBJECT
                        
                      </Label>
                      <Input
                        
                        className="custominput"
                        placeholder="Enter subject"
                        required={true}
                       
                      />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg="6">
                      <div className="mb-3">
                        <Label
                         
                        >
                          DESCRIPTION
                         
                        </Label>
                        <div>
                          <textarea
                            placeholder="Enter Additional Product Information"
                            required
                            className="form-control custominput"
                            rows="5"
                            // value={description}
                            // onChange={(e) => setDescription(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="mb-3">
                        <Label className="form-label">RESOLUTION</Label>
                        <div>
                          <textarea
                            placeholder="Enter Additional Product Information"
                            required
                            className="form-control custominput"
                            rows="5"
                            // value={resolution}
                            // onChange={(e) => setResolution(e.target.value)}
                          ></textarea>
                        </div>
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
                        //   options={statusOptions}
                        //   value={status}
                        //   onChange={setStatus}
                        />
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="mb-3">
                        <Label>ASSIGNED TO</Label>
                        <Select
                          placeholder="Select Assignee"
                          classNamePrefix="select2-selection"
                          styles={customStyles}
                          menuPlacement="auto"
                          menuPortalTarget={document.body}
                        //   options={assignees}
                        //   value={assignedTo}
                        //   onChange={setAssignedTo}
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={handleDelete}>
              DELETE
            </Button>
            <Button color="info" onClick={handleSubmit}>
              SAVE
            </Button>
            <Button color="secondary" onClick={()=>toggle()}>
              CANCEL
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
}

export default BackupEditModal