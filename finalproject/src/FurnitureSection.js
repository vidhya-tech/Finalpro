import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from './cartSlice';
import f1 from './image/f1.png';
import f2 from './image/f2.png';
import f3 from './image/f3.png';
import f4 from './image/f4.png';
import f5 from './image/f5.png';
import f6 from './image/f6.png';
import { Link } from 'react-router-dom';
import './Furnituresection.css'
const FurnitureSection = ({ addToCart }) => {
  const [addedProduct, setAddedProduct] = useState(null);

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedProduct(item);
    // Reset the message after a short delay
    setTimeout(() => {
      setAddedProduct(null);
    }, 2000);
  };

  // Define your product data
  const products = [
    { id: 1, name: 'Brown Chair Design', price: 100, image: f1 },
    { id: 2, name: 'Double Bed Design', price: 200, image: f2 },
    { id: 3, name: 'House Chair Design', price: 200, image: f3 },
    { id: 4, name: 'Brown Table Design', price: 100, image: f4 },
    { id: 5, name: 'Blue Chair Design', price: 200, image: f5 },
    { id: 6, name: 'Brown Table Design', price: 200, image: f6 },
  ];

  return (
    <div className="furniture_section">
     <div class="headingfurniture_container">
        <h2>
          Our Furniture
        </h2>
        <p>
          which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't an
        </p>
      </div>
      {products.map((product) => (
        
        <div className='box product' key={product.id}>
          <div className='image-box-fur'>
            <img src={product.image} alt={product.name} />
          </div>
          <div className='detail-box'>
            <h5>{product.name}</h5>
            <div className='price_box'>
              <div className='price_heading'>${product.price.toFixed(2)}</div>
              <Link className="add-to-cart-link" onClick={() => handleAddToCart(product)}>Add to Cart</Link>
            </div>
          </div>
          {addedProduct && addedProduct.id === product.id && (
            <p className="product-added-message">Product added to the cart!</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default connect(null, { addToCart })(FurnitureSection);
