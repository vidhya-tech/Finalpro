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


const Header = () => {
  return (
    <Router>
      <div className="container-navbar">
        <span className='heading'>Edgecut</span>

        <nav className='navbar'>
          <ul className='navbarssection'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/furniture">Furnitures</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contactus</Link></li>
            <li>
              <Link to="/cart"><CiShoppingCart  size="30px" /></Link>
            </li>
          </ul>

          <div className="quote_btn-container">
            <Link to="/Login">
              <span className='login'>Login</span>
              <i className="fa fa-user" aria-hidden="true"></i>
            </Link>
            <form className="form-inline">
              <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </nav>
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
      </Routes>
     
    </Router>
  );
};

export default Header;
