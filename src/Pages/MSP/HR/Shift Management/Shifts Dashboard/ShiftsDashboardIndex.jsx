import React from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from '../../../../../components/Common/Breadcrumb'
import ShiftDashboardCalendar from './ShiftDashboardCalendar';

const ShiftsDashboardIndex = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="Manage Shifts"/>
          <ShiftDashboardCalendar/>
        </Container>
      </div>
    </>
  );
}

export default ShiftsDashboardIndex