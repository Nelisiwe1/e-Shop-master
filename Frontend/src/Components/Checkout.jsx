// src/components/Checkout.js
import React, { useState } from 'react';

const Checkout = ({ onPlaceOrder }) => {
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const handleSubmit = () => {
    onPlaceOrder({ address, paymentMethod });
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <label>
        Payment Method:
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="credit">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </label>
      <button onClick={handleSubmit}>Place Order</button>
    </div>
  );
};

export default Checkout;
