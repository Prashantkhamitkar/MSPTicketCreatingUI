import React from "react";
import { Container } from "reactstrap";

import WeekendTable from "./WeekendTable";
import Breadcrumbs from "../../../../components/Common/Breadcrumb";

const WeekendTaskIndex = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="Weekend Tasks" />
          <WeekendTable />
        </Container>
      </div>
    </>
  );
};

export default WeekendTaskIndex;
