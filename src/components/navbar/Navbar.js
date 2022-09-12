import { Container, Navbar, Image, Dropdown } from 'react-bootstrap';
import Logo from '../../assets/logo.png';
import User from '../../assets/User.png';
import { BsFillBasketFill, BsFillPersonFill } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function NavbarPage() {
  const navigasi = useNavigate();

  const LogOut = () => {
    navigasi('/');
  };
  const HomePage = () => {
    navigasi('/home');
  };
  const goToProfile = () => {
    navigasi('/profile');
  };
  const MyCart = () => {
    navigasi('/cart');
  };
  return (
    <>
      <Navbar bg="none">
        <Container>
          <Navbar.Brand
            onClick={() => {
              HomePage();
            }}
          >
            <Image src={Logo} width="60" height="60" className="d-inline-block align-top" alt="WaysBucks" />
          </Navbar.Brand>
          <div className="d-flex">
            <BsFillBasketFill
              onClick={() => {
                MyCart();
              }}
              size={30}
              className="me-4 mt-3"
              style={{ color: 'red' }}
            />
            <Dropdown>
              <Dropdown.Toggle variant="none" id="dropdown-basic">
                <Image src={User} width="50" height="50" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    goToProfile();
                  }}
                >
                  <BsFillPersonFill size={20} className="me-2" style={{ color: 'red' }} />
                  Profile
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    LogOut();
                  }}
                >
                  <FiLogOut className="me-2" style={{ color: 'red' }} /> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
