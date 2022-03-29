import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth'
import { faSignInAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

  //  Font Awsome Icons //
  const loginIcon = <FontAwesomeIcon icon={faSignInAlt} />
  const userIcon=<FontAwesomeIcon icon={faUserCircle}/>

    //  Destructuring from firebase Hook //
  const {user,LogOUt,setIsLoadng}=useAuth()

    return (
     
          
            // Nave BAR ///
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="/">Health Care Limited</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink className="navbar-brand border border-info p-2 m-2" to="/">Home</NavLink>
      <NavLink onClick={()=>setIsLoadng(false)} className="navbar-brand border border-info p-2 m-2" to="/services">Services</NavLink>
      <NavLink className="navbar-brand border border-info p-2 m-2" to="/about">About</NavLink>
      {!user.displayName?<NavLink className="navbar-brand border border-info p-2 m-2" to="/login">Log in  {loginIcon}</NavLink>:<a onClick={LogOUt} className="navbar-brand border border-info p-2 m-2" href="/">Sign Out {loginIcon}</a>}
    </Nav>
    <h1>{userIcon} {user.displayName} </h1>
    
  </Navbar.Collapse>
  </Container>
</Navbar>


     
          
      
    );
};

export default Header;