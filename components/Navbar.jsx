import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {ImCamera} from 'react-icons/im'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
        if(window.scrollY >= 90) {
            setColor('white');
            setTextColor('black')
        }else{
            setColor('transparent')
            setTextColor('white')
        }
    }
    window.addEventListener('scroll', changeColor);
  },[])

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div
        className=" margin-auto flex justify-between
           items-center p-4 text-white"
      >
        <Link href="/">
          <div className="flex items-center justify-start cursor-pointer">
          <ImCamera size={35} style={{ color: `${textColor}` }}/>
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl px-1">
            Captur
          </h1>
          </div>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex ml-auto ">
          <li className="p-4 hover:text-blue-400 duration-200">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 hover:text-blue-400 duration-200">
            <Link href="/#slider">Gallery</Link>
          </li>
          <li className="p-4 hover:text-blue-400 duration-200">
            <Link href="/work">Work</Link>
          </li>
          <li className="p-4 hover:text-blue-400 duration-200">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/*Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10 cursor-pointer">
          {nav ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/*Mobile Menu */}
        <div
          className={
            nav
              ? "absolute left-0 top-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black ease-in duration-300"
              : "absolute left-[-100%] top-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black ease-in duration-300"
          }
        >
          <ul  onClick={handleNav}n className="">
            <li className="p-4 text-4xl hover:text-blue-400 duration-200">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-blue-400 duration-200">
              <Link href="#slider">Gallery</Link>
            </li>
            <li className="p-4 text-4xl hover:text-blue-400 duration-200">
              <Link href="/work">Work</Link>
            </li>
            <li className="p-4 text-4xl hover:text-blue-400 duration-200">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
