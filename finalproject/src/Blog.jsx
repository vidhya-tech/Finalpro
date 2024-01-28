import React from 'react';
import b1 from './image/b1.jpg';
import b2 from './image/b2.jpg';
import b3 from './image/b3.jpg';
import './Blog.css'

function Blog() {
  return (
    <>
    
    <section className="blog_section layout_padding">
    <div className="container">
      <div className="blog_container">
        <h2>
          Latest Blog
        </h2>
      </div>
      <div className="row">
        <div className="col-md-6-row col-lg-4 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src={b1} alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Look even slightly believable. If you are
              </h5>
              <p>
                alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              </p>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6-row col-lg-4 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src={b2} alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Anything embarrassing hidden in the middle
              </h5>
              <p>
                alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              </p>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6-row  col-lg-4 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src={b3} alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Molestias magni natus dolores odio commodi. Quaerat!
              </h5>
              <p>
                alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              </p>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    </>
  );
}

export default Blog;
