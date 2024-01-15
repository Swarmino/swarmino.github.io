import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="rounded-lg justify-center w-screen bg-black z-50">
      {/* Mobile Menu */}
      <div className="md:hidden fixed z-50 ">
        {!isMobileMenuOpen && (
          <button className="text-white p-2" onClick={toggleMobileMenu}>
            <FontAwesomeIcon style={{ height: 30 }} icon={faBars} className=' bg-muted p-6 rounded-full' />
          </button>
        )}
        <ul
          className={`${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500 ease-in-out bg-black/75 p-2 text-left h-screen w-fit text-4xl absolute top-0 left-0`}
        >
          <button className="text-white no-underline" onClick={toggleMobileMenu}>
            <FontAwesomeIcon style={{ height: 30 }} icon={faX} className='p-2' />
            </button>
          <li className="hover:text-primary">
            
          </li>
          <li className="hover:text-primary">
            <Link className="text-white no-underline" to="/">
              //Home
            </Link>
          </li>
          <li className="hover:text-primary">
            <Link className="text-white no-underline" to="/about">
              //About
            </Link>
          </li>
          <li className="hover:text-primary">
            <Link className="text-white no-underline" to="/projects">
              //Projects
            </Link>
          </li>
          <li className="hover:text-primary">
            <Link className="text-white no-underline" to="/contact">
              //Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex bg-gray-800">
        <li className="mr-4">
          <Link className="text-white no-underline hover:text-primary" to="/">
            Home
          </Link>
        </li>
        <li className="mr-4">
          <Link className="text-white no-underline hover:text-primary" to="/about">
            About
          </Link>
        </li>
        <li className="mr-4">
          <Link className="text-white no-underline hover:text-primary" to="/projects">
            Projects
          </Link>
        </li>
        <li className="mr-4">
          <Link className="text-white no-underline hover:text-primary" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;