import React from "react";
import { Container } from "reactstrap";

import MyShiftCalendar from "./MyShiftCalendar";
import Breadcrumbs from "../../../../components/Common/Breadcrumb";
const MyShifts = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="My Shifts" />
          <MyShiftCalendar />
        </Container>
      </div>
    </>
  );
};

export default MyShifts;
