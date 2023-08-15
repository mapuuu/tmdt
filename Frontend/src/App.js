import React from 'react';
import Login from './Pages/Login.js';
import Navbar from './Pages/Navbar.js';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register.js';
import Home from './Components/Home.js';
import Footer from './Pages/Footer.js';
import ProductDetail from './Pages/ProductDetail.js';
import Shopping from './Components/Shopping.js';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{
      position: "relative",
      /* Các thuộc tính CSS khác cho thanh điều hướng */
    }}>
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/product_detail/:id" element={<ProductDetail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
