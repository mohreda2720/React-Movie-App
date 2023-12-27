import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './navbar.css'
import { useSelector } from 'react-redux';

function NavBar() {
  const favMovie = useSelector(state => state.movies)
  return (
    <Navbar bg="warning" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Movie</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="link" to="/movie">Movies</Link>
            <Link className="link" to="/todo">Todo</Link>
            <Link className="link" to="/sign">Sign Up</Link>
            <Link className="link" to="/login">Login</Link>
            <Link className="link" to="/favourite">Favourites</Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home">Favourites: {favMovie.length}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;