import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Shop from './components/Shop';
import Admin from './components/Admin';
import Customer from './components/Customer';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <h1>Shopping Mall Management System</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/customer" element={<Customer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
