"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  // 1. SCROLL EFFECTS & ACTIVE SECTION TRACKING
  useEffect(() => {
    const handleScroll = () => {
      // Handle header shrink/shadow on scroll
      setIsScrolled(window.scrollY > 20);

      // Handle active section tracking
      let currentActive = 'home';
      navItems.forEach(item => {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.getBoundingClientRect().top;
          // Check if section is currently visible near the top of the viewport
          if (top <= 100 && top > -section.clientHeight + 200) {
            currentActive = item.name.toLowerCase();
          }
        }
      });
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);


  // 2. SMOOTH SCROLL FUNCTIONALITY
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Calculate scroll position, adjusting for the fixed header height
      const offsetTop = targetElement.offsetTop - (isScrolled ? 70 : 80); 
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(name.toLowerCase());
      setIsMobileMenuOpen(false); // Close mobile menu
    }
  };

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


  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-slate-950/90 backdrop-blur-xl border-slate-800/80 shadow-lg shadow-purple-500/5' 
            : 'bg-slate-950/50 backdrop-blur-sm border-transparent' // Subtler initial state
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo (Refined) */}
            <a 
              href="#home" 
              className="group flex items-center gap-2 relative z-50"
              onClick={(e) => handleSmoothScroll(e, '#home', 'Home')}
              aria-label="Ali Wajdan Home"
            >
              <div className="relative">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center font-bold text-white transition-transform group-hover:scale-110">
                  <span className="text-lg sm:text-xl">AW</span> {/* Use initials */}
                </div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
              </div>
              <span className="text-lg md:text-xl font-bold text-white tracking-wider sm:block">
                Ali<span className="text-purple-400"> Wajdan</span>
              </span>
            </a>

            {/* Desktop Navigation (Premium UI) */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href, item.name)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all relative group overflow-hidden
                    ${activeSection === item.name.toLowerCase()
                      ? 'text-white bg-slate-800/60' // Active pill background
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/30' // Hover background
                    }
                  `}
                >
                  {item.name}
                  {/* Glowing Bottom Indicator */}
                  <span 
                    className={`absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300 
                      ${activeSection === item.name.toLowerCase()
                        ? 'w-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_10px_rgba(168,85,247,0.7)]' // Active glow
                        : 'w-0 group-hover:w-full group-hover:bg-purple-500/50' // Hover glow
                      }
                    `}
                  />
                </a>
              ))}
            </div>

            {/* CTA Button (Desktop) */}
            <a href='/aliwajdan-cv.pdf' download className="hidden md:block" aria-label="Download Resume">
              <button className="group relative px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium text-white text-sm overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-4 h-4"/>
                  Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all relative z-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
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

      {/* Mobile Slide-in Menu (Already Premium-looking) */}
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
                onClick={(e) => handleSmoothScroll(e, item.href, item.name)}
                className={`group px-5 py-4 rounded-xl text-base font-medium transition-all duration-300 ${
                  activeSection === item.name.toLowerCase()
                    ? 'text-white bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
                style={{
                  // Removed inline styles for transition delay to simplify and improve performance
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
          <a href='/aliwajdan-cv.pdf' download
            className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-medium text-white text-base flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>

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
    </>
  );
}