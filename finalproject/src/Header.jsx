import React from 'react';
import { connect } from 'react-redux';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import FurnitureSection from './FurnitureSection';
import Aboutsection from './Aboutsection';
import Blog from './Blog';
import Contactus from './Contactus';
import ClientSection from './ClientSection';
import Footersection from './Footersection';
import Yearsection from './Yearsection';
import SliderSection from './Slidersection';
import Cart from './Cart';
import { CiShoppingCart } from "react-icons/ci";
import Login from './Login';
import { IoIosSearch } from "react-icons/io";
import './Header.css';

const Header = ({ cartItemCount }) => {
  return (
    <Router>
      <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className='logo' href="/">Edgecut</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mx-auto"> {/* Apply mx-auto class for horizontal center alignment */}
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/furniture">Furnitures</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/cart" className="shopcart">
                <CiShoppingCart size="30px" />
                {cartItemCount > 0 && <span className="cart-notification">{cartItemCount}</span>}
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/login" className="login">LOGIN <i className="fa-solid fa-user"></i></Nav.Link>
              <Nav.Link><IoIosSearch className="searchicon" size="20px" /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SliderSection />
              <FurnitureSection />
              <Aboutsection />
              <Blog />
              <ClientSection />
              <Contactus />
              <Footersection />
              <Yearsection />
            </>
          }
        />
        <Route path="/furniture" element={<FurnitureSection />} />
        <Route path="/about" element={<Aboutsection />} />
        <Route path="/blog" element={
          <>
            <Blog />
            <ClientSection />
          </>
        } />
        <Route
          path="/contact"
          element={
            <>
              <Contactus />
              <Yearsection />
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  cartItemCount: state.cart.items.length,
});

export default connect(mapStateToProps)(Header);
