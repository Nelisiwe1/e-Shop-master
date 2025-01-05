import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4 mt-16"> {/* Added mt-16 for margin-top */}
      <div className="bg-white shadow-lg rounded-lg max-w-4xl p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">About</h1>
        <div className="flex flex-col md:flex-row items-center">
          <img 
            src='./laptop.jpg' 
            alt="Your Photo" 
            className="w-48 h-48 mb-4 md:mb-0 md:mr-8 object-cover"
          />
          <div className="text-lg leading-relaxed text-gray-700">
            <p className="mb-4">
              Welcome to iPhone Deals, your ultimate destination for the best in new phones, cutting-edge gadgets, and stylish sneakers straight from the box. We pride ourselves on offering top-quality products that cater to your tech and fashion needs, all while ensuring a seamless and satisfying shopping experience.
            </p>
            <p className="mb-4">
              Our Mission: <br/>At iPhone Deals, our mission is simple: to provide you with the latest and greatest in technology and fashion at unbeatable prices. We understand the importance of staying connected and looking good, which is why we strive to bring you the best deals on the market. Whether you're looking for a brand-new iPhone, the latest smartwatch, or a pair of trendy sneakers, we've got you covered.
            </p>
          </div>
        </div>
        <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-blue-700">Shop now</button>
        <div className="text-lg leading-relaxed text-gray-700 mt-8"> {/* Added margin-top for spacing */}
          <p className="font-bold mb-2">Our Products</p>
          <ul className="list-disc pl-5 mb-4">
            <li className="mb-2">New Phones: Discover the latest models from top brands like Apple, Samsung, and more. Whether you're upgrading your phone or looking for the perfect gift, you'll find the best options here.</li>
            <li className="mb-2">Gadgets: Stay ahead of the tech curve with our range of innovative gadgets. From smartwatches to wireless earbuds, we have everything you need to enhance your digital lifestyle.</li>
            <li className="mb-2">Sneakers: Step up your sneaker game with our exclusive collection of brand-new sneakers. We offer the latest styles and trends to keep you looking fresh and fashionable.</li>
          </ul>
          <p>Thank you for choosing iPhone Deals. We're excited to be a part of your journey and look forward to serving you with the best products and services in the industry. Happy shopping!</p>
        </div>
      </div>
    </div>
  );
};

export default About;
