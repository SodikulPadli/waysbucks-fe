import { Button, Col, Container, Row, Image, Form } from 'react-bootstrap';
import NavbarAdminPage from '../components/navbar/NavbarAdmin';
import Product from '../assets/menu/product1.png';
import { BsPaperclip } from 'react-icons/bs';

export default function AddProduct() {
  return (
    <>
      <NavbarAdminPage />
      <Container>
        <Row className="mt-5">
          <Col>
            <h3 class="mb-3" style={{ color: 'red', fontWeight: 'bold' }}>
              Product
            </h3>
            <Form className="mt-5">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Name Product" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Price" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="File" placeholder="Photo Product" />
              </Form.Group>
              <div className="d-grid mt-3">
                <Button variant="danger">Add Product</Button>
              </div>
            </Form>
          </Col>
          <Col>
            <div className="mx-5 mt-3">
              <Image src={Product} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
