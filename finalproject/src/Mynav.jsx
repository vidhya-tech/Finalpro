import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FurnitureSection from './FurnitureSection';
import Aboutsection from './Aboutsection';
import Blog from './Blog';

function Mynav() {
  return (
    <div className='resnav'>
    <Router>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className='navabarheading'>EDGUCUT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
               <Link to="/">Home</Link>
               <Link to="/furniture">Furnitures</Link>
               <Link to="/about">About</Link>
               <Link to="/blog">Blog</Link>
               <Link to="/contact">Contactus</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
      
         
        <Route path="/furniture" element={<FurnitureSection/>} />
        <Route path="/about" element={<Aboutsection/>} />
        <Route path="/blog" element={<Blog/>} />
        
      </Routes>
    </Router>
    </div>
  );
}

export default Mynav;
