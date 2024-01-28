import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contactsection.css'




function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
      alert('Please fill in required fields');
      return;
    }


    console.log('Form submitted:', formData);
  };



  return (
    <section className="contact_section long_section">
      <Container>
        <Row>
          <Col md={6}>
            <div className="form_container">
              <div className="heading_container">
                <h2>Contact Us</h2>
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formPhoneNumber">
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Control
                    type="text"
                    className="message-box"
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Form.Group>
                <div className="contact_box">
                  <Button className='button-contact' type="submit">SEND</Button>
                </div>
              </Form>
            </div>
          </Col>
          <Col md={6}>
            <div className="map_container">
              <div className="map">
                <iframe
                  title="Google Map"
                  width="100%"
                  height="400"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387235.6914685958!2d-74.2598649450813!3d40.69714942294262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1612359330590!5m2!1sen!2sus"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

    </section>
  );
}

export default Contactus;
