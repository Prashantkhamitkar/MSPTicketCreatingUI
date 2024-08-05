import React, { useState } from "react";
import { Button, Col, Label, Modal, ModalFooter, Row } from "reactstrap";
import Select from "react-select";

const Sorting = ({ data = [], isOpen, toggle, setData }) => {
  const [selectedColumn, setSelectedColumn] = useState(null);
  const [selectedDirection, setSelectedDirection] = useState(null);
  const [selectedNullSorting, setSelectedNullSorting] = useState(null);

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

  const columnOptions =
    Array.isArray(data) && data.length > 0
      ? Object.keys(data[0]).map((key) => ({ value: key, label: key }))
      : [];

  const directionOptions = [
    { value: "asc", label: "Ascending" },
    { value: "desc", label: "Descending" },
  ];

  const nullSortingOptions = [
    { value: "default", label: "Default" },
    { value: "null_last", label: "Null Always Last" },
    { value: "null_first", label: "Null Always First" },
  ];

  const applySorting = () => {
    if (!selectedColumn || !selectedDirection || !selectedNullSorting) {
      return;
    }

    const sortedData = [...data].sort((a, b) => {
      const aValue = a[selectedColumn.value];
      const bValue = b[selectedColumn.value];

      const compare = (aVal, bVal) => {
        if (aVal < bVal) return -1;
        if (aVal > bVal) return 1;
        return 0;
      };

      const directionFactor = selectedDirection.value === "asc" ? 1 : -1;

      if (selectedNullSorting.value === "null_first") {
        if (aValue === null) return -1;
        if (bValue === null) return 1;
      } else if (selectedNullSorting.value === "null_last") {
        if (aValue === null) return 1;
        if (bValue === null) return -1;
      }

      return compare(aValue, bValue) * directionFactor;
    });

    setData(sortedData);
    setSelectedColumn(null);
    setSelectedDirection(null);
    setSelectedNullSorting(null);
    toggle();
  };

  return (
    <Modal
      size="lg"
      isOpen={isOpen}
      toggle={() => {
        toggle();
      }}
      centered
    >
      <div className="modal-header">
        <h5 className="modal-title mt-0" id="myLargeModalLabel">
          Sort Data
        </h5>
        <button
          onClick={() => {
            toggle(false);
          }}
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <Row>
          <Col md={12}>
            <Row className="mt-3 mb-0 mb-lg-5">
              <Col lg="4">
                <Label
                  style={{ position: "relative", display: "inline-block" }}
                >
                  COLUMN
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
                  placeholder="Select Column"
                  options={columnOptions}
                  onChange={setSelectedColumn}
                  value={selectedColumn}
                  classNamePrefix="select2-selection"
                  menuPlacement="auto"
                  menuPortalTarget={document.body}
                  styles={customStyles}
                />
              </Col>
              <Col lg="4" className="mt-3 mt-lg-0">
                <Label
                  style={{ position: "relative", display: "inline-block" }}
                >
                  DIRECTION
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
                  placeholder="Select Direction"
                  options={directionOptions}
                  onChange={setSelectedDirection}
                  value={selectedDirection}
                  classNamePrefix="select2-selection"
                  menuPlacement="auto"
                  menuPortalTarget={document.body}
                  styles={customStyles}
                />
              </Col>
              <Col lg="4" className="mt-3 mt-lg-0 mb-md-3">
                <Label
                  style={{ position: "relative", display: "inline-block" }}
                >
                  NULL SORTING
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
                  placeholder="Select Null Sorting"
                  options={nullSortingOptions}
                  onChange={setSelectedNullSorting}
                  value={selectedNullSorting}
                  classNamePrefix="select2-selection"
                  menuPlacement="auto"
                  menuPortalTarget={document.body}
                  styles={customStyles}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <ModalFooter>
        <Button color="info" onClick={applySorting}>
          APPLY
        </Button>
        <Button
          color="secondary"
          onClick={() => {
            setSelectedColumn(null);
            setSelectedDirection(null);
            setSelectedNullSorting(null);
            toggle();
          }}
        >
          CANCEL
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Sorting;
