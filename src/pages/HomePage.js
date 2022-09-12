import NavbarPage from '../components/navbar/Navbar';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import Jumbotron from '../assets/Jumbotron.png';
import Product from '../assets/menu/product1.png';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigasi = useNavigate();

  const detailProduct = () => {
    navigasi('/detail-product');
  };
  return (
    <>
      <NavbarPage />
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
          <Col
            className="ms-5 mt-3 mb-5"
            onClick={() => {
              detailProduct();
            }}
          >
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
