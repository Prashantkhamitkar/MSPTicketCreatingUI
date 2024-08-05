import React from 'react'
import {  Col, Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../components/Common/Breadcrumb'
import ApproveReject from './Approve or Reject/ApproveReject';
import LeaveToday from './On Leave/LeaveToday';

const LeaveManagementIndex = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="Leave Management" />
          <Row>
            <Col md={6}>
              <ApproveReject />
            </Col>
            <Col md={6}>
              <LeaveToday/>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default LeaveManagementIndex