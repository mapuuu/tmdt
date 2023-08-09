import React from 'react';
import { BiCartAlt, BiUserCircle } from 'react-icons/bi';
import { AiFillHeart, AiOutlineSearch } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { ReactComponent as Logo } from '../logo.svg';
import { Link } from 'react-router-dom';
import Search from '../Components/Search';

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="flex w-5/6 mx-auto items-center justify-between py-8">
        <Logo />
        {/* <div className="flex justify-between items-center w-2/5  text-xl border rounded-full h-full">
          <div className="w-[85%] ml-[2rem] flex justify-between items-center">
            <input
              className="w-11/12 h-[3.125rem] outline-none"
              type="text"
              placeholder="Tìm kiếm..."
            />
            <TiDeleteOutline className="opacity-50 hidden text-2xl" />
          </div>
          <AiOutlineSearch className="mr-[1.25rem] text-2xl" />
        </div> */}
        <Search />
        <div>
          <ul className="flex justify-center gap-x-10">
            <li className="">
              <Link to="/shopping">Mua sắm</Link>
            </li>
            <li className="">
              <Link to="/about">Về chúng tôi</Link>
            </li>
            <li className="">
              <Link to="/contact">Liên hệ</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="border flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] relative">
            <AiFillHeart className="text-xl" />
            <div className="flex items-center justify-center border bg-orange-400 rounded-full w-[1.5rem] h-[1.5rem] absolute bottom-5 left-6">
              0
            </div>
          </div>
          <div className="border flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] relative">
            <BiCartAlt className="text-xl" />
            <div className="flex items-center justify-center border bg-orange-400 rounded-full w-[1.5rem] h-[1.5rem] absolute bottom-5 left-6">
              0
            </div>
          </div>
          <div>
            <BiUserCircle className="text-[3rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
