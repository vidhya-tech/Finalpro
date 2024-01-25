import React from 'react';
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
import './App.css'

const Header = () => {
  return (
    <Router>
       <div>
      <header>
          <span className='logo'>
            Edgecut
          </span>
        <nav>
          <ul className='navlinks'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/furniture">Furnitures</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li> {/* Corrected spelling */}
            <li>
              <Link to="/cart" className='shopcart'><CiShoppingCart  size="30px" /></Link>
            </li>
          </ul>
        </nav>
        {/* Moved inside the nav element */}
        <ul className='navlinks'>
          <li className='login'><Link to='/login'>LOGIN</Link></li> 
          <li><IoIosSearch  className='searchicon' size="20px" /></li>
        </ul>
      </header>
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
        <Route path="/about" element={<Aboutsection/>} />
        <Route path="/blog" element={
            <>
              <Blog />
              <ClientSection />
            </>
          }
        />
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
         <Route path="/login" element={<Login/>} />
      </Routes>
      
     
    </Router>
  );
};

export default Header;
