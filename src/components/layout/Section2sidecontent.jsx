import React, { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Api from '../../api/contentData-api';

const Section2sidecontent = () => {
    useEffect(() => {
        Api.get('/contentData').then(res => {
            console.log(res);
        })
    }, []);
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