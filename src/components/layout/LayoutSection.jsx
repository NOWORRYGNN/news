import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Cimage3 from '../../assets/images/image-gaming-growth.jpg';
import Cimage1 from '../../assets/images/image-retro-pcs.jpg';
import Cimage2 from '../../assets/images/image-top-laptops.jpg';
import Banner from '../../assets/images/image-web-3-desktop.jpg';
import Card from '../card';
import Section2sidecontent from './Section2sidecontent';

export default function LayoutSection(){
  return (
    <Container fluid>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={8}><Image src={Banner} alt='Banner' fluid /></Col>
        <Col md={4}><Section2sidecontent /></Col>
      </Row>
      <Row>
        {/* imageUrl, Number, Tittle, Content */}
        <Col sm>
          <Card imageUrl={Cimage1} Number="01" Tittle="Test1" Content="Tsts1" />
        </Col>
        <Col sm>
          <Card imageUrl={Cimage2} Number="02" Tittle="Test2" Content="Tsts2" />
        </Col>
        <Col sm>
          <Card imageUrl={Cimage3} Number="03" Tittle="Test3" Content="Tsts3" />
        </Col>
      </Row>
    </Container>
  )
}