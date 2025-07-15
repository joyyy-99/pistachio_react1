// components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/images/logo-image.png';
import dropdownIcon from '../assets/icons/dropdown-icon.png';
import darkModeIcon from '../assets/icons/dark-mode-icon.png';
import lightModeIcon from '../assets/icons/light-mode-icon.png';
import hamburgerIcon from '../assets/icons/hamburger-icon-menu.png';

export default function Navbar(props){
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-brand-light dark:bg-navbar-dark shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-4 py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logoImage} alt="Pistachio logo" className="h-16 w-16 md:h-20 md:w-20"/>
        </Link>

        {/* Desktop menu + theme-toggle */}
        <div className="flex-1 flex justify-center">
          <ul className="hidden md:flex items-center space-x-8 text-dark-font dark:text-white">
            <li>
              <Link
                to="/"
                className="hover:text-pistachio transition"
              >
                Home
              </Link>
            </li>
            <li className="relative group">
              <button className="flex items-center hover:text-pistachio transition">
                Menu <img src={dropdownIcon} className="ml-1 h-3" alt="⌄"/>
              </button>
              <ul className="absolute left-0 mt-2 w-44 rounded bg-white dark:bg-navbar-dark shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                {/* Removed "Full Menu" link */}
                <li>
                  <Link
                    to="/menu?tab=starters" // Link to MenuPage with 'starters' tab
                    className="block px-4 py-2 hover:text-pistachio"
                  >
                    Starters
                  </Link>
                </li>
                <li>
                  <Link
                    to="/menu?tab=main-courses" // Link to MenuPage with 'main-courses' tab
                    className="block px-4 py-2 hover:text-pistachio"
                  >
                    Mains
                  </Link>
                </li>
                <li>
                  <Link
                    to="/menu?tab=sides" // Link to MenuPage with 'sides' tab
                    className="block px-4 py-2 hover:text-pistachio"
                  >
                    Sides
                  </Link>
                </li>
                <li>
                  <Link
                    to="/menu?tab=desserts" // Link to MenuPage with 'desserts' tab
                    className="block px-4 py-2 hover:text-pistachio"
                  >
                    Desserts
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              {isHome ? (
                <a href="#story" className="hover:text-pistachio transition">Our Story</a>
              ) : (
                <Link to="/#story" className="hover:text-pistachio transition">Our Story</Link>
              )}
            </li>
            <li>
              {isHome ? (
                <a href="#feedback" className="hover:text-pistachio transition">Feedback</a>
              ) : (
                <Link to="/#feedback" className="hover:text-pistachio transition">Feedback</Link>
              )}
            </li>
          </ul>
        </div>

        <div className="md:flex items-center space-x-2 hidden">
          <button id="theme-toggle" onClick={props.toggleTheme} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <img src={props.isDarkMode ? lightModeIcon : darkModeIcon} className="h-5 w-5" alt="Toggle theme"/>
          </button>
        </div>

        {/* Mobile theme + menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <button id="theme-toggle-mobile" onClick={props.toggleTheme} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <img src={props.isDarkMode ? lightModeIcon : darkModeIcon} className="h-5 w-5" alt="Toggle theme"/>
          </button>
          <button id="mobile-menu-button" onClick={props.toggleMobileMenu} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <img src={hamburgerIcon} className="h-6 w-6" alt="Open menu"/>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className={`${props.isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-brand-light dark:bg-navbar-dark`}>
        <ul className="space-y-2 px-4 py-6 text-dark-font dark:text-white">
          <li>
            <Link
              to="/"
              onClick={props.toggleMobileMenu}
              className="block hover:text-pistachio"
            >
              Home
            </Link>
          </li>
          {/* Removed "Full Menu" link from mobile */}
          <li>
            <Link
              to="/menu?tab=starters" // Link to MenuPage with 'starters' tab for mobile
              onClick={props.toggleMobileMenu}
              className="block hover:text-pistachio"
            >
              Starters
            </Link>
          </li>
          <li>
            <Link
              to="/menu?tab=main-courses" // Link to MenuPage with 'main-courses' tab for mobile
              onClick={props.toggleMobileMenu}
              className="block hover:text-pistachio"
            >
              Main Courses
            </Link>
          </li>
          <li>
            <Link
              to="/menu?tab=sides" // Link to MenuPage with 'sides' tab for mobile
              onClick={props.toggleMobileMenu}
              className="block hover:text-pistachio"
            >
              Sides
            </Link>
          </li>
          <li>
            <Link
              to="/menu?tab=desserts" // Link to MenuPage with 'desserts' tab for mobile
              onClick={props.toggleMobileMenu}
              className="block hover:text-pistachio"
            >
              Desserts
            </Link>
          </li>
          <li>
            {isHome ? (
              <a href="#story" onClick={props.toggleMobileMenu} className="block hover:text-pistachio">Our Story</a>
            ) : (
              <Link to="/#story" onClick={props.toggleMobileMenu} className="block hover:text-pistachio">Our Story</Link>
            )}
          </li>
          <li>
            {isHome ? (
              <a href="#feedback" onClick={props.toggleMobileMenu} className="block hover:text-pistachio">Feedback</a>
            ) : (
              <Link to="/#feedback" onClick={props.toggleMobileMenu} className="block hover:text-pistachio">Feedback</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}