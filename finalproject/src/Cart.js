import React from 'react';
import { connect } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from './cartSlice';

const Cart = ({ cartItems, incrementQuantity, decrementQuantity, removeFromCart }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2  style={{ marginTop:'100px'}}>Cart </h2>
      {cartItems.map((item) => (
        <div key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
          <img className="furnimage"src={item.image }   alt={item.name} style={{ marginRight: '100px', width:'200px', marginTop:'100px'}} />
          <div>
            <p>{item.name}</p>
            <p>Product: {item.productName}</p>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => incrementQuantity(item)}>Increment</button>
            <button onClick={() => decrementQuantity(item)}>Decrement</button>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        </div>
      ))}
      <p>Total: ${calculateTotal()}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

export default connect(mapStateToProps, { incrementQuantity, decrementQuantity, removeFromCart })(Cart);
