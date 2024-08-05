import React from 'react'
import Breadcrumbs from '../../../../components/Common/Breadcrumb';
import { Container } from 'reactstrap';
import ContractTable from './ContractTable';

const ContractIndex = () => {
  return (
    <>
      <div className="page-content">
        <Breadcrumbs title="MSP" breadcrumbItem="Contract List" />
        <Container fluid={true}>
         <ContractTable/>
        </Container>
      </div>
    </>
  );
}

export default ContractIndex