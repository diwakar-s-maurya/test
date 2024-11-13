// src/components/Header/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigationItems = [
    {
      name: 'About Us',
      path: '/about-us',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Our Story', path: '/about-us/our-story' },
        { name: 'Mission', path: '/about-us/mission' },
        // Add more dropdown items as needed
      ],
    },
    {
      name: 'What We Do',
      path: '/what-we-do',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Services', path: '/what-we-do/services' },
        { name: 'Solutions', path: '/what-we-do/solutions' },
        // Add more dropdown items as needed
      ],
    },
    { name: 'Portfolio', path: '/portfolio', hasDropdown: false },
    { name: 'Our Team', path: '/our-team', hasDropdown: false },
    { name: 'Blog & News', path: '/blog', hasDropdown: false },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/betagro-ventures-logo.png"
              alt="Betagro Ventures Logo"
              className="h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-green-700"
                  onClick={() => item.hasDropdown && toggleDropdown(item.name)}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <FontAwesomeIcon 
                      icon={faChevronDown}
                      className="h-3 w-3 ml-1"
                    />
                  )}
                </button>
                
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Link
              to="/contact-us"
              className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            {navigationItems.map((item) => (
              <div key={item.name} className="py-2">
                <button
                  className="w-full text-left px-4 py-2 text-gray-700 hover:text-green-700"
                  onClick={() => item.hasDropdown && toggleDropdown(item.name)}
                >
                  <div className="flex justify-between items-center">
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <FontAwesomeIcon 
                        icon={faChevronDown}
                        className={`h-3 w-3 transform transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </div>
                </button>
                
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="bg-gray-50 py-2">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="block px-8 py-2 text-sm text-gray-700 hover:text-green-700"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Link
              to="/contact-us"
              className="block mx-4 my-2 text-center bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;