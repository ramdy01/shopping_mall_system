import React, { useState } from 'react';
import './Admin.css';

const Admin = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [products, setProducts] = useState([]);

  const handleAddProduct = () => {
    const newProduct = {
      id: Math.random(),
      name: productName,
      price: parseFloat(productPrice),
    };
    setProducts([...products, newProduct]);
    setProductName('');
    setProductPrice('');
  };

  return (
    <div className="admin-container">
      <h2>Admin</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Product Price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add Product</button>
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

export default Admin;
