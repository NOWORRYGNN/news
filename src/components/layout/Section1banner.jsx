import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Banner from '../../assets/images/image-web-3-desktop.jpg';
import Section2sidecontent from './Section2sidecontent';

const Section1banner = () => {
  return (
    <Container fluid>
      <Row>
        <Col><img src={Banner} alt='Banner' /></Col>
        <Col><Section2sidecontent /></Col>
      </Row>
      <Row>
        <Col>Card</Col>
      </Row>
    </Container>
  )
}

export default Section1banner