// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Profile from './Components/Profile';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar cart={cart} />  {/* Pass cart to Navbar to calculate totalItems */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ProductList" element={<ProductList cart={cart} setCart={setCart} />} />
        <Route 
          path="/ShoppingCart" 
          element={
            <ShoppingCart 
              cartItems={cart} 
              onRemove={(id) => setCart(cart.filter(item => item.id !== id))} 
              onQuantityChange={(id, quantity) => 
                setCart(cart.map(item => item.id === id ? { ...item, quantity: parseInt(quantity) } : item))
              } 
            />
          } 
        />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
