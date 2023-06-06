import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../../App.css';

const contentImage = () => {
  return (
        <Row className='mb-3 mt-4'>
            <Col><h1 className='font display-3'>The Bright Future of Web 3.0?</h1></Col>
            <Col className='ms-auto'>
            <p className='text-justify text-secondary fs-5'>We dive into the next evolution of 
                the web that claims to put the power of the platforms back 
                into the hands of the people. But is it really fulfilling its promise?
            </p>
            <button type="button" className="btn btn-danger text-light fs-4 bg-red mt-4">Read More</button>
            </Col>  
        </Row>
  )
}

export default contentImage