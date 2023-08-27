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
  return (
    <footer className="bg-[#070439] text-[#bfbfbf] py-24 px-6">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-2">
          <Image src="/logoFooter.svg" alt="/" width={60} height={60} />
          <div className="flex gap-1 items-center">
            <FaPhoneVolume />
            <p>Phone: +1-543-123-4567</p>
          </div>
          <div className="flex gap-1 items-center">
            <AiOutlineMail />
            <p class="footer-p">example@fylo.com</p>
          </div>
        </div>
        <ul className="flex flex-col gap-2">
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Jobs</li>
          <li className="cursor-pointer"> Press</li>
          <li className="cursor-pointer">Blog </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="cursor-pointer">Contact Us</li>
          <li className="cursor-pointer">Terms</li>
          <li className="cursor-pointer"> Privacy </li>
        </ul>
        <div className="flex gap-4">
          <FaFacebook className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
