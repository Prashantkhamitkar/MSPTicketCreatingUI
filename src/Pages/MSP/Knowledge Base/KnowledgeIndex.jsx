import React from 'react'
import Breadcrumbs from '../../../components/Common/Breadcrumb'
import { Container } from 'reactstrap'
import KnowledgeTable from './KnowledgeTable';


const KnowledgeIndex = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="Knowledge Base" />
          <KnowledgeTable/>
         
        </Container>
      </div>
    </>
  );
}

export default KnowledgeIndex