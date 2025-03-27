"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface MenuItem {
  href: string;
  label: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems: MenuItem[] = [
    { href: isHomePage ? "#HeroSection" : "/HeroSection", label: "Home" },
    { href: isHomePage ? "#about" : "/about", label: "About" },
    { href: isHomePage ? "#OurProducts" : "/OurProducts", label: "Products" },
    { href: isHomePage ? "#footer" : "/footer", label: "Contact" },
  ];

  // Function to handle smooth scrolling
  const handleSmoothScroll = (e: React.MouseEvent, targetId: string) => {
    // Only apply for anchor links on the home page
    if (isHomePage && targetId.startsWith("#")) {
      e.preventDefault();
      const sectionId = targetId.substring(1); // Remove the # character
      const section = document.getElementById(sectionId);

      if (section) {
        // Close mobile menu if it's open
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }

        // Smooth scroll to the section
        section.scrollIntoView({ behavior: "smooth" });

        // Optional: Add offset for fixed header
        window.scrollTo({
          top: section.offsetTop - 80, // Adjust value based on header height
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleMenu}
          >
            <motion.div
              className="fixed top-11 right-0 w-64 h-full bg-white shadow-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.3,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b flex justify-between items-center">
                <Link
                  href="/"
                  className="text-2xl font-bold text-logo-green-dark"
                >
                  <Image
                    src="/images/logo-1.png"
                    alt="HerbCey Logo"
                    width={120}
                    height={50}
                  />
                </Link>
                <button
                  onClick={toggleMenu}
                  className="text-text-dark focus:outline-none"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <motion.nav
                className="p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.3,
                }}
              >
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      duration: 0.3,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className="block py-3 text-xl text-text-dark hover:text-logo-green-dark transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.7,
                    duration: 0.3,
                  }}
                >
                  <Link
                    href="/cart"
                    onClick={toggleMenu}
                    className="py-3 text-xl text-text-dark hover:text-logo-green-dark transition-colors flex items-center"
                  >
                    Cart
                  </Link>
                </motion.div>
              </motion.nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header */}
      <header className="bg-white shadow-sm flex justify-center sticky top-0 z-40">
        <div className="container px-4 py-3 flex justify-between items-center w-full">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-logo-green-dark">
            <Image
              src="/images/logo-1.png"
              alt="HerbCey Logo"
              width={120}
              height={50}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-text-dark pb-1 relative 
                  after:content-[''] 
                  after:absolute 
                  after:bottom-0 
                  after:left-0 
                  after:w-0 
                  after:h-0.5 
                  after:bg-[#00bf63] 
                  after:transition-all 
                  after:duration-300 
                  hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-text-dark focus:outline-none"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
