import React from 'react';
import { Col, Row } from 'react-papercss-design';

import './demo.css';

const App: React.FC = () => {
  return (
    <div className="grid-demo">
      <Row>
        <Col span={4}>col-4 col</Col>
        <Col span={4}>col-4 col</Col>
        <Col span={4}>col-4 col</Col>
      </Row>
      <Row>
        <Col span={3}>col-3 col</Col>
        <Col span={9}>col-9 col</Col>
      </Row>
      <Row>
        <Col sm={6} md={8} lg={10}>
          sm-6 md-8 lg-10 col
        </Col>
        <Col sm={6} md={4} lg={2}>
          sm-6 md-4 lg-2 col
        </Col>
      </Row>
      <Row>
        <Col sm={5}>sm-5 col</Col>
        <Col fill>col-fill col</Col>
        <Col fill>col-fill col</Col>
      </Row>
      <Row>
        <Col sm={4}>Aligned</Col>
        <Col sm={4}>Left (default)</Col>
      </Row>
      <Row justify="right">
        <Col sm={4}>Aligned</Col>
        <Col sm={4}>Right (flex-right)</Col>
      </Row>
      <Row justify="center">
        <Col sm={4}>Aligned</Col>
        <Col sm={4}>Center (flex-center)</Col>
      </Row>
      <Row justify="edges">
        <Col sm={4}>Aligned</Col>
        <Col sm={4}>to edges (flex-edges)</Col>
      </Row>
      <Row justify="spaces">
        <Col sm={4}>Aligned</Col>
        <Col sm={4}>to be evenly spaced (flex-spaces)</Col>
      </Row>
      <Row align="top">
        <Col sm={6}>Aligned top</Col>
        <Col sm={6}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a
          nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit
          suscipit, blandit dolor.
        </Col>
      </Row>
      <Row align="middle">
        <Col sm={6}>Aligned middle</Col>
        <Col sm={6}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a
          nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit
          suscipit, blandit dolor.
        </Col>
      </Row>
      <Row align="bottom">
        <Col sm={6}>Aligned bottom</Col>
        <Col sm={6}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a
          nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit
          suscipit, blandit dolor.
        </Col>
      </Row>
      <Row>
        <Col sm={3} align="bottom">
          Align bottom
        </Col>
        <Col sm={3} align="middle">
          Align middle
        </Col>
        <Col sm={3} align="top">
          Align top
        </Col>
        <Col sm={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a
          nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit
          suscipit, blandit dolor.
        </Col>
      </Row>
    </div>
  );
};

export default App;
