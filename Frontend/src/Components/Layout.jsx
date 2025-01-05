// components/Layout.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation

const Layout = ({ children }) => {
  return (
    <div>
      {/* Fixed logo */}
      <Link 
        to="/" 
        className="fixed top-4 left-4 text-black font-lobster text-2xl sm:text-3xl z-10 px-4 py-2 bg-white rounded-md shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out"
        aria-label="iTronicDeals Home"
      >
        iTronicDeals
      </Link>

      {/* Main content */}
      <main className="pt-16"> {/* Adding padding-top to prevent content overlap with the fixed logo */}
        {children}
      </main>
    </div>
  );
};

export default Layout;
