import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import glassExportLogo from '../assets/logos/glass-export.png';
import { useLanguage } from '../i18n/LanguageContext';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.brands, href: '#brands' },
    { name: t.nav.locations, href: '#locations' },
    { name: t.nav.process, href: '#process' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-[#050505]/90 backdrop-blur-md border-white/10 py-4' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center group">
            <div className="bg-white rounded-lg shadow-lg shadow-white/5 border border-white/10 flex items-center justify-center px-4 py-2">
              <img src={glassExportLogo} alt="Glass Export" className="h-12 w-auto max-w-[200px] object-contain" />
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

          {/* Language Selector */}
          <div className="flex items-center space-x-1 text-sm">
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 rounded transition-colors ${lang === 'en' ? 'bg-[#3BA7FF] text-white font-bold' : 'text-white/50 hover:text-white'}`}
            >
              EN
            </button>
            <span className="text-white/30">|</span>
            <button
              onClick={() => setLang('es')}
              className={`px-2 py-1 rounded transition-colors ${lang === 'es' ? 'bg-[#3BA7FF] text-white font-bold' : 'text-white/50 hover:text-white'}`}
            >
              ES
            </button>
          </div>

          <a
            href="https://wa.me/5491153329100"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-white text-black text-sm font-semibold hover:bg-[#3BA7FF] hover:text-white transition-colors duration-300"
          >
            {t.nav.contactUs}
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

          {/* Mobile Language Selector */}
          <div className="flex items-center space-x-2 py-2">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded text-sm ${lang === 'en' ? 'bg-[#3BA7FF] text-white font-bold' : 'text-white/50 border border-white/10'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('es')}
              className={`px-3 py-1 rounded text-sm ${lang === 'es' ? 'bg-[#3BA7FF] text-white font-bold' : 'text-white/50 border border-white/10'}`}
            >
              ES
            </button>
          </div>

           <a
            href="https://wa.me/5491153329100"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-3 bg-[#3BA7FF] text-white font-bold mt-4 block"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.nav.contactUs}
          </a>
        </div>
      )}
    </header>
  );
};
