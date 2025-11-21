import React, { useState } from 'react';
import { Coffee, Menu, X, Phone, ShoppingBag } from 'lucide-react';
import { ViewState } from '../types';

interface NavbarProps {
  setView: (view: ViewState) => void;
  activeView: ViewState;
}

export const Navbar: React.FC<NavbarProps> = ({ setView, activeView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', value: ViewState.HOME },
    { label: 'About', value: ViewState.ABOUT },
    { label: 'Digital Menu', value: ViewState.MENU },
    { label: 'Gallery', value: ViewState.GALLERY },
    { label: 'Contact', value: ViewState.CONTACT },
  ];

  const handleNavClick = (view: ViewState) => {
    setView(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-md text-white shadow-lg border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick(ViewState.HOME)}
          >
            <div className="bg-brand-gold/20 p-2 rounded-full border border-brand-gold/50 group-hover:scale-110 transition-transform">
              <Coffee className="h-8 w-8 text-brand-gold" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-wider text-brand-gold">Talha Mujahid</span>
              <span className="text-xs uppercase tracking-[0.2em] text-gray-300">Quetta Caffe</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.value)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-brand-gold ${
                  activeView === link.value ? 'text-brand-gold border-b-2 border-brand-gold pb-1' : 'text-gray-200'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick(ViewState.CONTACT)}
              className="bg-brand-primary hover:bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center gap-2"
            >
              <Phone size={16} /> Reserve
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-200 hover:text-brand-gold p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-dark border-t border-gray-800 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.value)}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium ${
                  activeView === link.value ? 'bg-gray-800 text-brand-gold' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};