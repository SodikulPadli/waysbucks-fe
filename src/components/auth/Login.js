import { Modal, Form, Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
  const navigasi = useNavigate();
  const goToHome = () => {
    navigasi('/home');
  };
  return (
    <>
      <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: 'red', fontWeigth: 'bold' }} className="mb-3">
                <h2>Login</h2>
              </Form.Label>
              <Form.Control className="mb-3" type="email" placeholder="Email" id="email" name="email" />
              <Form.Control className="mb-3" type="password" placeholder="Password" id="password" name="password" />
              <div className="d-grid">
                <Button
                  onClick={() => {
                    goToHome();
                  }}
                  className="mb-3 px-3"
                  variant="danger"
                  type="submit"
                >
                  Login
                </Button>
              </div>
              <Col>
                <p>
                  Don't have an account ? Klik{' '}
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
