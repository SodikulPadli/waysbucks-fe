import { Container, Image, Row, Col, Button } from 'react-bootstrap';
import Product from '../assets/menu/product1.png';
import Toping1 from '../assets/toping/toping1.png';
import Toping2 from '../assets/toping/toping2.png';
import Toping3 from '../assets/toping/toping3.png';
import Toping4 from '../assets/toping/toping4.png';
import Toping5 from '../assets/toping/toping5.png';
import Toping6 from '../assets/toping/toping6.png';
import NavbarPage from '../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';

export default function DetailProduct() {
  const navigasi = useNavigate();
  const Success = () => {
    navigasi('/succes-add');
  };

  return (
    <>
      <NavbarPage />
      <Container className="mt-5">
        <Row style={{ color: 'red' }} className="justify-content-center">
          <Col sm={4} className="mx-5">
            <Image src={Product} />
          </Col>
          <Col>
            <Row>
              <Col>
                <h1>Ice</h1>
                <p style={{ color: '#974A4A' }}>Rp.27.000</p>
              </Col>
            </Row>
            <Row>
              <Col className="mb-3">
                <h3 style={{ color: '#974A4A' }}>Toping</h3>
              </Col>
            </Row>
            <Row sm="3">
              <Col>
                <label for="toping1">
                  <Image src={Toping1} weight={50} height={50} />
                </label>
                <input type="checkbox" name="toping" id="toping1" />
                <p>Bubble Tea Gelatin</p>
              </Col>
              <Col>
                <label for="toping2">
                  <Image src={Toping2} weight={50} height={50} />
                </label>
                <input type="checkbox" name="toping" id="toping2" />
                <p>Manggo</p>
              </Col>
              <Col>
                <label for="toping3">
                  <Image src={Toping3} weight={50} height={50} />
                </label>
                <input type="checkbox" name="toping" id="toping3" />
                <p>Green Coconout</p>
              </Col>
              <Col>
                <label for="toping1">
                  <Image src={Toping4} weight={50} height={50} />
                </label>
                <input type="checkbox" name="toping" id="toping4" />
                <p>Bobba Manggo</p>
              </Col>
              <Col>
                <label for="toping2">
                  <Image src={Toping5} weight={50} height={50} />
                </label>
                <input type="checkbox" name="toping" id="toping5" />
                <p>Bill Bobba Berry</p>
              </Col>
              <Col>
                <label for="toping3">
                  <Image src={Toping6} weight={50} height={50} />
                </label>
                <input type="checkbox" name="toping" id="toping6" />
                <p>Kiwi Poping Pearl</p>
              </Col>
            </Row>
            <Row>
              <Col className="mb-3">
                <h3 style={{ color: '#974A4A' }}>Total</h3>
              </Col>
              <Col className="text-end">
                <h3 style={{ color: '#974A4A' }}>Rp.27.000</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="d-grid">
                  <Button
                    onClick={() => {
                      Success();
                    }}
                    variant="danger"
                    className="px-5"
                  >
                    Add Cart
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
