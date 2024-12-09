"use client"; 

import { useState } from "react";
import Link from "next/link"; 
import { HiMenu, HiX } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false); 
    const [isSearchVisible, setIsSearchVisible] = useState(false); 
  
    const toggleMenu = () => {
      setIsOpen(!isOpen); // 
    };
    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);  
      };
  
    return (
    <header>
      <div className="flex items-center justify-center w-full md:h-[100px]">
        

        {/* Toggle Menu for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Laptop / Desktop Navigation Links */}
        <nav className="hidden lg:flex space-x-8 md:text-[16px]">
        <ul className = "hidden lg:flex space-x-8 md:text-[16px]">
          <li className="hover:text-gray-600"><Link href="/" >
            Home
          </Link></li>
          <li className="hover:text-gray-600"><Link href="/shop" >
            Shop
          </Link></li>
          <li className="hover:text-gray-600"><Link href="/blog" >
            About
          </Link></li>
          <li className="hover:text-gray-600"><Link href="/contact" >
            Contact
          </Link></li>
          </ul>
        </nav>

        {/* Laptop / Desktop Icons */}
        <div className="hidden lg:flex space-x-6 md:ml-32">
        <ul className="hidden lg:flex space-x-6 md:ml-32">
        <li className="hover:text-gray-600">
            <Link href="/account">
            <CiUser className="w-7 h-7 cursor-pointer" />
            </Link>
        </li></ul>
          
         

            {/* Search Icon */}
            <div className="relative">
            <CiSearch
              className="w-6 h-6 cursor-pointer hover:text-gray-600"
              onClick={toggleSearch} // Toggle search input visibility on click
            />
            {isSearchVisible && (
              <input 
                type="text"
                placeholder="Search..."
                className="absolute left-0 top-8 p-2 mt-1 bg-gray-700 text-white rounded-md w-40 focus:outline-none"
              />
            )}
          </div>
         
            <ul className="hidden lg:flex space-x-6 md:ml-32">
            <li className="hover:text-gray-600">
                <Link href="/productdetails">
                <CiHeart className="w-7 h-7 cursor-pointer" />
                </Link>
            </li></ul>
            <ul className="hidden lg:flex space-x-6 md:ml-32">
            <li className="hover:text-gray-600">
                <Link href="/cart">
                <IoCartOutline className="w-7 h-7 cursor-pointer" />
                </Link>
            </li></ul>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            <ul className="flex flex-col space-y-4 p-4">
            <li><Link href="/" onClick={toggleMenu} className="hover:text-gray-600">
              Home
            </Link></li>
            <li><Link href="/shop" onClick={toggleMenu} className="hover:text-gray-600">
              Shop
            </Link></li>
            <li><Link href="/blog" onClick={toggleMenu} className="hover:text-gray-600">
              About
            </Link></li>
            <li><Link href="/contact" onClick={toggleMenu} className="hover:text-gray-600">
              Contact
            </Link></li>
            </ul>

            {/* Mobile Icons */}
            <div className="flex justify-between mt-4 space-x-4">
                <ul>
              <li className="hover:text-gray-600"><Link href="/account" >
                <CiUser className="w-7 h-7 cursor-pointer" />
              </Link></li></ul>
              
                <CiSearch className="w-7 h-7 cursor-pointer" />
              <ul>
              <li className="hover:text-gray-600"><Link href="/productdetails" >
                <CiHeart className="w-7 h-7 cursor-pointer" />
              </Link></li></ul>
              <ul>
              <li className="hover:text-gray-600"><Link href="/cart" >
                <IoCartOutline className="w-7 h-7 cursor-pointer" />
              </Link></li></ul>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
