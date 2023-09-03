'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowActions, setShouldShowActions] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentYPos = window.scrollY;

      // Check if we are scrolling up or if we haven't scrolled down much
      if (currentYPos < lastYPos || currentYPos < window.innerHeight / 10) {
        setShouldShowActions(true);
      } else {
        setShouldShowActions(false);
      }

      setLastYPos(currentYPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastYPos]);

  return (
    <AnimatePresence>
      {shouldShowActions && (
        <motion.header
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6 }}
          className="flex w-full items-center bg-white border-b-2 border-black fixed z-50"
        >
          <div className="container mx-auto">
            <div className="relative -mx-4 flex items-center justify-between">
              <div className="w-60 max-w-full px-4">
                <a
                  href="/"
                  className="block w-full py-5"
                >
                  <Image
                    src="/images/logo.svg"
                    width={100}
                    height={60}
                    alt="Logo"
                  />
                </a>
              </div>
              <div className="flex w-full items-center justify-between px-4">
                <div>
                  <button
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${
                      navbarOpen ? 'navbarTogglerActive' : ''
                    }`}
                    id="navbarToggler"
                  >
                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                  </button>
                  <nav
                    className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                      navbarOpen ? '' : 'hidden'
                    }`}
                    id="navbarCollapse"
                  >
                    <ul className="block lg:flex">
                      <li>
                        <a
                          href="/"
                          className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                        >
                          Payment
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-12 lg:inline-flex"
                        >
                          Features
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                  <Link
                    href="/"
                    className="bg-black py-2 px-8 text-base font-medium text-white hover:bg-opacity-90"
                  >
                    Call Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
