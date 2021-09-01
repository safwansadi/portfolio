import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Profile from "./Profile";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-900 opacity-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#aboutme"
                    className="no-underline hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    About me
                  </a>

                  {/*   <a
                    href="#"
                    className="no-underline hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Team
                  </a> */}

                  <a
                    href="#projects"
                    className="no-underline hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Projects
                  </a>

                       <a
                    href="#skills"
                    className="no-underline hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Skills
                  </a>

                    <a
                    href="#footer"
                    className="no-underline hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Contacts
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#aboutme"
                  className="no-underline hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About Me
                </a>

                {/*  <a
                  href="#"
                  className="no-underline text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a> */}

                <a
                  href="#projects"
                  className="no-underline text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="#skills"
                  className="no-underline text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Skills
                </a>

                   {/* <a
                  href="#"
                  className="no-underline text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </a> */}
              </div>
            </div>
          )}
        </Transition>
      </nav>

      <header id="aboutme" className="bg-red-50">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            <i>About me</i>
          </h1>
        </div>
      </header>
      <main className="bg-red-50">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          <div className="px-4 py-6 sm:px-0">
            <div>
              <Profile />
            </div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </div>
  );
}

export default Navigation;
