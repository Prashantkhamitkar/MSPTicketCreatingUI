import React, { useState, useEffect } from "react";
import { Button, Col, Label, Modal, ModalFooter, Row } from "reactstrap";
import Select from "react-select";

const FilterModal = ({ data = [], isopen, toggle, setData }) => {
  const [selectedColumn, setSelectedColumn] = useState(null);
  const [selectedOperator, setSelectedOperator] = useState(null);
  const [selectedExpression, setSelectedExpression] = useState(null);
  const [expressionOptions, setExpressionOptions] = useState([]);

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

  // Ensure data is an array and has at least one element
  const columnOptions =
    Array.isArray(data) && data.length > 0
      ? Object.keys(data[0]).map((key) => ({ value: key, label: key }))
      : [];

  const operatorOptions = [
    { value: "=", label: "=" },
    { value: "!=", label: "!=" },
    { value: "is Null", label: "is Null" },
    { value: "is not null", label: "is not null" },
    { value: "like", label: "like" },
    { value: "not like", label: "not like" },
    { value: "in", label: "in" },
    { value: "not in", label: "not in" },
    { value: "contains", label: "contains" },
    { value: "does not contain", label: "does not contain" },
    { value: "match regular expression", label: "match regular expression" },
  ];

  useEffect(() => {
    if (selectedColumn) {
      const uniqueValues = [
        ...new Set(data.map((item) => item[selectedColumn.value])),
      ];
      setExpressionOptions(
        uniqueValues.map((value) => ({ value, label: value }))
      );
    } else {
      setExpressionOptions([]);
    }
  }, [selectedColumn, data]);

const escapeRegExp = (string) => {
  return string.replace(/[*+?^${}()|[\]\\]/g, "\\$&");
};

const applyFilter = () => {
  if (!selectedColumn || !selectedOperator || !selectedExpression) {
    return;
  }

  const filteredData = data.filter((item) => {
    const itemValue = item[selectedColumn.value];
    const expressionValue = escapeRegExp(selectedExpression.value); // Escape special characters

    switch (selectedOperator.value) {
      case "=":
        return itemValue === expressionValue;
      case "!=":
        return itemValue !== expressionValue;
      case "is Null":
        return itemValue === null || itemValue === undefined;
      case "is not null":
        return itemValue !== null && itemValue !== undefined;
      case "like":
        return itemValue.includes(expressionValue);
      case "not like":
        return !itemValue.includes(expressionValue);
      case "in":
        return expressionValue.split(",").includes(itemValue);
      case "not in":
        return !expressionValue.split(",").includes(itemValue);
      case "contains":
        return itemValue.includes(expressionValue);
      case "does not contain":
        return !itemValue.includes(expressionValue);
      case "match regular expression":
        return new RegExp(expressionValue).test(itemValue);
      default:
        return true;
    }
  });

  setData(filteredData);
  setSelectedExpression(null);
  setSelectedOperator(null);
  setSelectedColumn(null);
  toggle();
};


  return (
    <>
      <Modal
        size="lg"
        isOpen={isopen}
        toggle={() => {
          toggle();
        }}
        centered
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0" id="myLargeModalLabel">
            Filter Data
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
                    OPERATOR
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
                    placeholder="Select Operator"
                    options={operatorOptions}
                    onChange={setSelectedOperator}
                    value={selectedOperator}
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
                    EXPRESSION
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
                    placeholder="Select Expression"
                    options={expressionOptions}
                    onChange={setSelectedExpression}
                    value={selectedExpression}
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
          <Button color="info" onClick={applyFilter}>
            APPLY
          </Button>
          <Button color="secondary" onClick={()=>{
            setSelectedExpression(null);
            setSelectedOperator(null);
            setSelectedColumn(null);
            toggle();}}>
            CANCEL
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default FilterModal;
