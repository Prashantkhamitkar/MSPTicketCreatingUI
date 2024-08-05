import React from 'react'
import { Container } from 'reactstrap';
import Breadcrumbs from '../../../../../components/Common/Breadcrumb';
import AllocateShiftsCard from './AllocateShiftCard';

const AllocateShiftsIndex = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="Allocate Shifts" />
          <AllocateShiftsCard/>
        </Container>
      </div>
    </>
  );
}

export default AllocateShiftsIndex