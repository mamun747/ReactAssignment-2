// import React from "react";

import { useState } from "react";
import MobileNav from "./MobileNav";

// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen]= useState(false);
  const toggleMenu = () => setIsMenuOpen(pre => !pre);
  return (
    <nav className="bg-[#002228] border-[#183A40] border relative">
      <div className="hidden md:flex justify-between md:px-5 lg:px-[120px] py-6 items-center">
        <div>
          <img src="/Logo.png" alt="" />
        </div>
        <div>
          <ul className="flex gap-4 text-[#fff] font-work">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-3">
          <button className="bg-btnColor py-[10px] px-[16px] border-none rounded-full font-semibold shadow-buttonShadow hover:bg-[#002228] hover:outline hover:outline-blue-400 hover:text-white transition-all">Book a Demo</button>
          <button className="border border-white py-[10px] px-[16px] text-[#fff] rounded-full font-semibold hover:bg-[#fff] hover:text-[#000] transition-all">Contact Us</button>
        </div>
      </div>


      <div className="flex md:hidden justify-between px-5 py-6">
        <img src="/Logo.png" alt="" />
        <button onClick={toggleMenu}>
          <img src="/ph_list.png" alt="" />
        </button>
      </div>
      {isMenuOpen ? <MobileNav event={isMenuOpen}/> : null}
    </nav>
  );
}

export default NavigationBar