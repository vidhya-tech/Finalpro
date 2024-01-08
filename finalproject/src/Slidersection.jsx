import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import sliderImage from './image/slider-img.png';
import sliderImage2 from './image/slider-img.png';
import sliderImage3 from './image/slider-img.png';

const SliderSection = () => {
  return (
    <section className="slider_section long_section">
      <Carousel interval={2000} >
        
        <Carousel.Item>
          
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="detail-box">
                  <h1>
                    For All Your <br />
                    Furniture Needs
                  </h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                  </p>
                  <div className="btn-box">
                    <a href="" className="btn1">
                      Contact Us
                    </a>
                    <a href="" className="btn2">
                      About Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="img-box">
                  <img src={sliderImage2} alt="Slider Image" />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          {/* ... your existing content for Slide 2 */}
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="detail-box">
                  <h1>
                    For All Your <br />
                    Furniture Needs
                  </h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                  </p>
                  <div className="btn-box">
                    <a href="" className="btn1">
                      Contact Us
                    </a>
                    <a href="" className="btn2">
                      About Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="img-box">
                  <img src={sliderImage3} alt="Slider Image" />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          {/* ... your existing content for Slide 3 */}
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="detail-box">
                  <h1>
                    For All Your <br />
                    Furniture Needs
                  </h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                  </p>
                  <div className="btn-box">
                    <a href="" className="btn1">
                      Contact Us
                    </a>
                    <a href="" className="btn2">
                      About Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="img-box">
                  <img src={sliderImage} alt="Slider Image" />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default SliderSection;
