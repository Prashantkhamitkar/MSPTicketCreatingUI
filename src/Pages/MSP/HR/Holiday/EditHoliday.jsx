import React, { useEffect, useState } from "react";
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
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

const EditHoliday = ({ modal, toggle, selectedRow }) => {
  const defaultDate = new Date(); // Set a default date value
  const [formData, setFormData] = useState({
    holidayDate: defaultDate,
    holiday: "",
    location: "",
    year: new Date().getFullYear().toString(), // Set the default year to the current year
  });

  useEffect(() => {
    if (selectedRow && selectedRow.length > 0) {
      setFormData({
        holidayDate: new Date(selectedRow[0].holidayDate),
        holiday: selectedRow[0].holiday || "",
        location: selectedRow[0].location || "",
        year: selectedRow[0].year || new Date().getFullYear().toString(),
      });
    }
  }, [selectedRow]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (name, date) => {
    setFormData({ ...formData, [name]: date[0] }); // Set the date directly
  };

  const handleSubmit = () => {
    // Handle form submission for editing
    console.log("Form Data: ", formData);
    toggle();
  };

  const handleDelete = () => {
    console.log("Deleting...");
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
                    <Label>HOLIDAY DATE</Label>
                    <InputGroup>
                      <Flatpickr
                        className="form-control d-block custominput text-muted"
                        value={formData.holidayDate}
                        onChange={(date) =>
                          handleDateChange("holidayDate", date)
                        }
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
                  <Col lg="6" className="mt-3 mt-lg-0">
                    <Label>HOLIDAY</Label>
                    <Input
                      className="custominput"
                      placeholder="Enter Holiday"
                      name="holiday"
                      required={true}
                      value={formData.holiday}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg="6">
                    <Label>LOCATION</Label>
                    <Input
                      className="custominput"
                      placeholder="Enter Location"
                      name="location"
                      required={true}
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col lg="6">
                    <Label>YEAR</Label>
                    <Input
                      className="custominput"
                      placeholder="Enter Year"
                      name="year"
                      required={true}
                      value={formData.year}
                      onChange={handleChange}
                    />
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
};

export default EditHoliday;
