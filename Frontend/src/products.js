import product1 from './assets/Samsung A53.jpg';
import product2 from './assets/Samsung S24.jpg';
import product3 from './assets/s22-ultra-black2.jpg';


export const PRODUCTS = [
{
    id:1,
    productName: "Iphone",
    price: 999.0,
    productImage:product1,

},
{
    id:2,
    productName: "Iphone",
    price: 999.0,
    productImage:product2,

},
{
    id:3,
    productName: "Iphone",
    price: 999.0,
    productImage:product3,

},

]
import React from 'react';

const Product = ({ name, description, price }) => {
    return (
        <div className="product">
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
};

export default Product;
