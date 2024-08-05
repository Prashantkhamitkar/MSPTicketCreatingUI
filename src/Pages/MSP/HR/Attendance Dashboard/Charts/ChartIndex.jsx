import React from 'react'
import { Card, CardBody, CardTitle, Col, Row } from 'reactstrap';
import LateCheckChart from './LateCheckChart';
import EarlyCheckChart from './EarlyCheckChart';

const ChartIndex = () => {
  return (
    <>
      <Row>
        <Col md={6}>
          <Card>
            <CardBody>
              <CardTitle className="mb-4 text-center">
                LATE CHECK INS{" "}
              </CardTitle>
              <LateCheckChart />
            </CardBody>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <CardBody>
              <CardTitle className="mb-4 text-center">
                EARLY CHECKOUTS{" "}
              </CardTitle>
              <EarlyCheckChart />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ChartIndex