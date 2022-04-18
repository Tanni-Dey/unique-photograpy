import React from 'react';
import logo from '../../imges/logo.png'
import { Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <>
            <Navbar className='text-warning' expand="lg" >
                <Container>
                    <Navbar.Brand className='text-light' as={Link} to="/"><img src={logo} height='30px' alt="" /> Unique Photography</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <NavLink style={{ textDecoration: 'none', padding: '0 10px' }} className={({ isActive }) =>
                                isActive ? 'text-warning' : 'text-light'
                            } to="/">Home</NavLink>
                            <NavLink style={{ textDecoration: 'none', padding: '0 10px' }} className={({ isActive }) =>
                                isActive ? 'text-warning' : 'text-light'
                            } to="/about">About</NavLink>
                            <NavLink style={{ textDecoration: 'none', padding: '0 10px' }} className={({ isActive }) =>
                                isActive ? 'text-warning' : 'text-light'
                            } to="/blog">Blog</NavLink>

                            {
                                user ? <NavLink style={{ textDecoration: 'none', padding: '0 10px' }} className={({ isActive }) =>
                                    isActive ? 'text-warning' : 'text-light'
                                } onClick={() => signOut(auth)} to="/login">Logout</NavLink> : <NavLink style={{ textDecoration: 'none', padding: '0 10px' }} className={({ isActive }) =>
                                    isActive ? 'text-warning' : 'text-light'
                                } to="/login">Login</NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;