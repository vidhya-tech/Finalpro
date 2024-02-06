import React from 'react';
import { connect } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from './cartSlice';
import './Cart.css';

const Cart = ({ cartItems, incrementQuantity, decrementQuantity, removeFromCart }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img className="furnimage" src={item.image} alt={item.name} />
          <div className="item-details">
            <p>{item.name}</p>
            <p>Product: {item.productName}</p>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <div>
              <button onClick={() => incrementQuantity(item)}>+</button>
              <button onClick={() => decrementQuantity(item)} disabled={item.quantity === 1}>-</button>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          </div>
        </div>
      ))}
      <p className="total">Total: ${calculateTotal()}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

export default connect(mapStateToProps, { incrementQuantity, decrementQuantity, removeFromCart })(Cart);
