import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function card({imageUrl, Number, Tittle, Content}){
  return (
    <Container fluid>
        <Row>
            <Col sm={4}><Image src={imageUrl} alt='miniContentImg' fluid /></Col>
            <Col sm={8}>
                <p><h2>{Number}</h2></p>
                <p><h3>{Tittle}</h3></p>
                <p>{Content}</p>
            </Col>
        </Row>
    </Container>
  )
}