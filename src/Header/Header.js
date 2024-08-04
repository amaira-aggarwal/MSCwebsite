import React from "react";
import MSC_Logo from "./MSC_Logo.png";
import Dropdown from "./Dropdown";
import "./Search.css";

const Header = () => {
  return (
    <header className="sticky  top-0 w-full bg-[#041e55] shadow-md z-1000">
      <nav className="flex justify-between items-center p-5">
        <div className="logoheader flex space-x-3">
          <div>
            <img src={MSC_Logo} alt="MSC Logo" className="w-16" />
          </div>
          <div className="py-3">
            <p className="text-white justify-start text-xl">
              Microsoft Student Chapter IGDTUW
            </p>
          </div>
        </div>
        <input type="checkbox" id="menu-toggle" className="hidden" />
        <label
          htmlFor="menu-toggle"
          className="menu-icon text-white text-3xl cursor-pointer md:hidden"
        >
          &#9776;
        </label>

        <ul className="menu md:hidden flex flex-col bg-[#041e55] items-start absolute top-16 left-0 w-full transform scale-y-0 origin-top transition-transform duration-300 shadow-md">
          <li>
            <a
              href="/"
              className="block ml-3 mb-2 text-lg font-medium transition-opacity duration-200 ease-in-out hover:opacity-40 hover:text-white"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/events"
              className="block ml-3 mb-2 text-lg font-medium transition-opacity duration-200 ease-in-out hover:opacity-40 hover:text-white"
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="/team"
              className="block ml-3 mb-2 text-lg font-medium transition-opacity duration-200 ease-in-out hover:opacity-40 hover:text-white"
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="block ml-3 mb-2 text-lg font-medium transition-opacity duration-200 ease-in-out hover:opacity-40 hover:text-white"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="/faq"
              className="block ml-3 mb-2 text-lg font-medium transition-opacity duration-200 ease-in-out hover:opacity-40 hover:text-white"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className="block ml-3 mb-2 text-lg font-medium transition-opacity duration-200 ease-in-out hover:opacity-40 hover:text-white"
            >
              Blogs
            </a>
          </li>
        </ul>

        <ul className="menu hidden md:flex justify-center items-center space-x-4 text-white ">
          <li>
            <a
              href="https://mvp.microsoft.com/studentambassadors"
              className="block p-2.5 text-lg font-medium transition-opacity duration-200 ease-in-out hover:opacity-40 hover:text-white"
            >
              Become an MLSA Today
            </a>
          </li>
          <div className="flex justify-center items-center space-x-5 bg-blue z-[1000]">
            <form
              action=""
              className="relative bg-blue p-1.5 rounded-full border-4 border-blue search-form w-12 h-12"
            >
              <input
                type="search"
                placeholder="Search here ..."
                className="absolute top-0 left-0 w-full h-10 outline-none border-none rounded-full px-5 search-input"
              />
              <i
                className="fa fa-search text-purple-500 flex items-center justify-center rounded-full w-10 h-10 search-icon"
                aria-hidden="true"
              ></i>
            </form>
            <Dropdown />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
