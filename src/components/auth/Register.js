import { Modal, Form, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Register(props) {
  const navigasi = useNavigate();

  const adminPage = () => {
    navigasi('home-admin');
  };
  return (
    <>
      <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: 'red' }} className="mb-3 fw-bold">
                <h2>Register</h2>
              </Form.Label>
              <Form.Control className="mb-3" variant="outline-danger" type="text" placeholder="Name" id="name" name="name" />
              <Form.Control className="mb-3" type="email" placeholder="Email" id="email" name="email" />
              <Form.Control className="mb-3" type="password" placeholder="Password" id="password" name="password" />
              <div className="d-grid">
                <Button
                  onClick={() => {
                    adminPage();
                  }}
                  className="mb-3 px-3"
                  variant="danger"
                  type="submit"
                >
                  Register
                </Button>
              </div>
              <Col>
                <p>
                  Already have an account ? Klik{' '}
                  <a onClick={props.trigger}>
                    <b>Here</b>
                  </a>
                </p>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        {/* <Register show={signUpModal} onHide={() => setSignUpModal(false)} /> */}
      </Modal>
    </>
  );
}
