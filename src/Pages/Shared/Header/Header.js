import React from 'react';
import './Header.css';
import logo from '../../../images/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} height={30} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='home'>Home</Nav.Link>
                        <Nav.Link href="home#inventories">Inventory</Nav.Link>
                        <Nav.Link as={Link} to='blogs'>Blogs</Nav.Link>
                        <Nav.Link as={Link} to='register'>Register</Nav.Link>
                        <Nav.Link as={Link} to='login'>
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;