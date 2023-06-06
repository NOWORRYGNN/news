import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function card({imageUrl, Number, Tittle, Content}){
  return (
    <Container fluid>
        <Row>
            <Col sm={4}><Image src={imageUrl} alt='miniContentImg' /></Col>
            <Col sm={8}>
                <p><h1>{Number}</h1></p>
                <p><h1>{Tittle}</h1></p>
                <p>{Content}</p>
            </Col>
        </Row>
    </Container>
  )
}