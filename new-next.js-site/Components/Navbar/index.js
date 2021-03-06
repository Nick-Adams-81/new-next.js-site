import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import styles from './style.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => (
    <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home" id={styles.nav}>Nick Adams</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home" >Home</Nav.Link>
      <Nav.Link href="#features">Portfolio</Nav.Link>
      <Nav.Link href="#pricing">Music</Nav.Link>
      <Nav.Link href="#pricing">Contact Nick</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
</>
)

export default NavBar;