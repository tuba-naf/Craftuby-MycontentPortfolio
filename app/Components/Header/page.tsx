"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component from next/image
import {
  FaHome,
  FaInfoCircle,
  FaPen,
  FaTrophy,
  FaFeather,
  FaBars,
  FaTimes,
} from "react-icons/fa"; // Importing relevant icons

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="font-[Arial]">
      {/* Top Navbar */}
      <nav className="flex items-center justify-between px-16 py-4 bg-black text-white shadow-md">
        <div className="flex items-center ml-8">
          <Image
            src="/image/TNsig.jpg" // Make sure this path is correct
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-white"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul className="hidden md:flex items-center justify-between gap-14 text-sm ">
          <li>
            <Link href="/.">
              <span className="flex items-center space-x-2">
                <FaHome size={16} />
                <span>Home</span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/Components/About">
              <span className="flex items-center space-x-2">
                <FaInfoCircle size={16} />
                <span>About</span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/Components/FArticle">
              <span className="flex items-center space-x-2">
                <FaPen size={16} />
                <span>Articles</span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/Components/FPoetry">
              <span className="flex items-center space-x-2">
                <FaFeather size={16} />
                <span>Poetry</span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/Components/FSuccess">
              <span className="flex items-center space-x-2">
                <FaTrophy size={16} />
                <span>Success Stories</span>
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white">
          <ul className="flex flex-col items-start p-4 space-y-4">
            <li>
              <Link href="/." onClick={toggleMenu}>
                <span className="flex items-center space-x-2">
                  <FaHome size={16} />
                  <span>Home</span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/Components/About" onClick={toggleMenu}>
                <span className="flex items-center space-x-2">
                  <FaInfoCircle size={16} />
                  <span>About</span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/Components/FArticle" onClick={toggleMenu}>
                <span className="flex items-center space-x-2">
                  <FaPen size={16} />
                  <span>Articles</span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/Components/FPoetry" onClick={toggleMenu}>
                <span className="flex items-center space-x-2">
                  <FaFeather size={16} />
                  <span>Poetry</span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/Components/FSuccess" onClick={toggleMenu}>
                <span className="flex items-center space-x-2">
                  <FaTrophy size={16} />
                  <span>Success Stories</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
