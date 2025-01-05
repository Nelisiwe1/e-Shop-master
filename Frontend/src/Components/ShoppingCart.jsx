// src/components/ShoppingCart.js
import React from 'react';

const ShoppingCart = ({ cartItems, onRemove, onQuantityChange }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart p-12 bg-gray-100 rounded-lg shadow-lg w-full max-w-md mx-auto mt-12">
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item p-8 border-b border-gray-200">
              <h4 className="text-lg font-semibold">{item.name}</h4>
              <p className="text-gray-700">Price: ${item.price}</p>
              <div className="flex items-center mt-2">
                <span className="mr-2">Quantity:</span>
                <input
                  type="number"
                  className="w-16 px-2 py-1 border rounded-md"
                  value={item.quantity}
                  onChange={(e) => onQuantityChange(item.id, e.target.value)}
                  min="1"
                />
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="mt-2 text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          ))}
          <p className="text-right text-xl font-semibold">Total: ${total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
