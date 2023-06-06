import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import brandImage from '../../assets/images/logo.svg';

function navbar() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} bg="white" expand={expand} className="ms-2 mb-1 p-xl-5 p-sm-0 mt-0">
          <Container fluid>
            <Navbar.Brand href="#">
                <img src={brandImage} alt='brandImage' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu's
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 gap-3" style={{fontSize:15}}>
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">New</Nav.Link>
                  <Nav.Link href='#action3'>Popular</Nav.Link>
                  <Nav.Link href='#action4'>Trending</Nav.Link>
                  <Nav.Link href='#action5'>Categories</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default navbar;