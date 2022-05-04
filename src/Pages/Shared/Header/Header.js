import React from 'react';
import './Header.css';
import logo from '../../../images/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} height={30} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='blogs'>Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user && <>
                                <Nav.Link as={Link} to='car/inventory'>Manage Inventory</Nav.Link>
                                <Nav.Link as={Link} to='addItems'>Add Item</Nav.Link>
                                <Nav.Link as={Link} to='myItems'>My Items</Nav.Link>
                            </>
                        }
                        {
                            user ? <button className='singout-btn' type="button" onClick={handleSignOut}>Sign Out</button> :
                                <Nav>
                                    <Nav.Link as={Link} to="login">Login</Nav.Link>
                                    <Nav.Link as={Link} to='register'>Register</Nav.Link>
                                </Nav>

                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;