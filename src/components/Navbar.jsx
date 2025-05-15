'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/education', label: 'Education' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#011627]/80 backdrop-blur-md py-2.5' : 'bg-[#011627] py-3.5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-11">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-1 group relative py-1.5"
            >
              <div className="relative w-8 h-8 flex items-center justify-center">

              </div>
              <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#00B4D8] to-[#48cae4] relative group">
                Asraful Islam

                {/* Default thin underline */}
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00B4D8]/50 to-transparent"></span>

                {/* Hover animated thick underline from center */}
                <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#00B4D8]/50 to-transparent transition-all duration-300 ease-out group-hover:w-full group-hover:left-0 group-hover:h-[2px] group-hover:translate-x-0 transform -translate-x-1/2"></span>
              </span>


            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative"
              >
                <span className={`${pathname === link.href
                  ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#00B4D8] to-[#48cae4] font-semibold'
                  : 'text-[#94a3b8] hover:text-[#e2e8f0] font-medium'
                  } transition-colors duration-300`}>
                  {link.label}
                </span>

                {/* Only show default underline for active item */}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00B4D8]/50 to-transparent"></span>
                )}

                {/* Hover animated underline */}
                <span className={`absolute -bottom-1 left-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent ${pathname === link.href
                  ? 'via-[#00B4D8]/50'
                  : 'via-[#e2e8f0]/50'
                  } to-transparent transition-all duration-300 ease-out group-hover:w-full group-hover:left-0 group-hover:h-[2px] group-hover:translate-x-0 transform -translate-x-1/2`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <div className="space-y-2">
              <span className={`block w-8 h-0.5 bg-[#00B4D8] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-[#00B4D8] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-[#00B4D8] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden overflow-hidden ${isMenuOpen ? 'mt-4' : ''}`}
        >
          <div className="py-2 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg transition-all duration-300 ${pathname === link.href
                  ? 'text-[#00B4D8] bg-white/5'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav >
  );
};

export default Navbar;