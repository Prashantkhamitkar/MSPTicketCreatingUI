import React from "react";
import { Container } from "reactstrap";

import TicketTable from "./TicketTable";
import Breadcrumbs from "../../../../components/Common/Breadcrumb";
import Incidents from "../../Dashboard/Incidents";

const TicketPageIndex = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="Tickets" />

          <Incidents />
          <TicketTable />
        </Container>
      </div>
    </>
  );
};

export default TicketPageIndex;
