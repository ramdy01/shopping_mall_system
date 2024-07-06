import React from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';

const Shop = () => {
  return (
    <div className="shop-container">
      <h2>Shop</h2>
      <Link to="/admin">Go to Admin</Link>
      <br />
      <Link to="/customer">Go to Customer</Link>
    </div>
  );
};

export default Shop;
