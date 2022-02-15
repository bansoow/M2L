import { Navbar, Container, Nav, Form, FormControl, NavDropdown} from 'react-bootstrap';
import Logo from '../../images/Logo2.png';
import './index.css';

const Navbars = () => {
    return (
      <Navbar bg="light" expand="md" id="navbar">
        <Container fluid>
          <Navbar.Brand href="/"><img src={Logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Compte" id="basic-nav-dropdown">
                <NavDropdown.Item href="/connexion">Connexion</NavDropdown.Item>
                <NavDropdown.Item href="/inscription">Inscription</NavDropdown.Item>
                <NavDropdown.Item href="/profil">Profil</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/commande">Commande </Nav.Link>
              <Nav.Link href="/panier">Panier</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Navbars;