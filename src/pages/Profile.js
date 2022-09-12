import { Col, Container, Image, Row } from 'react-bootstrap';
import NavbarPage from '../components/navbar/Navbar';
import Profile from '../assets/profile.png';
import Product from '../assets/menu/product1.png';

export default function ProfilePage() {
  return (
    <>
      <NavbarPage />
      <Container className="mt-5">
        <Row classname="col-md-3">
          <Col>
            <h3 style={{ color: 'red', fontWeight: 'bold' }}>My Profile</h3>
            <div className="d-flex flex-row ">
              <div className="me-3">
                <Image src={Profile} />
              </div>
              <div>
                <p style={{ color: '#613D2B', fontWeight: 'bold' }}>FullName</p>
                <p>Sodikul</p>
                <p style={{ color: '#613D2B', fontWeight: 'bold' }}>Email</p>
                <p>Sodikul@gmail.com</p>
              </div>
            </div>
          </Col>
          <Col>
            <h3 style={{ color: '#613D2B', fontWeight: 'bold' }}>My Transaction</h3>
            <div className="d-flex flex-row" style={{ backgroundColor: '#F6DADA' }}>
              <div className="mx-3 my-3">
                <Image src={Product} width={100} height={100} />
              </div>
              <div style={{ color: 'red' }}>
                <b>Ice Coffe Palm</b>
                <p className="mb-3">
                  <b>Saturday</b>, 5 march 2022
                </p>
                <span>Toping : Bill Berry Boba</span>
                <p>Price : Rp.33.000</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
