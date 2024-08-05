import React from "react";

import { Container } from "reactstrap";
import ShiftManagementTable from "./ShiftManagementTable";
import Breadcrumbs from "../../../../components/Common/Breadcrumb";

const ShiftManagementIndex = () => {
  return (
    <>
      <div className="page-content">
        <Breadcrumbs
          title="MSP"
          breadcrumbItem="Manage Shift Transfer Requests"
        />
        <Container fluid={true}>
          <ShiftManagementTable />
        </Container>
      </div>
    </>
  );
};

export default ShiftManagementIndex;
