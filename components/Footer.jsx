import Link from "next/link";
import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { RiCopyrightLine } from "react-icons/ri";
import { FaInstagramSquare, FaTwitterSquare, FaUnsplash } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] p-4 h-[50px] md:mx-auto">
      <div className="flex justify-center items-center gap-4 text-black/80">
        <Link href="/">
          <ImFacebook2
            size={35}
            className="hover:text-blue-400 hover:scale-125 duration-300"
          />
        </Link>
        <Link href="/">
          <FaInstagramSquare
            size={39}
            className="hover:text-blue-400 hover:scale-125 duration-300"
          />
        </Link>
        <Link href="/">
          <FaTwitterSquare
            size={38}
            className="hover:text-blue-400 hover:scale-125 duration-300"
          />
        </Link>
        <Link href="/">
          <FaUnsplash
            size={35}
            className="hover:text-blue-400 hover:scale-125 duration-300"
          />
        </Link>
      </div>
      <div className="flex justify-center items-center text-gray-700 pt-6 gap-1">
        <p className="">Copyright IG_Dev </p>
        <RiCopyrightLine />
        <p className="">2022</p>
      </div>
    </div>
  );
};

export default Footer;
