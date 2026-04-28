"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import LogoImg from "@/assets/logo.png";
import NavLink from "./NavLink";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const border = "border-1 border-gray-400 py-2 rounded-lg";

  return (
    <div className="border-b">
      <div className="flex justify-between items-center  py-4 px-4">
        {/* Logo / Left */}
        <div className="text-xl font-bold">
          <Image src={LogoImg} alt="Logo_img" width={50} height={50} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center font-bold text-[#797979]">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/all-photos">All Photo</NavLink>
          </li>
          <li>
            <NavLink href="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink href="/profiles">Profile</NavLink>
          </li>
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          {/* <Image src={avatar} alt="User" width={40} height={40} /> */}
          <Link href="/login">
            <button className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg px-3 py-2">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}

      <div className="md:hidden px-4 pb-4 space-y-4">
        <ul className="flex flex-col gap-3 font-bold shadow-lg text-[#797979]">
          <li className={`${border}`}>
            <NavLink href="/">Home</NavLink>
          </li>
          <li className={`${border}`}>
            <NavLink href="/all-photos">All Photo</NavLink>
          </li>
          <li className={`${border}`}>
            <NavLink href="/pricing">Pricing</NavLink>
          </li>
          <li className={`${border}`}>
            <NavLink href="/profiles">Profile</NavLink>
          </li>
        </ul>

        <div className="">
          <div className="flex flex-col gap-3">
            {/* <Image src={avatar} alt="User" width={40} height={40} /> */}
            <Link href="/login">
              <button className="btn btn bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg w-full py-2">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
