import React from "react";
import { Container } from "reactstrap";
import MyLeavesTable from "./MyLeavesTable";
import Breadcrumbs from "../../../../components/Common/Breadcrumb";

const MyLeaves = () => {
  return (
    <>
      <div className="page-content">
        <Breadcrumbs title="MSP" breadcrumbItem="My Leaves" />
        <Container fluid={true}>
          <MyLeavesTable />
        </Container>
      </div>
    </>
  );
};

export default MyLeaves;
