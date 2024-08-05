import React from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from '../../../../components/Common/Breadcrumb';
import AttendanceTable from './AttendanceTable';
import CombinedIndex from './CombinedIndex';
import ChartIndex from './Charts/ChartIndex';

const AttendanceDashIndex = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="Attendance Dashboard" />
          <AttendanceTable/>
          <CombinedIndex/>
          <ChartIndex/>
        </Container>
      </div>
    </>
  );
}

export default AttendanceDashIndex