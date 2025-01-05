import React from 'react';

const Home = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(./laptop.jpg)' }}>
       
      <div className="flex items-center justify-start h-full px-4 sm:px-8">
        <h3 className="text-black text-3xl sm:text-4xl font-inter text-left leading-snug">
          Discover the latest deals on <br />
          phones, gadgets, and <br /> fashion 
          that<br /> are affordable and<br />
          delivered safely.
        </h3>
      </div>
    </div>
  );
};

export default Home;
