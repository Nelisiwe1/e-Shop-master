import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import ShoppingCart from './ShoppingCart';

const ProductList = ({ cart, setCart }) => {
  // Sample products data with image URLs
  const products = [
    { id: 1, name: 'iPhone x Gold', category: 'Electronics', price: 10000, image: '/images/iphone_xs_gold.jpg' },
    { id: 2, name: 'Nike Dunk Brown', category: 'Clothing', price: 1500, image: '/images/nike snecker.png' },
    { id: 3, name: 'Gadgets', category: 'Electronics', price: 200, image: '/images/gadgets.webp' },
    { id: 4, name: 'Hoodie Green', category: 'Clothing', price: 300, image: '/images/hoodie.webp' },
    { id: 5, name: 'Laptop silver', category: 'Electronics', price: 15000, image: '/images/lappp.jpeg' },
  ];

  const categories = ['All', 'Electronics', 'Clothing'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  // Add product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="p-8 mt-16">
      {/* Category Filter */}
      <div className="mb-8">
        <select 
          onChange={(e) => setSelectedCategory(e.target.value)} 
          value={selectedCategory} 
          className="border p-2 rounded"
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map(({ id, name, category, price, image }) => (
          <div key={id} className="border p-4 rounded-lg shadow-lg">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-gray-600">Category: {category}</p>
            <p className="font-bold text-xl mt-2">  R{price}</p>
            <button 
              onClick={() => addToCart({ id, name, category, price })}
              className="mt-4 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
