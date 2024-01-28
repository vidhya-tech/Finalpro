import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import f1 from './image/f1.png';
import f2 from './image/f2.png';
import f3 from './image/f3.png';
import f4 from './image/f4.png';
import f5 from './image/f5.png';
import f6 from './image/f6.png';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import './Footersection.css'
const Footersection = () => {
  return (
    <>


      {/* Info section */}
      <section className="info_section long_section">
        <Container>
          <div className="contact_nav">
            <Link to="/">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>Call : +01 123455678990</span>
            </Link>
            <Link to="/contact">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>Email : demo@gmail.com</span>
            </Link>
            <Link to="/location">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>Location</span>
            </Link>
          </div>

          <div className="info_top">
            <Row>
              <Col sm={6} md={4} lg={3}>
                <div className="info_links">
                  <h4>QUICK LINKS</h4>
                  <div className="info_links_menu">
                    <Link to="/" className="">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                    <Link to="/about" className="">
                      About
                    </Link>
                    <Link to="/furniture" className="">
                      Furniture
                    </Link>
                    <Link to="/blog" className="">
                      Blog
                    </Link>
                    <Link to="/contact" className="">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={4} lg={3} mx-auto>
                <div className="info_post">
                  <h5>INSTAGRAM FEEDS</h5>
                  <div className="post_box">
                  <div class="img-box">
                  <img src={f1} alt="" />
                </div>
                <div class="img-box">
                  <img src={f2} alt=""/>
                </div>
                <div class="img-box">
                  <img src={f3} alt=""/>
                </div>
                <div class="img-box">
                  <img src={f4} alt=""/>
                </div>
                <div class="img-box">
                  <img src={f5} alt=""/>
                </div>
                <div class="img-box">
                  <img src={f6} alt=""/>
                </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="info_form">
                  <h4>SIGN UP TO OUR NEWSLETTER</h4>
                  <Form>
                    <Form.Group>
                      <Form.Control className='footerinput' type="text" placeholder="Enter Your Email" />
                    </Form.Group>
                    <Button type="submit">Subscribe</Button>
                  </Form>
                  <div className="social_box">
                    <Link>
                    < FaFacebookF className="fa fa-facebook" />
                    </Link>
                    <Link>
                    <FaTwitter className="fa fa-twitter"  />
                    </Link>
                    <Link>
                     <CiLinkedin  className="fa fa-linkedin" />
                      </Link>
                      <Link>
                      
                       
                      <FaInstagram className="fa fa-instagram"/>
                      </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>

        
      </section>

      
      
    </>
  );
};

export default Footersection;
