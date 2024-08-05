import React, { useEffect } from "react";
import {
 
  Button,
  Col,
  FormGroup,
  Label,
  Row,
  Input,
  FormFeedback,
  CardTitle,
  CardBody,
  Card,
  Container,
} from "reactstrap";
import Select from "react-select";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";



const KnowledgeEditModal = () => {
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
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Please Enter Title"),
    category: Yup.object().nullable().required("Please Select Category"),
    subCategory: Yup.object().nullable(),
    content: Yup.string().required("Please Enter Content"),
  });

  const initialValues = {
    title: "",
    category: null,
    subCategory: null,
    reference: "",
    content: "",
  };

  const validation = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Values:", values);
      // Handle form submission logic here
    },
  });

  const handleEditorStateChange = (editorState) => {
    validation.setFieldValue("content", editorState);
  };

  return (
    <>
      <Row>
        <Col md={12}>
          <CardTitle className="mt-0">EDIT ARTICLE</CardTitle>
          <Card body>
            <CardBody>
              <form
                className="needs-validation"
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                }}
              >
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
                                validation.touched.title &&
                                validation.errors.title
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.title &&
                            validation.errors.title ? (
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
                        <Col lg={3}>
                          <Label>AUTHOR</Label>
                          <Input value={""} readOnly className="custominput" />
                        </Col>
                        <Col lg={3}>
                          <Label>CREATED DATE</Label>
                          <Input value={""} readOnly className="custominput" />
                        </Col>
                        <Col lg={3}>
                          <Label>LAST MODIFIED BY</Label>
                          <Input value={""} readOnly className="custominput" />
                        </Col>
                        <Col lg={3}>
                          <Label>LAST MODIFIED DATE</Label>
                          <Input value={""} readOnly className="custominput" />
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
                            placeholder="  Start From Here..."
                            editorStyle={{
                              minHeight: "200px",
                              maxHeight: "400px",
                              overflow: "auto",
                            }}
                            onEditorStateChange={handleEditorStateChange}
                          />
                          {validation.touched.content &&
                          validation.errors.content ? (
                            <FormFeedback type="invalid">
                              {validation.errors.content}
                            </FormFeedback>
                          ) : null}
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                          <Button color="danger" className="mb-2 mb-md-0">
                            DELETE
                          </Button>
                          <div className="d-flex flex-column flex-md-row">
                            <Button
                              color="primary"
                              type="submit"
                              className="mb-2 mb-md-0 me-md-3"
                            >
                              APPLY CHANGES
                            </Button>
                            <Button color="secondary">CANCEL</Button>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </FormGroup>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default KnowledgeEditModal;
