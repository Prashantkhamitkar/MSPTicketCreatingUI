import React from "react";
import { Container } from "reactstrap";

import BackupCalendar from "./BackupCalendar";
import Breadcrumbs from "../../../../components/Common/Breadcrumb";
import BackupDetailsTable from "./BackupTable/BackupDetailsTable";

const BackupIndex = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="Backup" />
          <BackupCalendar />
          <div className="mt-4">
            <BackupDetailsTable/>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BackupIndex;
