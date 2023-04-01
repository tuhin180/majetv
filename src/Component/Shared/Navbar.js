import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = (
    <React.Fragment>
      <li className="mr-10">
        <a href="/">Home</a>
      </li>
      <li className="mr-10">
        <a href="#">Program</a>
      </li>
      <li className="mr-10">
        <a href="#">Blog</a>
      </li>
      <li className="mr-10">
        <a href="#">About us</a>
      </li>
      <li className="mr-10">
        <a
          className="text-white bg-[#264373] py-[8px] px-6 rounded-xl hover:bg-black focus:outline-none focus:ring focus:ring-violet-300"
          href="#"
        >
          Login
        </a>
      </li>
    </React.Fragment>
  );
  return (
    <>
      <nav className="p-4 flex justify-between shadow-lg ">
        <div>
          <p className=" ml-4 text-2xl font-sportingG text-[#6765F0] cursor-pointer">
            <span className="   text-rose-700 font-bold">Maje</span>
            Tv
          </p>
        </div>
        <div className="hidden md:block">
          <ul className="font-poppins text-base flex justify-between">
            {menuItems}
          </ul>
        </div>
        <div className="mr-5 flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ul className="ml-8 mt-10 font-poppins">
          <li>
            <a href="#">Home</a>
          </li>
          <li className="mt-4">
            <a href="#">Program</a>
          </li>
          <li className="mt-4">
            <a href="#">Blog</a>
          </li>
          <li className="mt-4">
            <a href="#">About us</a>
          </li>
          <li className="mt-7">
            <li className="mr-10">
              <a
                className="text-white bg-[#264373] py-[8px] px-6 rounded-xl hover:bg-black focus:outline-none focus:ring focus:ring-violet-300"
                href="#"
              >
                Login
              </a>
            </li>
          </li>
        </ul>
      </Transition>
    </>
  );
};

export default Navbar;
