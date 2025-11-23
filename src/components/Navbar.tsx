"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href:any, name:any) => {
    setActiveSection(name.toLowerCase());
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50 shadow-lg shadow-purple-500/5' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
              className="group flex items-center gap-2"
              onClick={() => handleNavClick('#home', 'Home')}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center font-bold text-white transition-transform group-hover:scale-110">
                  <span className="text-xl">Y</span>
                </div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
              </div>
              <span className="text-xl font-bold text-white hidden sm:block">
                Your<span className="text-purple-400">Name</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href, item.name)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative group ${
                    activeSection === item.name.toLowerCase()
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all ${
                      activeSection === item.name.toLowerCase()
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              ))}
            </div>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:block">
              <button className="group relative px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium text-white text-sm overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="flex flex-col gap-2 py-4 border-t border-slate-800">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href, item.name)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.name.toLowerCase()
                      ? 'text-white bg-slate-800 border-l-4 border-purple-500'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              
              <button className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium text-white text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all">
                <Download className="w-4 h-4" />
                Download Resume
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20" />
    </>
  );
}