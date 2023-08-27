"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const { data: session } = useSession();
  const handleNav = () => {
    if (menu) {
      setMenu(menu);
    }
    setMenu(!menu);
  };
  return (
    <header className=" flex items-center justify-between h-20 font-bold px-4">
      <Link href="/">
        <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
      </Link>
      <div className="flex gap-6 items-center">
        <div className="hidden md:block font-medium">
          <Link
            className=" bg-blue-300 hover:bg-blue-200  rounded-2xl shadow-xl py-2 px-6"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </div>
        {session ? (
          <div className="hidden md:block font-medium">
            <button
              className=" bg-red-300 hover:bg-red-200  rounded-2xl shadow-xl py-2 px-6"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="hidden md:block font-medium">
            <Link
              className=" bg-blue-300 hover:bg-blue-200  rounded-2xl shadow-xl py-2 px-6"
              href={"/login"}
            >
              sign In
            </Link>
          </div>
        )}
      </div>

      {/* Menu Icon */}
      <div className="block md:hidden cursor-pointer z-10">
        {menu ? (
          <AiOutlineClose size={25} onClick={handleNav} />
        ) : (
          <AiOutlineMenu size={25} onClick={handleNav} />
        )}
      </div>

      {/* Mobile menu */}
      <div
        className={
          menu
            ? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[100%]  ease-in duration-300 z-10 bg-[#d9e8f3]"
            : "fixed left-[-100%] top-20 h-[100%] flex flex-col items-center justify-between ease-in duration-300 bg-[#d9e8f3]"
        }
      >
        <ul className="w-full p-4">
          <li onClick={handleNav} className="border-b py-6  font-medium">
            <Link
              href="/dashboard"
              className="w-full my-2 p-3 flex justify-center  bg-blue-300 hover:bg--200 border  rounded-2xl shadow-xl"
            >
              Dashboard
            </Link>
          </li>
          {session ? (
            <li onClick={handleNav} className="border-b py-6">
              <button
                onClick={() => signOut()}
                className="w-full my-2 p-3 bg-red-300 hover:bg-red-200 border  rounded-2xl shadow-xl font-medium"
              >
                Logout
              </button>
            </li>
          ) : (
            <li onClick={handleNav} className="border-b py-6">
              <Link href={"/login"}>
                <button
                  onClick={handleNav}
                  className="w-full my-2 p-3  bg-blue-300 hover:bg--200 border  rounded-2xl shadow-xl"
                >
                  Sign In
                </button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
