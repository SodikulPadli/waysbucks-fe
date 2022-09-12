import { Container, Navbar, Image, Dropdown } from 'react-bootstrap';
import Logo from '../../assets/logo.png';
import User from '../../assets/User.png';
import { TbCup } from 'react-icons/tb';
import { GiBottledShadow } from 'react-icons/gi';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function NavbarAdminPage() {
  const navigasi = useNavigate();

  const LogOut = () => {
    navigasi('/');
  };
  const HomePage = () => {
    navigasi('/home-admin');
  };
  const addProduct = () => {
    navigasi('/add-product');
  };
  const addToping = () => {
    navigasi('/add-toping');
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
            <Dropdown>
              <Dropdown.Toggle variant="none" id="dropdown-basic">
                <Image src={User} width="50" height="50" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    addProduct();
                  }}
                >
                  <TbCup size={20} className="me-2" style={{ color: 'red' }} />
                  Add Product
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    addToping();
                  }}
                >
                  <GiBottledShadow size={20} className="me-2" style={{ color: 'red' }} />
                  Add Toping
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
