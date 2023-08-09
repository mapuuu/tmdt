import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 mt-10">
      <div className="flex w-5/6 mx-auto gap-x-[200px] py-5">
        <div className="flex flex-col gap-y-[5px]">
          <h1 className="font-semibold text-xl">Company</h1>
          <Link to="/shopping">Shopping</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="flex flex-col gap-y-[5px]">
          <h1 className="font-semibold text-xl">Top Categories</h1>
          <Link to="/technology">Technology</Link>
          <Link to="/clothes">Clothes</Link>
          <Link to="/smartphone">SmartPhone</Link>
        </div>
        <div className="flex flex-col gap-y-[5px]">
          <h1 className="font-semibold text-xl">My account</h1>
          <Link to="/profile">Profile</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/change-password">Change Password</Link>
        </div>
        <div className="flex flex-col gap-y-[5px]">
          <h1 className="font-semibold text-xl">Connections</h1>
          <a href="https://www.facebook.com">Facebook</a>
          <a href="https://www.instagram.com">Instagram</a>
          <a href="https://www.twitter.com">Twitter</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
