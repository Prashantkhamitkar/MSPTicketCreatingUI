import React from 'react'
import { Col, Row } from 'reactstrap';
import CheckedInIndex from './CheckedIn/CheckedInIndex';
import OverTimeIndex from './OverTime/OverTimeIndex';
import LogIndex from './Log/LogIndex';

const CombinedIndex = () => {
  return (
    <>
      <Row>
        <Col lg={4}>
         <CheckedInIndex/>
        </Col>

        <Col lg={4}>
          <LogIndex/>
        </Col>

        <Col lg={4}>
         <OverTimeIndex/>
        </Col>
      </Row>
    </>
  );
}

export default CombinedIndex