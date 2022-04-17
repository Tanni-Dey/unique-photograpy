import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar className='text-warning' sticky='top' expand="lg" >
                <Container>
                    <Navbar.Brand className='text-warning' as={Link} to="/">Unique Photography</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='text-warning' as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} className='text-warning' to="/about">About</Nav.Link>
                            <Nav.Link as={Link} className='text-warning' to="/blog">Blog</Nav.Link>
                            <Nav.Link className='text-warning' as={Link} to="/login">Login</Nav.Link>

                            {/* {
                                user ? <Nav.Link onClick={() => signOut(auth)} as={Link} to="/login">Logout</Nav.Link> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            } */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;