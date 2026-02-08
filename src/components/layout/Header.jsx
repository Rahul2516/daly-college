





import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdEmail, MdCall, MdMenu, MdClose } from 'react-icons/md';
import { HiArrowRight } from 'react-icons/hi'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'History', path: '/history' },
    { name: 'Admission', path: '/admission' },
    { name: 'Academics', path: '/academics' },
    { name: 'Career & College Guidance', path: '/career' },
    { name: 'Pastoral Care', path: '/pastoral-care' },
    { name: 'Activities', path: '/activities' },
    { name: 'Round Square', path: '/round-square' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const textColorClass = isScrolled ? 'text-gray-800' : 'text-white';
  const iconHoverClass = isScrolled ? 'hover:text-dc-red' : 'hover:text-gray-200';

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? ' backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="mx-auto px-6 flex justify-between items-center">
          
          {/* ACCESSIBILITY FIX: Added aria-label to Logo Link */}
          <Link to="/" className="flex items-center gap-4 group" aria-label="Daly College Home">
            <div className="bg-white p-2 rounded-sm"> 
              <img 
                src="https://www.dalycollege.org/images/logo.png" 
                alt="Daly College Crest" 
                className="h-12 md:h-14 items-start" 
              />
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <div className={`hidden xl:flex items-center gap-6 text-sm md:text-base font-medium tracking-wide transition-colors duration-300 ${textColorClass}`}>
              <a href="mailto:contact@dalycollege.org" className={`flex items-center gap-2 transition-colors ${iconHoverClass}`}>
                <MdEmail className="text-lg" /> 
                <span>contact@dalycollege.org</span>
              </a>
              <a href="tel:+9107312719000" className={`flex items-center gap-2 transition-colors ${iconHoverClass}`}>
                <MdCall className="text-lg" /> 
                <span>+91 (0731) 2719000</span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <button className="hidden sm:flex items-center gap-2 bg-dc-red text-white px-5 py-2.5 rounded-sm hover:bg-red-700 transition-all shadow-md font-bold text-xs uppercase tracking-wider">
                <HiArrowRight className="text-sm" /> 
                <span>ERP Login</span>
              </button>

              {/* ACCESSIBILITY FIX: Added aria-label="Toggle Menu" */}
              <button 
                className={`text-3xl transition-colors duration-300 p-1 ${textColorClass} hover:text-dc-red`}
                onClick={() => setIsMenuOpen(true)}
                aria-label="Toggle Menu"
              >
                <MdMenu />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div 
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`absolute top-0 right-0 h-full w-[300px] md:w-[400px] shadow-2xl transform transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-8 border-b border-gray-100">
            <span className="text-xl font-serif font-bold text-slate-100">Menu</span>
            {/* ACCESSIBILITY FIX: Added aria-label="Close Menu" */}
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close Menu" className="text-2xl text-slate-100 hover:text-dc-red transition-colors">
              <MdClose />
            </button>
          </div>
          <nav className="p-8 overflow-y-auto h-[calc(100%-80px)]">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="block text-lg font-medium text-slate-100 hover:text-dc-red hover:pl-2 transition-all duration-200 border-b border-gray-50 pb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;