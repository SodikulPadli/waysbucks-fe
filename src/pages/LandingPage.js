import { useState } from 'react';

import { Container, Row, Col, Card, Image, Button, Navbar } from 'react-bootstrap';
import Logo from '../assets/logo.png';
import Jumbotron from '../assets/Jumbotron.png';
import Product from '../assets/menu/product1.png';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

export default function LandingPage() {
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  const modalSignIn = async (e) => {
    await setSignInModal(true);
    setSignUpModal(false);
  };

  const modalSignUp = async (e) => {
    await setSignUpModal(true);
    setSignInModal(false);
  };

  return (
    <>
      <Navbar bg="none">
        <Container>
          <Navbar.Brand href="#">
            <img src={Logo} width="60" height="60" className="d-inline-block align-top" alt="WaysBucks" />
          </Navbar.Brand>
          <div className="d-flex">
            <Button variant="outline-danger" onClick={modalSignIn} size="sm" className="me-2 px-3 fw-bold">
              Login
            </Button>
            <Button variant="danger" onClick={modalSignUp} size="sm" className=" px-3 fw-bold">
              Register
            </Button>
          </div>
        </Container>
      </Navbar>
      <Register trigger={modalSignIn} show={signUpModal} onHide={() => setSignUpModal(false)} />
      <Login trigger={modalSignUp} show={signInModal} onHide={() => setSignInModal(false)} />

      <Container className="mt-3 vh-100">
        <Row className="direction-horizontal">
          <Col className="d-flex justify-content-center">
            <Image src={Jumbotron} width={1000} alt="WaysBucks" />
          </Col>
          <Col className="ms-5 mt-3">
            <h1 className="ms-3 fw-bold text-danger">Let's Order</h1>
          </Col>
        </Row>
        <Row>
          <Col className="ms-5 mt-3 mb-5">
            <Card style={{ width: '18rem', backgroundColor: '#F6DADA' }}>
              <Card.Img variant="top" src={Product} />
              <Card.Body>
                <Card.Title className="fw-bold">Ice Cofffe Palm Sugar</Card.Title>
                <Card.Text>Rp.27.000</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
