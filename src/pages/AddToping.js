import { Button, Col, Container, Row, Image, Form } from 'react-bootstrap';
import NavbarAdminPage from '../components/navbar/NavbarAdmin';
import Toping from '../assets/toping/toping1.png';

export default function AddToping() {
  return (
    <>
      <NavbarAdminPage />
      <Container>
        <Row className="mt-5">
          <Col>
            <h3 class="mb-3" style={{ color: 'red', fontWeight: 'bold' }}>
              Toping
            </h3>
            <Form className="mt-5">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Name Toping" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Price" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="file" placeholder="Photo Toping" />
              </Form.Group>
              <div className="d-grid mt-3">
                <Button variant="danger">Add Toping</Button>
              </div>
            </Form>
          </Col>
          <Col>
            <Image src={Toping} width={100} height={100} className="mx-5 my-5" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
