import React, { useState } from "react";
import {
  Button,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  FormGroup,
  FormFeedback,
} from "reactstrap";
import LocationSearchInput from "../common/SearchLocationInput";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddCustomerModal = ({ modal, toggleModal }) => {
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      customerName: "",
      website: "",
      tags: "",
      phone: "",
      stockSymbol: "",
      sic: "",
      duns: "",
      customerProfile: "",
    },
    validationSchema: Yup.object({
      customerName: Yup.string().required("Please Enter Customer Name"),
      phone: Yup.string().required("Please Enter Phone"),
      stockSymbol: Yup.string().required("Please Enter Stock Symbol"),
      sic: Yup.string().required("Please Enter Sic"),
      duns: Yup.string().required("Please Enter Duns"),
    }),
    onSubmit: (values) => {
      console.log("values", values);
      // Handle form submission
    },
  });

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleAddressSelect = (address, city, state, country, zipCode) => {
    setAddress(address);
    setCity(city);
    setState(state);
    setCountry(country);
    setZipCode(zipCode);
  };

  return (
    <Modal isOpen={modal} toggle={toggleModal} size="xl" centered>
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
                  <Col lg="6">
                    <FormGroup>
                      <Label
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        CUSTOMER NAME
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
                        name="customerName"
                        id="customer"
                        className="custominput"
                        placeholder="Enter Customer Name"
                        required={true}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.customerName || ""}
                        invalid={
                          validation.touched.customerName &&
                          validation.errors.customerName
                            ? true
                            : false
                        }
                      />
                      {validation.touched.customerName &&
                      validation.errors.customerName ? (
                        <FormFeedback type="invalid">
                          {validation.errors.customerName}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <Label for="Address" className="mt-3 mt-lg-0">
                      ADDRESS
                    </Label>
                    <LocationSearchInput onSelect={handleAddressSelect} />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={3}>
                    <Label
                      for="city"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      CITY
                    </Label>
                    <Input
                      id="city"
                      className="custominput"
                      placeholder="Enter City Name"
                      value={city}
                      readOnly
                      required={true}
                    />
                  </Col>
                  <Col lg={3}>
                    <Label
                      for="State"
                      className="mt-3 mt-lg-0"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      STATE
                    </Label>
                    <Input
                      id="State"
                      className="custominput"
                      placeholder="Enter State Name"
                      value={state}
                      readOnly
                      required={true}
                    />
                  </Col>
                  <Col lg={3}>
                    <Label
                      for="Country"
                      className="mt-3 mt-lg-0"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      COUNTRY
                    </Label>
                    <Input
                      id="Country"
                      className="custominput"
                      placeholder="Enter Country Name"
                      value={country}
                      readOnly
                      required={true}
                    />
                  </Col>
                  <Col lg={3}>
                    <Label
                      for="ZipCode"
                      className="mt-3 mt-lg-0"
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      ZIP CODE
                    </Label>
                    <Input
                      id="ZipCode"
                      className="custominput"
                      placeholder="Enter Zip Code"
                      value={zipCode}
                      readOnly
                      required={true}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col lg="6">
                    <FormGroup>
                      <Label
                        for="website"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        WEB SITE
                      </Label>
                      <Input
                        name="website"
                        id="website"
                        className="custominput"
                        placeholder="Enter Website"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.website || ""}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <Label
                        for="Tags"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        TAGS
                      </Label>
                      <Input
                        name="tags"
                        id="Tags"
                        className="custominput"
                        placeholder="Enter Tags"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.tags || ""}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={3}>
                    <FormGroup>
                      <Label
                        for="Phone"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        PHONE
                      </Label>
                      <Input
                        name="phone"
                        id="Phone"
                        className="custominput"
                        placeholder="Enter Phone"
                        required={true}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.phone || ""}
                        invalid={
                          validation.touched.phone && validation.errors.phone
                            ? true
                            : false
                        }
                      />
                      {validation.touched.phone && validation.errors.phone ? (
                        <FormFeedback type="invalid">
                          {validation.errors.phone}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col lg={3}>
                    <FormGroup>
                      <Label
                        for="Stock"
                        className="mt-3 mt-lg-0"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        STOCK SYMBOL
                      </Label>
                      <Input
                        name="stockSymbol"
                        id="Stock"
                        className="custominput"
                        placeholder="Enter Stock Symbol"
                        required={true}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.stockSymbol || ""}
                        invalid={
                          validation.touched.stockSymbol &&
                          validation.errors.stockSymbol
                            ? true
                            : false
                        }
                      />
                      {validation.touched.stockSymbol &&
                      validation.errors.stockSymbol ? (
                        <FormFeedback type="invalid">
                          {validation.errors.stockSymbol}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col lg={3}>
                    <FormGroup>
                      <Label
                        for="Sic"
                        className="mt-3 mt-lg-0"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        SIC
                      </Label>
                      <Input
                        name="sic"
                        id="Sic"
                        className="custominput"
                        placeholder="Enter Sic"
                        required={true}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.sic || ""}
                        invalid={
                          validation.touched.sic && validation.errors.sic
                            ? true
                            : false
                        }
                      />
                      {validation.touched.sic && validation.errors.sic ? (
                        <FormFeedback type="invalid">
                          {validation.errors.sic}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col lg={3}>
                    <FormGroup>
                      <Label
                        for="Duns"
                        className="mt-3 mt-lg-0"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        DUNS
                      </Label>
                      <Input
                        name="duns"
                        id="Duns"
                        className="custominput"
                        placeholder="Enter Duns"
                        required={true}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.duns || ""}
                        invalid={
                          validation.touched.duns && validation.errors.duns
                            ? true
                            : false
                        }
                      />
                      {validation.touched.duns && validation.errors.duns ? (
                        <FormFeedback type="invalid">
                          {validation.errors.duns}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg="6">
                    <FormGroup>
                      <Label>CUSTOMER PROFILE</Label>
                      <div>
                        <textarea
                          name="customerProfile"
                          placeholder="Enter Details"
                          required
                          className="form-control custominput"
                          rows="3"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.customerProfile || ""}
                        ></textarea>
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
            </Row>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit">
            Add Customer
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default AddCustomerModal;
