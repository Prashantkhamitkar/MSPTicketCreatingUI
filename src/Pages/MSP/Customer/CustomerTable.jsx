import React, { useEffect, useState } from 'react'
import CustomerData from './CustomerData';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { data } from "./data";
import ActionButton from '../common/ActionButton';
const CustomerTable = () => {
    const [customerData, setCustomerData] = useState(data);
    const [searchTerm,setSearchTerm]=useState("");

      useEffect(() => {
        const filtered = data.filter((item) =>
          Object.values(item).some((val) =>
            String(val).toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
        setCustomerData(filtered);

      }, [searchTerm]);

  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title mb-0">CUSTOMERS DATA</h5>
            </CardHeader>
            <CardBody>
              <Row className="g-4">
                <Col className="col-sm">
                  <div className="app-search d-flex flex-column flex-sm-row mt-0 align-items-start align-items-sm-center gap-3">
                    <p className="text-muted mb-0">Summary</p>
                    <div className="position-relative">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <span
                        className="ri-search-line"
                        style={{ zIndex: "0" }}
                      ></span>
                    </div>
                    <ActionButton
                      data={customerData}
                      setdata={setCustomerData}
                    />
                    <Button
                      color="secondary"
                      className="btn btn-rounded btn-light waves-effect  d-flex align-items-center justify-content-center"
                      onClick={() => {setCustomerData(data);setSearchTerm("")}}
                    >
                      CLEAR
                      <i
                        className="fas fa-times ms-2"
                        style={{ fontSize: "0.9rem" }}
                      ></i>
                    </Button>
                  </div>
                </Col>
              </Row>
              <CustomerData data={customerData} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default CustomerTable