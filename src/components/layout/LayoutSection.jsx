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
import ContentImage from './contentImage';

export default function LayoutSection(){
  return (
    <Container fluid className='p-2'>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={8}>
            <Image src={Banner} alt='Banner' fluid />
            <ContentImage />
        </Col>
        <Col xs={12} md={3}><Section2sidecontent /></Col>
      </Row>
      <Row className='ms-1 mt-1'>
        {/* imageUrl, Number, Tittle, Content */}
        <Col sm>
          <Card imageUrl={Cimage1} Number="01" Tittle="Reviving Retro PCS" Content="What happens when old PCs are given modern upgrades?" />
        </Col>
        <Col sm>
          <Card imageUrl={Cimage2} Number="02" Tittle="Top 10 Laptops of 2022" Content="Our best picks for various needs and budgets." />
        </Col>
        <Col sm>
          <Card imageUrl={Cimage3} Number="03" Tittle="The Growth of Gaming" Content="How the pandemic has sparked fresh opportunities." />
        </Col>
      </Row>
    </Container>
  )
}