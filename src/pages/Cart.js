import NavbarPage from '../components/navbar/Navbar';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
import { BsTrash } from 'react-icons/bs';
import Product from '../assets/menu/product1.png';
import { useNavigate } from 'react-router-dom';

export default function MyCart() {
  const navigasi = useNavigate();

  const Payload = () => {
    navigasi('/profile');
  };
  return (
    <>
      <NavbarPage />
      <Container>
        <Row className="mt-3 mx-5" style={{ color: 'red' }}>
          <Col>
            <div>
              <h3 className="fw-bold"> My Cart</h3>
              <p>Review Your Oder</p>
              <hr />
            </div>
            <Row>
              <Col md="auto">
                <Image src={Product} width={60} height={60} />
              </Col>
              <Col md="auto">
                <span className="fw-bold">Ice Coffe Palm</span>
                <p>
                  <b style={{ color: '#974A4A' }}>Toping :</b> Bubble
                </p>
              </Col>
              <Col md="2" className="mx-5">
                <p>Rp.33.000</p>
                <BsTrash />
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <p>Subtotal</p>
                <p>Qty</p>
                <hr />
                <p className="fw-bold">Total</p>
              </Col>

              <Col>
                <p>Rp.66.000</p>
                <p>2</p>
                <p className="fw-bold">Rp.66.000</p>
              </Col>
              <Col>
                <input type="file" placeholder="Attache Of Transaction" />
              </Col>
            </Row>
          </Col>
          <Col>
            <Form className="mt-5">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Phone" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Post Code" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} placeholder="Address" />
              </Form.Group>
              <div className=" d-grid">
                <Button
                  onClick={() => {
                    Payload();
                  }}
                  variant="danger"
                >
                  Pay
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
