import React, { useEffect, useState } from "react";
import backupData from "./BackupDetails";
import BackupData from "./BackupData";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import BackupButton from "./BackupButton";
import { CSVLink } from "react-csv";
import ActionButton from "../../../common/ActionButton";

const BackupDetailsTable = () => {
  const [backupdata, setbackupdata] = useState(backupData);
  const [searchTerm, setSearchTerm] = useState("");
  const [check, setcheck] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const filtered = backupData.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setbackupdata(filtered);
  }, [searchTerm]);
  const toggleModal = () => setToggle(!toggle);
  const csvHeaders = [
    { label: "Status", key: "Status" },
    { label: "Comments", key: "Comments" },
    { label: "Backup Date", key: "BackupDate" },
    { label: "Taken By", key: "TakenBy" },
    { label: "Customer Name", key: "CustomerName" },
    { label: "Asset Name", key: "AssetName" },
    { label: "Asset Tag", key: "AssetTag" },
    { label: "Schedule Date", key: "ScheduleDate" },
    { label: "Backup Schedule", key: "BackupSchedule" },
    { label: "Backup Type", key: "BackupType" },
    { label: "Backup Server", key: "BackupServer" },
    { label: "Backup Software", key: "BackupSoftware" },
  ];
  return (
    <>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader>
              <h5 className="card-title mb-0">BACKUP DATA</h5>
            </CardHeader>
            <CardBody>
              <Row>
                <Col
                  md="12"
                  className="col-sm d-flex justify-content-end align-items-center"
                >
                  <div className="d-flex flex-column flex-md-row align-items-center  justify-content-center">
                    <BackupButton check={check} toggle={toggleModal} />
                    <CSVLink
                      data={backupdata}
                      headers={csvHeaders}
                      filename="backup-data.csv"
                      className="btn btn-rounded btn-success ms-md-2 mt-2 mt-md-0 d-flex align-items-center justify-content-center"
                    >
                      <span
                        className="mdi mdi-download-circle-outline me-2 "
                        style={{ fontSize: "1rem" }}
                      ></span>
                      DOWNLOAD CSV
                    </CSVLink>
                  </div>
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
                    <ActionButton data={backupData} setdata={setbackupdata} />
                    <Button
                      color="secondary"
                      className="btn btn-rounded btn-light waves-effect  d-flex align-items-center justify-content-center"
                      onClick={() => {
                        setbackupdata(backupData);
                        setSearchTerm("");
                      }}
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
              <BackupData
                data={backupdata}
                setToggle={setToggle}
                modal={toggle}
                check={setcheck}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default BackupDetailsTable;
