import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import client1 from './image/client.jpg';
import client2 from './image/client.jpg';
import client3 from './image/client.jpg';
import './Clientsection.css'

const ClientSection = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="client_section layout_padding-bottom">
      <Container>
        <div className="heading_client">
          <h2>Testimonial</h2>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect} id="carouselExample2Controls" 
        prevIcon={<CustomPrevIcon />}
        nextIcon={<CustomNextIcon />}>
          <Carousel.Item>
            <Row>
              <Col md={11} lg={10} className="mx-auto">
                <div className="box">
                  <div className="img-box">
                    <Image src={client1} alt="" fluid />
                  </div>
                  <div className="detail-box">
                    <div className="name">
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                      <h6>Siaalya</h6>
                    </div>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable cIt is a long
                      established fact that a reader will be distracted by the readable c
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col md={11} lg={10} className="mx-auto">
                <div className="box">
                  <div className="img-box">
                    <Image src={client2} alt="" fluid />
                  </div>
                  <div className="detail-box">
                    <div className="name">
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                      <h6>Siaalya</h6>
                    </div>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable cIt is a long
                      established fact that a reader will be distracted by the readable c
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col md={11} lg={10} className="mx-auto">
                <div className="box">
                  <div className="img-box">
                    <Image src={client3} alt="" fluid />
                  </div>
                  <div className="detail-box">
                    <div className="name">
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                      <h6>Siaalya</h6>
                    </div>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable cIt is a long
                      established fact that a reader will be distracted by the readable c
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>

   


    
      </Container>
    </section>
  );
};
const CustomPrevIcon = () => (
  <span className="custom-carousel-prev-icon"> </span>
);

const CustomNextIcon = () => (
  <span className="custom-carousel-next-icon"></span>
);

export default ClientSection;
