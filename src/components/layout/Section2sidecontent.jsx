import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Section2sidecontent = () => {
  return (
    <Container fluid className='bg-dark'>
        <Row>
            <Col><h1 style={{color: 'yellow'}}>New</h1></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
        </Row>
    </Container>
  )
}

export default Section2sidecontent