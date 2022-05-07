import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar className='p-3' collapseOnSelect expand="lg" bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand className='fw-semibold' as={Link} to='/'>Suzuki Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                        </Nav>
                        <Nav>

                            {user
                                &&
                                <>
                                    <Nav.Link as={Link} to='/manageinventory'>Manage items</Nav.Link>
                                    <Nav.Link as={Link} to='/additems'>Add items</Nav.Link>
                                    <Nav.Link as={Link} to='/myitems'>My Items</Nav.Link>
                                </>
                            }

                            {user ?
                                <button className='btn btn-secondary' onClick={handleSignOut}>LogOut</button>
                                :
                                <Nav.Link as={Link} to='/login'>Login</Nav.Link>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;