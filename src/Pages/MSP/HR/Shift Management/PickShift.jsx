import React from 'react'
import { Container } from 'reactstrap'

import PickShiftCard from './PickShiftCard'
import Breadcrumbs from '../../../../components/Common/Breadcrumb'

const PickShift = () => {
  return (
    <>
     <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="MSP" breadcrumbItem="Pick Shifts" />
          <PickShiftCard/>
          </Container>
          </div>
    </>
  )
}

export default PickShift