import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants/index.js";
import { logo, menu, close } from "../assets";
import logoImg from "../assets/logos/VR_with_strap_128.png";
const Navbar = () => {
  return (
    <nav className="max-w-7xl z-20 sticky top-5   shadow-2xl  mx-auto">
      <div className="glass-container flex flex-row rounded-3xl  px-5 py-1 bg-transparent backdrop-blur-sm">
        <div className="flex flex-row items-center">
          <img className="w-16 h-16" src={logoImg} alt="Logo" />
          <h1 className="text-[`${styles.heroHeadText}`]  ml-2">
            {" "}
            Osman <span> | Software Engineer</span>
          </h1>
        </div>
        <div className="flex-grow"></div>
        <div className="flex flex-row gap-8 items-center item ml-auto">
          {navLinks.map((link) => (
            <h3
              key={link.id}
              className="text-white hover:text-blue-500 cursor-pointer"
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </h3>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
