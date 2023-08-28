import Image from "next/image";
import {
  FaPhoneVolume,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-[#070439] text-[#bfbfbf]  px-8 flex flex-col gap-3">
      <div className="flex flex-col md:flex-row justify-between gap-8 py-20">
        <div className="flex flex-col gap-4">
          <Image
            src="/logoFooter.svg"
            alt="/"
            width={60}
            height={60}
            className="cursor-pointer"
          />
          <div className="flex gap-1 items-center cursor-pointer hover:text-[#3065f8]">
            <FaPhoneVolume />
            <p>Phone: +2348078872240</p>
          </div>
          <div className="flex gap-1 items-center cursor-pointer hover:text-[#3065f8]">
            <AiOutlineMail size={25} />
            <a href="mailto:ayodelegamel@gmail.com" target="_blanket">
              ayodelegamel@gmail.com
            </a>
          </div>
        </div>
        <ul className="flex flex-col gap-2">
          <li className="cursor-pointer hover:text-[#3065f8]">About Us</li>
          <li className="cursor-pointer hover:text-[#3065f8]">Jobs</li>
          <li className="cursor-pointer hover:text-[#3065f8]"> Press</li>
          <li className="cursor-pointer hover:text-[#3065f8]">Blog </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="cursor-pointer hover:text-[#3065f8]">Contact Us</li>
          <li className="cursor-pointer hover:text-[#3065f8]">Terms</li>
          <li className="cursor-pointer hover:text-[#3065f8]"> Privacy </li>
        </ul>
        <div className="flex gap-4 ">
          <FaFacebook
            size={25}
            className="cursor-pointer hover:text-[#3065f8]"
          />
          <FaTwitter
            size={25}
            className="cursor-pointer hover:text-[#3065f8]"
          />
          <FaInstagram
            size={25}
            className="cursor-pointer hover:text-[#3065f8]"
          />
        </div>
      </div>
      <div className="text-center">
        <p>Copyright &copy; {year}. Gamel Ayodele</p>
      </div>
    </footer>
  );
};

export default Footer;
