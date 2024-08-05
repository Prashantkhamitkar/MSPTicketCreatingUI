import React from 'react'
import AttachmentTable from './AttachmentTable'
import { Container } from 'reactstrap'
import Breadcrumbs from '../../../../components/Common/Breadcrumb'
import KnowledgeEditModal from './KnowledgeEditModal'

const Attachments = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="Edit Article" />
        <KnowledgeEditModal/>
        <AttachmentTable/>
        </Container>
      </div>
    </>
  );
}

export default Attachments