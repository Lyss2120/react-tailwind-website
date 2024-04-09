import React, { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  console.log({ navLinks });

  return (
    <nav className=" w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, i) => {
          return (
            <li
              key={nav.id}
              className={`text-white font-poppins font-normal cursor-pointer text-[16px]
                ${i === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          );
        })}
      </ul>

      <div className="sm:hidden flex justify-end items-center flex-1">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="object-contain w-[28px] h-[28px]"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        />
        <div
          className={`${toggle ?  'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 
        right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-center flex-col flex-1">
            {navLinks.map((nav, i) => {
              return (
                <li
                  key={nav.id}
                  className={`text-white font-poppins font-normal cursor-pointer text-[16px]
                ${i === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
