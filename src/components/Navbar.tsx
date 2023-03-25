import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "../assets/UTI_Games-icon-full.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="bg-[#0a192f] w-full justify-between items-center h-[70px] px-4 z-20 fixed flex text-gray-300">
      <div>
        <a href="/">
          <img src={Logo} alt="Logo" style={{ width: "90px" }} />
        </a>
      </div>

      <ul className="hidden md:flex">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/works">Works</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      {/*Hamburger menu*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*mobile menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full flex flex-col justify-center items-center h-screen bg-[#0a192f]"
        }
      >
        <li className="py-6 text-4xl">
          <a href="/">Home</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/about">About</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/works">Works</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/contact">Contact</a>
        </li>
      </ul>

      {/*social icons*/}
      <div className="hidden lg:flex fixed flex-col left-0 top-[35%]">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#13274F]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Youtube <FaYoutube size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#00BFFF]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#041E42]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Mail <FaEnvelope size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
