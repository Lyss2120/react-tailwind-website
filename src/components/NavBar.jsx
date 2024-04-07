import React, { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

const NavBar = () => {
   const [toggle, setToggle] = useState(false)


    return (
  <nav className=" w-full flex py-6 bg-slate-900 justify-between items-center navbar">
     <img src={logo} alt="logo" className="w-[124px] h-[32px]"/>

     <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav,i)=>{
            return(
                <li
                key={nav.id}
                className={`text-white font-poppins font-normal cursor-pointer text-[16px] 
                ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                >
                <a href={`#${nav.id}`}>{nav.title}</a>    
                </li>
            )
        })}
     </ul>

     <div className="sm:hidden flex justify-end items-center flex-1">
        <img src={toggle ? close : menu} 
        alt="menu" 
        className="object-contain"
        onClick={()=>{setToggle( (prev)=> !prev)}}/>
     </div>
  </nav>
  )
};

export default NavBar;
