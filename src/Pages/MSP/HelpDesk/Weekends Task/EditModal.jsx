import React, { useState, useEffect } from "react";
import {
  Button,
  Col,

  FormGroup,

  Label,
  Modal,
  ModalBody,
  ModalFooter,
  Row,
} from "reactstrap";
import Select from "react-select";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditModal = ({ modal, toggleModal, rowData, customers, assignees }) => {
  const [initialValues, setInitialValues] = useState({
    selectedCustomer: null,
    subject: "",
    description: "",
    resolution: "",
    status: { value: "Open", label: "Open" },
    assignedTo: null,
  });

  useEffect(() => {
    if (rowData) {
      const customerOption = customers.find(
        (c) => c.value === rowData.CUSTOMER_NAME
      );
      const assigneeOption = assignees.find(
        (a) => a.value === rowData.ASSIGNED_TO
      );

      setInitialValues({
        selectedCustomer: customerOption || null,
        subject: rowData.SUBJECT,
        description: rowData.DESCRIPTION,
        resolution: rowData.RESOLUTION,
        status: { value: rowData.STATUS, label: rowData.STATUS },
        assignedTo: assigneeOption || null,
      });
    }
  }, [rowData, customers, assignees]);

  const validationSchema = Yup.object().shape({
    selectedCustomer: Yup.object().required("Customer is required"),
    subject: Yup.string().required("Subject is required"),
    description: Yup.string().required("Description is required"),
    resolution: Yup.string(),
    status: Yup.object().required("Status is required"),
    assignedTo: Yup.object().required("Assignee is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    toggleModal();
  };

  const handleDelete = () => {
    console.log("Deleting...");
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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ setFieldValue }) => (
            <Form>
              <FormGroup>
                <Row>
                  <Col md={12}>
                    <Row className="mt-3">
                      <Col lg="6">
                        <Label>CUSTOMER</Label>
                        <Field name="selectedCustomer">
                          {({ field, form }) => (
                            <Select
                              placeholder="Select Customer"
                              options={customers}
                              onChange={(option) =>
                                form.setFieldValue(field.name, option)
                              }
                              value={field.value}
                              classNamePrefix="select2-selection"
                              menuPlacement="auto"
                              menuPortalTarget={document.body}
                              styles={customStyles}
                            />
                          )}
                        </Field>
                        
                          <ErrorMessage
                            name="selectedCustomer"
                            component="div"
                            className="text-danger"
                          />
                       
                      </Col>
                      <Col lg="6">
                        <Label for="subject">SUBJECT</Label>
                        <Field
                          id="subject"
                          name="subject"
                          className="form-control custominput"
                          placeholder="Enter subject"
                        />
                        <ErrorMessage
                          name="subject"
                          component="div"
                          className="text-danger"
                        />
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col lg="6">
                        <div className="mb-3">
                          <Label>DESCRIPTION</Label>
                          <Field
                            name="description"
                            as="textarea"
                            className="form-control custominput"
                            rows="5"
                            placeholder="Enter description"
                          />
                          <ErrorMessage
                            name="description"
                            component="div"
                            className="text-danger"
                            type="invalid"
                          />
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="mb-3">
                          <Label>RESOLUTION</Label>
                          <Field
                            name="resolution"
                            as="textarea"
                            className="form-control custominput"
                            rows="5"
                            placeholder="Enter resolution"
                          />
                          <ErrorMessage
                            name="resolution"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col lg="6">
                        <div className="mb-3">
                          <Label>STATUS</Label>
                          <Field name="status">
                            {({ field, form }) => (
                              <Select
                                placeholder="Select Status"
                                options={[
                                  { value: "Open", label: "Open" },
                                  { value: "Completed", label: "Completed" },
                                  {
                                    value: "In Progress",
                                    label: "In Progress",
                                  },
                                ]}
                                onChange={(option) =>
                                  form.setFieldValue(field.name, option)
                                }
                                value={field.value}
                                classNamePrefix="select2-selection"
                                menuPlacement="auto"
                                menuPortalTarget={document.body}
                                styles={customStyles}
                              />
                            )}
                          </Field>
                          <ErrorMessage
                            name="status"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="mb-3">
                          <Label>ASSIGNED TO</Label>
                          <Field name="assignedTo">
                            {({ field, form }) => (
                              <Select
                                placeholder="Select Assignee"
                                options={assignees}
                                onChange={(option) =>
                                  form.setFieldValue(field.name, option)
                                }
                                value={field.value}
                                classNamePrefix="select2-selection"
                                menuPlacement="auto"
                                menuPortalTarget={document.body}
                                styles={customStyles}
                              />
                            )}
                          </Field>
                          <ErrorMessage
                            name="assignedTo"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </FormGroup>
              <ModalFooter>
                <Button color="danger" onClick={handleDelete}>
                  DELETE
                </Button>
                <Button color="info" type="submit">
                  SAVE
                </Button>
                <Button color="secondary" onClick={toggleModal}>
                  CANCEL
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalBody>
    </Modal>
  );
};

export default EditModal;
