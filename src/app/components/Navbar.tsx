"use client";
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#00246B] shadow-lg sticky top-0 z-10 transition duration-300 ease-in-out">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-[#CADCFC] transition duration-300">DevHub</Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none focus:ring-2 focus:ring-[#CADCFC] rounded-lg p-2 transition duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-[#CADCFC] transition duration-300 transform hover:scale-105 px-2 py-1 rounded-md">Home</Link>
          <Link href="/about" className="text-white hover:text-[#CADCFC] transition duration-300 transform hover:scale-105 px-2 py-1 rounded-md">About</Link>
          <Link href="/contact" className="text-white hover:text-[#CADCFC] transition duration-300 transform hover:scale-105 px-2 py-1 rounded-md">Contact</Link>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#00246B] shadow-lg rounded-lg mt-2">
          <Link href="/" className="block px-4 py-2 text-white hover:text-[#CADCFC] transition duration-300 transform hover:scale-105 rounded-lg">Home</Link>
          <Link href="/about" className="block px-4 py-2 text-white hover:text-[#CADCFC] transition duration-300 transform hover:scale-105 rounded-lg">About</Link>
          <Link href="/contact" className="block px-4 py-2 text-white hover:text-[#CADCFC] transition duration-300 transform hover:scale-105 rounded-lg">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
