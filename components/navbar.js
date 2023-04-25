import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function navbar() {
  function handleClick() {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  return (
    <div className="pt-10 sticky top-0 backdrop-blur-sm">
      <nav className=" px-8 py-4 flex justify-between items-center border-y border-gray-400 dark:border-gray-700 bg-gray-100/40">
        <Link href="/blogposts/jkak">
          <div className="text-3xl font-bold leading-none flex items-center space-x-4">
            <span className="text-gray-800 dark:text-gray-300 text-xl">
              {" "}
              CodeBlox
            </span>
          </div>
        </Link>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-gray-600 dark:text-gray-300 p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden lg:flex lg:items-center lg:justify-end grow mr-4">
          <li>
            <Link

              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-4 py-2"
              href="/" legacyBehavior
            >
              <a onClick={handleClick} >
              Home
              </a>
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-4 py-2"
              href="/about"
            >
                 About
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-4 py-2"
              href="/blogs"
            >
              Blogs
            </Link>
          </li>

          <li>
            <div className="relative flex ">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                className="py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 dark:bg-gray-800 rounded-md focus:outline-none focus:bg-white focus:text-gray-900"
                placeholder="Search"
              />
              <Image
                src="/icons/moon.png"
                alt="Picture of the author"
                id="darkModeMoon"
                className="w-5 h-5 self-center ms-3 cursor-pointer"
                width={500}
                height={500}
              />
              <Image
                src="/icons/sun.png"
                alt="Picture of the author"
                id="darkModeSun"
                className=" w-7 h-7 self-center ms-3 cursor-pointer"
                width={500}
                height={500}
              />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
