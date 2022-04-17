import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <>
            <Navbar className='text-warning' expand="lg" >
                <Container>
                    <Navbar.Brand className='text-warning' as={Link} to="/">Unique Photography</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='text-warning' as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} className='text-warning' to="/about">About</Nav.Link>
                            <Nav.Link as={Link} className='text-warning' to="/blog">Blog</Nav.Link>

                            {
                                user ? <Nav.Link className='text-warning' onClick={() => signOut(auth)} as={Link} to="/login">Logout</Nav.Link> : <Nav.Link className='text-warning' as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;