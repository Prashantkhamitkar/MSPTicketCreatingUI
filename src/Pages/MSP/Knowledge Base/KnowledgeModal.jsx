import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  Col,
  FormGroup,
  Label,
  Modal,
  ModalBody,
  Row,
  Input,
  ModalFooter,
  Button,
  FormFeedback,
} from "reactstrap";
import Select from "react-select";
import { useFormik } from "formik";
import * as Yup from "yup";

const KnowledgeModal = ({ modal, toggle }) => {
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

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: "",
      category: null,
      subCategory: null,
      reference: "",
      content: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Please Enter Title"),
     
      reference: Yup.string()
        .url("Invalid URL")
        .required("Please Enter Reference Link"),
      content: Yup.string().required("Please Enter Content"),
    }),
    onSubmit: (values) => {
      console.log("values", values);
      // Handle form submission
    },
  });

  const handleEditorStateChange = (editorState) => {
    validation.setFieldValue("content", editorState);
  };

  return (
    <Modal isOpen={modal} toggle={toggle} size="xl" centered>
      <form
        className="needs-validation"
        onSubmit={(e) => {
          e.preventDefault();
          validation.handleSubmit();
          return false;
        }}
      >
        <ModalBody>
          <FormGroup>
            <Row>
              <Col md={12}>
                <Row className="mt-3">
                  <Col lg="8">
                    <FormGroup>
                      <Label
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        TITLE
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
                        name="title"
                        id="title"
                        className="custominput"
                        placeholder="Enter Title"
                        required={true}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.title}
                        invalid={
                          validation.touched.title && validation.errors.title
                            ? true
                            : false
                        }
                      />
                      {validation.touched.title && validation.errors.title ? (
                        <FormFeedback type="invalid">
                          {validation.errors.title}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={4}>
                    <Label
                      for="category"
                      style={{
                        position: "relative",
                        display: "inline-block",
                      }}
                    >
                      CATEGORY
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
                      placeholder="Select Category"
                      styles={customStyles}
                      classNamePrefix="select2-selection"
                      menuPlacement="auto"
                      menuPortalTarget={document.body}
                      onChange={(value) =>
                        validation.setFieldValue("category", value)
                      }
                      onBlur={validation.handleBlur}
                      value={validation.values.category}
                      isInvalid={
                        validation.touched.category &&
                        validation.errors.category
                          ? true
                          : false
                      }
                    />
                    {validation.touched.category &&
                    validation.errors.category ? (
                      <FormFeedback type="invalid">
                        {validation.errors.category}
                      </FormFeedback>
                    ) : null}
                  </Col>
                  <Col lg={4}>
                    <Label
                      for="subCategory"
                      className="mt-3 mt-lg-0"
                      style={{
                        position: "relative",
                        display: "inline-block",
                      }}
                    >
                      SUB CATEGORY
                    </Label>
                    <Select
                      placeholder="Select Sub Category"
                      styles={customStyles}
                      classNamePrefix="select2-selection"
                      menuPlacement="auto"
                      menuPortalTarget={document.body}
                      onChange={(value) =>
                        validation.setFieldValue("subCategory", value)
                      }
                      onBlur={validation.handleBlur}
                      value={validation.values.subCategory}
                    />
                  </Col>
                  <Col lg={4}>
                    <Label
                      for="reference"
                      className="mt-3 mt-lg-0"
                      style={{
                        position: "relative",
                        display: "inline-block",
                      }}
                    >
                      REFERENCE LINKS
                    </Label>
                    <Input
                      id="reference"
                      className="custominput"
                      placeholder="Enter Reference Link"
                      required={true}
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      value={validation.values.reference}
                      invalid={
                        validation.touched.reference &&
                        validation.errors.reference
                          ? true
                          : false
                      }
                    />
                    {validation.touched.reference &&
                    validation.errors.reference ? (
                      <FormFeedback type="invalid">
                        {validation.errors.reference}
                      </FormFeedback>
                    ) : null}
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col lg="12">
                    <Label
                      for="content"
                      className="mt-3 mt-lg-0"
                      style={{
                        position: "relative",
                        display: "inline-block",
                      }}
                    >
                      CONTENT
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
                    <Editor
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName custominput"
                      placeholder="   Start From Here..."
                      editorStyle={{
                        minHeight: "200px",
                        maxHeight: "400px",
                        overflow: "auto",
                      }}
                      onEditorStateChange={handleEditorStateChange}
                    />
                    {validation.touched.content && validation.errors.content ? (
                      <FormFeedback type="invalid">
                        {validation.errors.content}
                      </FormFeedback>
                    ) : null}
                  </Col>
                </Row>
              </Col>
            </Row>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit">
            CREATE
          </Button>
          <Button color="secondary" onClick={toggle}>
            CANCEL
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default KnowledgeModal;
