import React, { useEffect, useState } from "react";
import data from "./Knowledge";
import KnowledgeData from "./KnowledgeData";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import KnowledgeModal from "./KnowledgeModal";
import ActionButton from "../common/ActionButton";
const KnowledgeTable = () => {
  const [knowledge, setKnowledge] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [modal,setmodal]=useState(false);


  useEffect(() => {
    const filtered = data.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setKnowledge(filtered);
  }, [searchTerm]);
 
  const toggleModal=()=>{
    setmodal(!modal);
  }
  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title mb-0"> KNOWLEDGE BASE</h5>
            </CardHeader>
            <CardBody>
              <Row>
                <Col
                  md="12"
                  className="col-sm d-flex justify-content-end align-items-center"
                >
                  <Button
                    color="info"
                    className="btn btn-rounded d-flex justify-content-center align-items-center"
                    onClick={toggleModal}
                  >
                    <i className="fa fa-plus-square align-middle me-2"></i>
                    ADD NEW ARTICLE
                  </Button>
                </Col>
              </Row>
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
                    <ActionButton data={knowledge} setdata={setKnowledge} />
                    <Button
                      color="secondary"
                      className="btn btn-rounded btn-light waves-effect  d-flex align-items-center justify-content-center"
                      onClick={() =>{ setKnowledge(data);setSearchTerm("");}}
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
              <KnowledgeData data={knowledge} />
              <KnowledgeModal modal={modal} toggle={toggleModal} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default KnowledgeTable;
