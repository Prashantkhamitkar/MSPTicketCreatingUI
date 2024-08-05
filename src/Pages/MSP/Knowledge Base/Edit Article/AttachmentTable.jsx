import React, { useEffect, useState } from 'react'
import data from './Attachment'
import AttachmentData from './AttachmentData';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import UploadModal from './UploadModal';
const AttachmentTable = () => {
const [attachment, setAttachment] = useState(data);
const [searchTerm, setSearchTerm] = useState("");
const [modal,setModal]=useState(false);

useEffect(() => {
  const filtered = data.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  setAttachment(filtered);
}, [searchTerm]);
const toggleModal=()=>{
    setModal(!modal);
}

  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title mb-0"> ATTACHMENTS</h5>
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
                    <i className="fa fa-upload me-2"></i>
                    UPLOAD
                  </Button>
                </Col>
              </Row>
              <Row className="g-4">
                <Col className="col-sm">
                  <div
                    className="app-search d-flex mt-0 align-items-center gap-3"
                    style={{ width: "100%" }}
                  >
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
                  </div>
                </Col>
              </Row>
              <AttachmentData data={attachment} />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <UploadModal modal={modal} toggle={toggleModal} />
    </>
  );
}

export default AttachmentTable