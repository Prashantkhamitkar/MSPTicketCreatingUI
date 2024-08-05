import React from 'react'
import { Container } from 'reactstrap'
import Breadcrumbs from '../../../../components/Common/Breadcrumb'
import HolidayTable from './HolidayTable'


const HolidayIndex = () => {
  return (
   <>
   <div className="page-content">
     <Breadcrumbs title="MSP" breadcrumbItem="Holiday List"/>
    <Container fluid={true}>
      <HolidayTable/>
    </Container>
   </div>
   </>
  )
}

export default HolidayIndex