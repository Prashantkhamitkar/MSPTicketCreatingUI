import React, { useEffect, useState } from "react";
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
  Form,
} from "reactstrap";
import Select from "react-select";
import Switch from "react-switch";
import LocationSearchInput from "../common/SearchLocationInput";
import { useFormik } from "formik";
import * as Yup from "yup";

const creditCardOptions = [
  { value: "visa", label: "Visa" },
  { value: "mastercard", label: "MasterCard" },
  { value: "amex", label: "American Express" },
  { value: "discover", label: "Discover" },
];

const UpdateCustomerModal = ({ isOpen, toggle, rowData }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [switch1, setswitch1] = useState(false);

  const handleAddressSelect = (address, city, state, country, zipCode) => {
    formik.setFieldValue("address", address);
    formik.setFieldValue("city", city);
    formik.setFieldValue("state", state);
    formik.setFieldValue("country", country);
    formik.setFieldValue("zipCode", zipCode);
  };

  const Offsymbol = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 12,
        color: "#fff",
        paddingRight: 2,
      }}
    >
      No
    </div>
  );

  const OnSymbol = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 12,
        color: "#fff",
        paddingRight: 2,
      }}
    >
      Yes
    </div>
  );

  const handleSelectCard = (selectedOption) => {
    setSelectedCard(selectedOption);
    formik.setFieldValue("creditCard", selectedOption);
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

  const validationSchema = Yup.object().shape({
    customerName: Yup.string().required("Customer Name is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),

    country: Yup.string().required("Country is required"),
    zipCode: Yup.string().required("Zip Code is required"),
    emailDomainName: Yup.string().required("Invalid email format"),
    tags: Yup.string().required("Tags are required"),
    phone: Yup.string().required("Phone is required"),
    stockSymbol: Yup.string().required("Stock Symbol is required"),
    sic: Yup.string().required("SIC is required"),
    duns: Yup.string().required("DUNS is required"),
    customerContactDetails: Yup.string().required(
      "Customer Contact Details are required"
    ),
  });

  const formik = useFormik({
    initialValues: {
      customerName: rowData.Customer || "",
      address: rowData.Address || "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      creditCard: null,
      rowKey: "",
      supportKey: "",
      emailDomainName: rowData.Website || "",
      tags: rowData.Tags || "",
      phone: rowData.Phone || "",
      stockSymbol: "",
      sic: "",
      duns: "",
      customerContactDetails: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form values", values);
    },
  });

  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle} size="xl" centered>
        <Form onSubmit={formik.handleSubmit}>
          <ModalBody>
            <FormGroup>
              <Row>
                <Col md={12}>
                  <Row className="mt-3">
                    <Col lg="6">
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
                        id="customer"
                        className="custominput"
                        placeholder="Enter Customer Name"
                        required={true}
                        name="customerName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.customerName}
                        invalid={
                          formik.touched.customerName &&
                          formik.errors.customerName
                            ? true
                            : false
                        }
                      />
                      {formik.touched.customerName &&
                      formik.errors.customerName ? (
                        <FormFeedback>
                          {formik.errors.customerName}
                        </FormFeedback>
                      ) : null}
                    </Col>
                    <Col lg="6">
                      <Label for="Address" className="mt-3 mt-lg-0">
                        ADDRESS
                      </Label>
                      <LocationSearchInput
                        onSelect={handleAddressSelect}
                        Address={formik.values.address}
                      />
                    </Col>
                  </Row>

                  <Row className="mt-3">
                    <Col lg={3}>
                      <Label
                        for="city"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        CITY
                      </Label>
                      <Input
                        id="city"
                        className="custominput"
                        placeholder="Enter City Name"
                        required={true}
                        name="city"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.city}
                        invalid={
                          formik.touched.city && formik.errors.city
                            ? true
                            : false
                        }
                      />
                      {formik.touched.city && formik.errors.city ? (
                        <FormFeedback>{formik.errors.city}</FormFeedback>
                      ) : null}
                    </Col>
                    <Col lg={3}>
                      <Label
                        for="State"
                        className="mt-3 mt-lg-0"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        STATE
                      </Label>
                      <Input
                        id="State"
                        className="custominput"
                        placeholder="Enter State Name"
                        required={true}
                        name="state"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.state}
                        invalid={
                          formik.touched.state && formik.errors.state
                            ? true
                            : false
                        }
                      />
                      {formik.touched.state && formik.errors.state ? (
                        <FormFeedback>{formik.errors.state}</FormFeedback>
                      ) : null}
                    </Col>
                    <Col lg={3}>
                      <Label
                        for="Country"
                        className="mt-3 mt-lg-0"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        COUNTRY
                      </Label>
                      <Input
                        id="Country"
                        className="custominput"
                        placeholder="Enter Country Name"
                        required={true}
                        name="country"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.country}
                        invalid={
                          formik.touched.country && formik.errors.country
                            ? true
                            : false
                        }
                      />
                      {formik.touched.country && formik.errors.country ? (
                        <FormFeedback>{formik.errors.country}</FormFeedback>
                      ) : null}
                    </Col>
                    <Col lg={3}>
                      <Label
                        for="ZipCode"
                        className="mt-3 mt-lg-0"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        ZIP CODE
                      </Label>
                      <Input
                        id="ZipCode"
                        className="custominput"
                        placeholder="Enter Zip Code"
                        required={true}
                        name="zipCode"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.zipCode}
                        invalid={
                          formik.touched.zipCode && formik.errors.zipCode
                            ? true
                            : false
                        }
                      />
                      {formik.touched.zipCode && formik.errors.zipCode ? (
                        <FormFeedback>{formik.errors.zipCode}</FormFeedback>
                      ) : null}
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={3}>
                      <Label
                        for="credit"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        CREDIT CARD
                      </Label>
                      <Select
                        placeholder="Select Credit Card"
                        value={selectedCard}
                        onChange={handleSelectCard}
                        options={creditCardOptions}
                        classNamePrefix="select2-selection"
                        menuPlacement="auto"
                        styles={customStyles}
                        menuPortalTarget={document.body}
                      />
                    </Col>
                    <Col lg={3}>
                      <Label
                        for="key"
                        className="mt-3 mt-lg-0"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        ROW KEY
                      </Label>
                      <Input
                        id="key"
                        className="custominput"
                        placeholder="Enter Key"
                        required={true}
                        name="rowKey"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.rowKey}
                        invalid={
                          formik.touched.rowKey && formik.errors.rowKey
                            ? true
                            : false
                        }
                      />
                      {formik.touched.rowKey && formik.errors.rowKey ? (
                        <FormFeedback>{formik.errors.rowKey}</FormFeedback>
                      ) : null}
                    </Col>
                    <Col lg={3}>
                      <Label
                        for="support"
                        className="mt-3 mt-lg-0"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        SUPPORT KEY
                      </Label>
                      <Input
                        id="support"
                        className="custominput"
                        placeholder="Enter Support Key"
                        required={true}
                        name="supportKey"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.supportKey}
                        invalid={
                          formik.touched.supportKey && formik.errors.supportKey
                            ? true
                            : false
                        }
                      />
                      {formik.touched.supportKey && formik.errors.supportKey ? (
                        <FormFeedback>{formik.errors.supportKey}</FormFeedback>
                      ) : null}
                    </Col>
                    <Col lg={3}>
                      <Label
                        for="State"
                        className="mt-3 mt-lg-0"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        PARENT CUSTOMER?
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
                      <div className="mt-lg-1 ms-lg-5">
                        <Switch
                          uncheckedIcon={<Offsymbol />}
                          checkedIcon={<OnSymbol />}
                          className=""
                          onColor="#A10344"
                          onChange={() => {
                            setswitch1(!switch1);
                          }}
                          checked={switch1}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg="6">
                      <Label
                        for="domainname"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        EMAIL DOMAIN NAME
                      </Label>
                      <Input
                        id="domainname"
                        className="custominput"
                        placeholder="Enter Website"
                        name="emailDomainName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.emailDomainName}
                        invalid={
                          formik.touched.emailDomainName &&
                          formik.errors.emailDomainName
                            ? true
                            : false
                        }
                      />
                      {formik.touched.emailDomainName &&
                      formik.errors.emailDomainName ? (
                        <FormFeedback>
                          {formik.errors.emailDomainName}
                        </FormFeedback>
                      ) : null}
                    </Col>
                    <Col lg="6">
                      <Label
                        for="Tags"
                        className="mt-3 mt-lg-0"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        TAGS
                      </Label>
                      <Input
                        id="Tags"
                        className="custominput"
                        placeholder="Enter Tags"
                        name="tags"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.tags}
                        invalid={
                          formik.touched.tags && formik.errors.tags
                            ? true
                            : false
                        }
                      />
                      {formik.touched.tags && formik.errors.tags ? (
                        <FormFeedback>{formik.errors.tags}</FormFeedback>
                      ) : null}
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={3}>
                      <Label
                        for="first"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        FIRST APPROVER
                      </Label>
                      <Select
                        placeholder="Select First Approver"
                        value={selectedCard}
                        onChange={handleSelectCard}
                        options={creditCardOptions}
                        classNamePrefix="select2-selection"
                        menuPlacement="auto"
                        styles={customStyles}
                        menuPortalTarget={document.body}
                      />
                    </Col>
                    <Col lg={3}>
                      <Label
                        for="second"
                        className="mt-3 mt-lg-0"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        SECOND APPROVER
                      </Label>
                      <Select
                        placeholder="Select Second Approver"
                        value={selectedCard}
                        onChange={handleSelectCard}
                        options={creditCardOptions}
                        classNamePrefix="select2-selection"
                        menuPlacement="auto"
                        styles={customStyles}
                        menuPortalTarget={document.body}
                      />
                    </Col>
                    <Col lg={3}>
                      <Label
                        for="third"
                        className="mt-3 mt-lg-0"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        THIRD APPROVER
                      </Label>
                      <Select
                        placeholder="Select Third Approver"
                        value={selectedCard}
                        onChange={handleSelectCard}
                        options={creditCardOptions}
                        classNamePrefix="select2-selection"
                        menuPlacement="auto"
                        styles={customStyles}
                        menuPortalTarget={document.body}
                      />
                    </Col>
                    <Col lg={3}>
                      <Label
                        for="fourth"
                        className="mt-3 mt-lg-0"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        FOURTH APPROVER
                      </Label>
                      <Select
                        placeholder="Select Fourth Approver"
                        value={selectedCard}
                        onChange={handleSelectCard}
                        options={creditCardOptions}
                        classNamePrefix="select2-selection"
                        menuPlacement="auto"
                        styles={customStyles}
                        menuPortalTarget={document.body}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col lg={3}>
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
                        id="Phone"
                        className="custominput"
                        placeholder="Enter Phone"
                        required={true}
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        invalid={
                          formik.touched.phone && formik.errors.phone
                            ? true
                            : false
                        }
                      />
                      {formik.touched.phone && formik.errors.phone ? (
                        <FormFeedback>{formik.errors.phone}</FormFeedback>
                      ) : null}
                    </Col>
                    <Col lg={3}>
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
                        id="Stock"
                        className="custominput"
                        placeholder="Enter Stock Symbol"
                        required={true}
                        name="stockSymbol"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.stockSymbol}
                        invalid={
                          formik.touched.stockSymbol &&
                          formik.errors.stockSymbol
                            ? true
                            : false
                        }
                      />
                      {formik.touched.stockSymbol &&
                      formik.errors.stockSymbol ? (
                        <FormFeedback>{formik.errors.stockSymbol}</FormFeedback>
                      ) : null}
                    </Col>
                    <Col lg={3}>
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
                        id="Sic"
                        className="custominput"
                        placeholder="Enter Sic"
                        required={true}
                        name="sic"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.sic}
                        invalid={
                          formik.touched.sic && formik.errors.sic ? true : false
                        }
                      />
                      {formik.touched.sic && formik.errors.sic ? (
                        <FormFeedback>{formik.errors.sic}</FormFeedback>
                      ) : null}
                    </Col>
                    <Col lg={3}>
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
                        id="Duns"
                        className="custominput"
                        placeholder="Enter Duns"
                        required={true}
                        name="duns"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.duns}
                        invalid={
                          formik.touched.duns && formik.errors.duns
                            ? true
                            : false
                        }
                      />
                      {formik.touched.duns && formik.errors.duns ? (
                        <FormFeedback>{formik.errors.duns}</FormFeedback>
                      ) : null}
                    </Col>
                  </Row>

                  <Row className="mt-3">
                    <Col lg="6">
                      <Label>CUSTOMER CONTACT DETAILS</Label>
                      <div className="mb-0">
                        <textarea
                          placeholder="Enter Details"
                          required
                          className="form-control custominput"
                          row="1"
                          name="customerContactDetails"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.customerContactDetails}
                          invalid={
                            formik.touched.customerContactDetails &&
                            formik.errors.customerContactDetails
                              ? true
                              : false
                          }
                        ></textarea>
                        {formik.touched.customerContactDetails &&
                        formik.errors.customerContactDetails ? (
                          <FormFeedback>
                            {formik.errors.customerContactDetails}
                          </FormFeedback>
                        ) : null}
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </FormGroup>
          </ModalBody>
          <ModalFooter className="d-flex flex-column flex-md-row align-items-center justify-content-between">
            <Button color="danger" className="mb-2 mb-md-0">
              Delete
            </Button>
            <div className="d-flex flex-column flex-md-row">
              <Button
                color="primary"
                className="mb-2 mb-md-0 me-md-3"
                type="submit"
              >
                Apply Changes
              </Button>
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </div>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateCustomerModal;
