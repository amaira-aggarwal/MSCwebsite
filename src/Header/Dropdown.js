import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left ">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-white-300 shadow-sm px-4 py-2 bg-[#041e55] text-sm font-medium text-white-700 hover:bg-white-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="options-menu"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          &#9776;
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#041e55] ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <a
              href="/"
              className="block px-4 py-2 text-sm text-white-700 hover:bg-white-100"
              role="menuitem"
            >
              Home
            </a>
            <a
              href="/events"
              className="block px-4 py-2 text-sm text-white-700 hover:bg-white-100"
              role="menuitem"
            >
              Events
            </a>
            <a
              href="/team"
              className="block px-4 py-2 text-sm text-white-700 hover:bg-white-100"
              role="menuitem"
            >
              Team
            </a>
            <a
              href="/contact"
              className="block px-4 py-2 text-sm text-white-700 hover:bg-white-100"
              role="menuitem"
            >
              Contact Us
            </a>
            <a
              href="/faq"
              className="block px-4 py-2 text-sm text-white-700 hover:bg-white-100"
              role="menuitem"
            >
              FAQ
            </a>
            <a
              href="/blog"
              className="block px-4 py-2 text-sm text-white-700 hover:bg-white-100"
              role="menuitem"
            >
              Blog
            </a>
            <form method="POST" action="#" role="none">
              <button
                type="submit"
                className="block w-full text-left px-4 py-2 text-sm text-white-700 hover:bg-white-100"
                role="menuitem"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
