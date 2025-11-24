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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: any, name: any) => {
    setActiveSection(name.toLowerCase());
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${
          isScrolled 
            ? 'bg-slate-950/90 backdrop-blur-xl   shadow-lg shadow-purple-500/5' 
            : 'bg-slate-950/50 backdrop-blur-sm'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
              className="group flex items-center gap-2 relative z-50"
              onClick={() => handleNavClick('#home', 'Home')}
            >
              <div className="relative">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center font-bold text-white transition-transform group-hover:scale-110">
                  <span className="text-lg sm:text-xl">Y</span>
                </div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
              </div>
              <span className="text-lg md:text-xl font-bold text-white  sm:block">
                Ali<span className="text-purple-400"> Wajdan</span>
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
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all relative z-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Slide-in Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-slate-950/95 backdrop-blur-xl border-l border-slate-800/50 z-40 transition-transform duration-500 ease-out md:hidden shadow-2xl shadow-purple-500/10 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu Content */}
        <div className="flex flex-col h-full pt-24 pb-8 px-6">
          {/* Navigation Items */}
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href, item.name)}
                className={`group px-5 py-4 rounded-xl text-base font-medium transition-all duration-300 ${
                  activeSection === item.name.toLowerCase()
                    ? 'text-white bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                  opacity: isMobileMenuOpen ? 1 : 0
                }}
              >
                <div className="flex items-center justify-between">
                  <span>{item.name}</span>
                  {activeSection === item.name.toLowerCase() && (
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                  )}
                </div>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="my-6 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          {/* Resume Button */}
          <button 
            className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-medium text-white text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              transitionDelay: isMobileMenuOpen ? '250ms' : '0ms',
              transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)',
              opacity: isMobileMenuOpen ? 1 : 0
            }}
          >
            <Download className="w-4 h-4" />
            Download Resume
          </button>

          {/* Decorative Element */}
          <div className="mt-auto">
            <div className="relative h-32 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-xl" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-slate-400 text-xs mb-1">Let's build something</p>
                  <p className="text-white font-semibold text-sm">amazing together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from going under fixed header */}
      {/* <div className="h-16 sm:h-10" /> */}
    </>
  );
}