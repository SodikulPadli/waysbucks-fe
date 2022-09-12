import { Container, Row, Col, Button } from 'react-bootstrap';
import NavbarAdminPage from '../components/navbar/NavbarAdmin';
export default function HomePageAdmin() {
  return (
    <>
      <NavbarAdminPage />
      <Container>
        <Row className="mt-5">
          <Col className="mb-3">
            <h3 style={{ color: 'red', fontWeight: 'bold' }}>Income Transction</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <table class="table">
              <thead class="table-dark">
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Post Code</th>
                  <th>Income</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Sodikul</td>
                  <td>Sindang Jaya</td>
                  <td>15560</td>
                  <td>Rp.33.000</td>
                  <td>Waiting Approve</td>
                  <td>
                    <Button variant="danger" size="sm" className="me-3">
                      Cancel
                    </Button>
                    <Button variant="success" size="sm">
                      Approve
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
