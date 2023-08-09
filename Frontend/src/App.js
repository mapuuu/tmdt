import React from 'react';
import Login from './Pages/Login.js';
import Navbar from './Pages/Navbar.js';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register.js';
import Home from './Components/Home.js';
import Footer from './Pages/Footer.js';
import ProductDetail from './Pages/ProductDetail.js';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Navbar />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/product_detail/:id" element={<ProductDetail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
