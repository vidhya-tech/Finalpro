import React from 'react'
import about from './image/about-img.png';
import './Aboutsection.css'
function Aboutsection() {
  return (
    <div>
      <section className="about_section ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src={about} className='about-image' alt='about' />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="about_container">
                                    <h2>
                                        ABOUTUS
                                    </h2>
                                </div>
                                <p className='about-para'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum, eius odit consectetur vel quasi in quidem, eveniet ab est corporis tempore.
                                </p>
                                <a className="button" href="">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Aboutsection
