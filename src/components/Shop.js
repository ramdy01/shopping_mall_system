import React from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';

const Shop = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  return (
    <div className="shop-container">
      <h2>Shop</h2>
      <Link to="/admin">Go to Admin</Link>
      <br />
      <Link to="/customer">Go to Customer</Link>
      <h3>Products:</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
