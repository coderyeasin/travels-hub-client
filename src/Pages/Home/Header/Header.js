import useAuth from '../../../Hooks/useAuth';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Banner from '../Banner/Banner';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../../images/logo(1).png'

const Header = () => {

    const { user, userLogOut} = useAuth();

    
    return (
        <div id="home">
           <Navbar fixed="top" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <img
                        src={logo}
                        width="130"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Hero"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-3 my-lg-0 align-items-center"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        >
                        <HashLink className="me-3 fs-6" to="/home#home" id="menu">Home</HashLink>
                        <HashLink className="me-3 fs-6" id="menu" to="/home#upcoming">Upcoming</HashLink>
                        <HashLink className="me-3 fs-6" id="menu" to="/home#zone">TouristsZone</HashLink>
                        <HashLink className="me-3 fs-6" id="menu" to="/home#location">Location</HashLink>
                        <HashLink className="me-3 fs-6" id="menu" to="/home#blog">Blog</HashLink>
                            {user?.email && <div>
                                <Link to="/dashboard" className="text-decoration-none">
                             <NavDropdown className="me-3 fs-6" title="Dashboard" id="navbarScrollingDropdown">
                             <NavHashLink to="/dashboard" id="menu" className="px-3">Dashboard</NavHashLink> <br />
                             <NavHashLink to="/mytour" id="menu" className="px-3">My Zones</NavHashLink> <br />
                             <NavHashLink to="/addnewzones" id="menu" className="px-3">Add TourZone</NavHashLink> <br />
                             <NavHashLink to="/manageallzones" id="menu" className="px-3">Manage AllZone</NavHashLink> <br />
                             <NavHashLink to="/totaluser" id="menu" className="px-3">Total Users</NavHashLink>
                             <NavDropdown.Divider />
                             <NavHashLink to="" onClick={userLogOut} id="menu" className="px-3">LogOut</NavHashLink>
                             <NavDropdown.Divider />
                             <NavDropdown.Item href="#action5">
                                 Get Start a Event
                             </NavDropdown.Item>
                            </NavDropdown>    
                            </Link>
                        </div>
                              
                                
                        }
                           {user?.email && user.displayName}
                            {user?.email ?
                                <img src={user.photoURL} className="img-fluid" width="30px" height="30px" style={{ borderRadius:'15px', marginLeft:'5px'}} alt="" /> ||
                                <Nav.Link onClick={userLogOut} id="menu" > Logout </Nav.Link>
                                :
                                <HashLink className="me-3 fs-6 btn btn-info text-light" to="/register" id="menu">Join US!</HashLink>
                            }
                    </Nav>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;