import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-dark w-full h-auto lg:h-[452px] pt-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:w-full w-[90%] mx-auto lg:mx-0">
          <div>
            <h1 className="text-white py-4">CATEGORIES</h1>
            <ul className="text-[#B6BDC4] text-[13px] ">
              <li className="pt-4 ">
                <Link href="#">Web Builder</Link>
              </li>

              <li className="pt-4 ">
                <Link href="#">Hosting</Link>
              </li>

              <li className="pt-4 ">
                <Link href="#">Data Center</Link>
              </li>

              <li className="pt-4 ">
                <Link href="#">Robotic-Automation</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-white py-4">CONTACT</h1>
            <ul className="text-[#B6BDC4] text-[13px]">
              <li className="pt-4 ">
                <Link href="#">Contact</Link>
              </li>

              <li className="pt-4 ">
                <Link href="#">Privacy policy</Link>
              </li>

              <li className="pt-4 ">
                <Link href="#">Terms Of Service</Link>
              </li>

              <li className="pt-4 ">
                <Link href="#">Categories</Link>
              </li>

              <li className="pt-4 ">
                <Link href="#">About</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-gray-300 text-[13px] py-4 pt-16 flex gap-4 cursor-pointer">
              United States <FaChevronDown className="text-gray-200" />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
