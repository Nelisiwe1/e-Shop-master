// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cart }) => {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0); // Calculate total items in cart

  return (
    <div>
      <Link 
        to="/" 
        className="fixed top-4 left-4 text-black font-lobster text-2xl sm:text-3xl z-10 px-4 py-2 shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out"
      >
        iTronicDeals
      </Link>
      <div className="absolute top-4 right-4 flex space-x-4 z-10">
        <Link to="/Profile">
          <img className="h-10 w-auto" src="profile_icon.png" alt="Profile Icon" />
        </Link>
        <Link to="/ShoppingCart">
          <img className="h-10 w-auto" src="cart_shopping_icon.png" alt="Cart Icon" />
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
      <div className="absolute top-4 left-1/2 transform -translate-x-2/3 bg-gray-100 p-6 rounded-full shadow-md shadow-gray-500 z-10 flex space-x-6 w-auto">
        <Link to="/ProductList" className="text-black font-inter text-xl hover:text-gray-800">Product</Link>
        <Link to="/About" className="text-black font-inter text-xl hover:text-gray-800">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
