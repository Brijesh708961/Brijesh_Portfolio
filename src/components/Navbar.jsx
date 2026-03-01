import React from "react";
import { navMenu } from "../assets/asstes";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed w-full py-4 z-50 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* {Logo} */}
          <div className="text-2xl font-bold text-zinc-800">
            <span> THE-</span>
            <span className="text-teal-800 font-orbitron">BRIJESH</span>
          </div>
          {/* {Menu} */}
          <div className="hidden md:flex space-x-8 border border-gray-200 rounded-full px-10 py-4">
            {navMenu.map((item, index) => (
              <a key={index} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </div>
          {/* {Buttons} */}
          <div>
            <a
              href="https://drive.google.com/file/d/1OBDRMJH8L5pEVviq96_XkNhpH4IggtTX/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-10 py-4 border border-zinc-800 rounded-full flex items-center gap-2 cursor-pointer text-slate-500 hover:text-slate-800 hover:translate-y-1 transition duration-500 ease-in-out ">
                Resume
                <FaArrowRight className="text-gray-500 text-sm" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
