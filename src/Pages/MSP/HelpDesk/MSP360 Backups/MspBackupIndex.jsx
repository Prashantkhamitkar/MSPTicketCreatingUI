import React from "react";
import { Container } from "reactstrap";

import MspTable from "./MspTable";
import Breadcrumbs from "../../../../components/Common/Breadcrumb";

const MspBackupIndex = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="All Backups" />
          <MspTable />
        </Container>
      </div>
    </>
  );
};

export default MspBackupIndex;
