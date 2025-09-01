import React, { useState, useEffect } from "react";
import { NAV_LINKS } from "../constants";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary/80 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold text-light hover:text-accent transition-colors"
        >
          Hermawan Sutanto
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-medium hover:text-accent transition-colors duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-block bg-accent text-primary font-bold py-2 px-6 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105"
        >
          Hubungi Saya
        </a>
        {/* Mobile menu button can be added here if needed */}
      </div>
    </header>
  );
};

export default Header;
