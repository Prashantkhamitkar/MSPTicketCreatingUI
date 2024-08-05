import React from "react";
import { Container } from "reactstrap";

import AssigneeTable from "./AssigneeTable";
import Breadcrumbs from "../../../../components/Common/Breadcrumb";

const AssigneeIndex = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="Assignees" />
          <AssigneeTable />
        </Container>
      </div>
    </>
  );
};

export default AssigneeIndex;
