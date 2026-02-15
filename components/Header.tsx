import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LogoGlassExport } from './BrandLogos';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Brands', href: '#brands' },
    { name: 'Locations', href: '#locations' },
    { name: 'Process', href: '#process' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-[#050505]/90 backdrop-blur-md border-white/10 py-4' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Container - White background, moved further left with -ml-6 */}
        <a href="#" className="flex items-center group -ml-6">
            <div className="bg-white px-2 py-1 rounded shadow-lg shadow-white/5 border border-white/10 flex items-center justify-center">
              <div className="w-44 h-14 flex items-center justify-center">
                <LogoGlassExport className="w-full h-full" mode="color" />
              </div>
            </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5491153329100"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-white text-black text-sm font-semibold hover:bg-[#3BA7FF] hover:text-white transition-colors duration-300"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0B0F14] border-b border-white/10 p-6 flex flex-col space-y-4 md:hidden">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white/80 hover:text-white py-2 block"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
           <a 
            href="https://wa.me/5491153329100"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-3 bg-[#3BA7FF] text-white font-bold mt-4 block"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
};
