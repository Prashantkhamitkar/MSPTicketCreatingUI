import React from 'react'
import { Container } from 'reactstrap';

import ContractCalendarData from './ContractCalendarData';
import Breadcrumbs from '../../../../components/Common/Breadcrumb';

const ContractCalendar = () => {
  return (
    <>
      <div className="page-content">
        <Breadcrumbs
          title="MSP"
          breadcrumbItem="Contract Calendar View"
        />
        <Container fluid={true}>
            <ContractCalendarData/>
        </Container>
      </div>
    </>
  );
}

export default ContractCalendar