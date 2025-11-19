import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-victory-green text-white' : 'bg-white text-victory-green'}`}>
                <UtensilsCrossed size={24} />
              </div>
              <div className="flex flex-col">
                <span className={`font-serif text-xl font-bold tracking-wide ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                  VICTORY
                </span>
                <span className={`text-xs uppercase tracking-widest ${isScrolled ? 'text-victory-green' : 'text-gray-200'}`}>
                  Garden Café
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-victory-gold ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservations"
              className={`px-6 py-2 rounded-sm font-bold uppercase text-sm transition-all transform hover:scale-105 ${
                isScrolled 
                  ? 'bg-victory-green text-white hover:bg-opacity-90' 
                  : 'bg-white text-victory-green hover:bg-gray-100'
              }`}
            >
              Book Table
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-gray-100 py-4 px-6 flex flex-col space-y-4 animate-fade-in-down">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-800 font-medium hover:text-victory-green"
            >
              {link.label}
            </a>
          ))}
          <a
             href="#reservations"
             onClick={() => setMobileMenuOpen(false)}
             className="bg-victory-green text-white text-center py-3 rounded-sm font-bold"
          >
            Book a Table
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;