import React from "react";
import { Container } from "reactstrap";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import TimesheetTable from "./TimesheetTable";

const TimesheetIndex = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="Timesheet" />
          <TimesheetTable/>
        </Container>
      </div>
    </>
  );
};

export default TimesheetIndex;
