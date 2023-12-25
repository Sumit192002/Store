// Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ cartItems }) => {
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <p>Total Items: {cartItems.length}</p>
      <p>Total Amount: ${totalAmount}</p>
    </div>
  );
};

export default Cart;
