import React, { useEffect } from 'react'
import Breadcrumbs from '../../../../components/Common/Breadcrumb';
import { Container } from 'reactstrap';
import NewContractCard from './NewContractCard';

const NewContractIndex = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
  return (
    <>
      <div className="page-content">
        <Breadcrumbs title="MSP" breadcrumbItem="New Contract" />
        <Container fluid={true}>
<NewContractCard/>
        </Container>
      </div>
    </>
  );
}

export default NewContractIndex