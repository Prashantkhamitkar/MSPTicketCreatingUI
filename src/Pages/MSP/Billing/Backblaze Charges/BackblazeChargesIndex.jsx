import React from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from '../../../../components/Common/Breadcrumb'
import BackblazeTable from './BackblazeTable';

const BackblazeChargesIndex = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="Backblaze Charges" />
          <BackblazeTable/>
        </Container>
      </div>
    </>
  );
}

export default BackblazeChargesIndex