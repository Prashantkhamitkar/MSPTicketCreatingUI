import React, { useEffect, useState } from "react";
import data from "./Backblaze";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import BackblazeData from "./BackblazeData";
import Select from "react-select";

const BackblazeTable = () => {
  const [Backblaze, setBackblaze] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const customerOptions = [
    ...new Set(data.map((item) => item.CustomerName)),
  ].map((name) => ({
    label: name,
    value: name,
  }));

  const monthOptions = [
    ...new Set(
      data.map((item) =>
        new Date(item.PaymentDate).toLocaleString("default", {
          month: "long",
          year: "numeric",
        })
      )
    ),
  ].map((month) => ({
    label: month,
    value: month,
  }));
 
  useEffect(() => {
    const filtered = data.filter((item) => {
      const matchesSearchTerm = Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesCustomer = selectedCustomer
        ? item.CustomerName === selectedCustomer.value
        : true;
      const matchesMonth = selectedMonth
        ? new Date(item.PaymentDate).toLocaleString("default", {
            month: "long",
            year: "numeric",
          }) === selectedMonth.value
        : true;
      return matchesSearchTerm && matchesCustomer && matchesMonth;
    });
    setBackblaze(filtered);
  }, [searchTerm, selectedCustomer, selectedMonth]);
 const clearFilters = () => {
   setSearchTerm("");
   setSelectedCustomer(null);
   setSelectedMonth(null);
 };
  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title mb-0"> BACKBLAZE CHARGES</h5>
            </CardHeader>
            <CardBody>
              <Row className="g-4 flex-column flex-lg-row">
                <Col className="col-sm d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center">
                  <div className="app-search d-flex mt-0 align-items-center gap-3">
                    <p className="text-muted mb-0">Summary</p>
                    <div className="position-relative">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <span className="ri-search-line" style={{zIndex:"0"}}></span>
                    </div>
                  </div>
                  <Select
                    placeholder="Select Customer"
                    value={selectedCustomer}
                    onChange={setSelectedCustomer}
                    options={customerOptions}
                    classNamePrefix="select2-selection"
                    menuPlacement="auto"
                    menuPortalTarget={document.body}
                  />
                  <Select
                    placeholder="Select Month"
                    value={selectedMonth}
                    onChange={setSelectedMonth}
                    options={monthOptions}
                    classNamePrefix="select2-selection"
                    menuPlacement="auto"
                    menuPortalTarget={document.body}
                  />
                  <Button color="secondary" className="mb-3 mb-lg-0" onClick={clearFilters}>
                    Clear
                  </Button>
                </Col>
              </Row>
              <BackblazeData data={Backblaze} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default BackblazeTable;
