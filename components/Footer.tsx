import React from 'react';
import { Phone, Mail, Clock, Facebook, Instagram, Video, MessageCircle, MapPin } from 'lucide-react';
import { ViewState } from '../types';

interface FooterProps {
  setView: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ setView }) => {
  const contactNumber1 = "+92 355 5426849";
  const contactNumber2 = "+92 355 5471000";
  const email = "mujahidtalha58@gmail.com";
  const locationUrl = "https://www.google.com/maps/search/9V48%2B227+army+public+school+eidgah+astore,+Astore";

  const openWhatsApp = (number: string) => {
    const cleanNum = number.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNum}`, '_blank');
  };

  const handleNavClick = (view: ViewState) => {
    setView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-slate-300 border-t border-slate-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-white">AL Mujahid Quetta <span className="text-brand-gold">Caffe Resturant</span></h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              A blend of traditional Quetta taste and modern luxury. Come for the tea, stay for the experience.
            </p>
            <div className="flex space-x-4 pt-2">
              <button className="text-slate-400 hover:text-brand-gold transition-colors"><Facebook size={20} /></button>
              <button className="text-slate-400 hover:text-brand-gold transition-colors"><Instagram size={20} /></button>
              <button className="text-slate-400 hover:text-brand-gold transition-colors"><Video size={20} /></button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNavClick(ViewState.MENU)} className="hover:text-brand-gold transition-colors text-left">
                  Digital Menu
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick(ViewState.MENU)} className="hover:text-brand-gold transition-colors text-left">
                  Special Offers
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick(ViewState.GALLERY)} className="hover:text-brand-gold transition-colors text-left">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick(ViewState.CONTACT)} className="hover:text-brand-gold transition-colors text-left">
                  Reserve Table
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-primary mt-0.5 min-w-[18px]" />
                <a 
                  href={locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  9V48+227 army public school eidgah astore, Astore
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand-primary mt-0.5 min-w-[18px]" />
                <a href={`mailto:${email}`} className="hover:text-white break-all">{email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-primary min-w-[18px]" />
                <a href={`tel:${contactNumber1}`} className="hover:text-white">{contactNumber1}</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-green-500 min-w-[18px]" />
                <button onClick={() => openWhatsApp(contactNumber1)} className="hover:text-white text-left">WhatsApp (Primary)</button>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-green-500 min-w-[18px]" />
                <button onClick={() => openWhatsApp(contactNumber2)} className="hover:text-white text-left">WhatsApp (Secondary)</button>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Opening Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span>Monday - Sunday</span>
                <span className="text-brand-gold font-bold">24 Hours Open</span>
              </li>
              <li className="pt-2 text-xs text-slate-400">
                We are ready to serve you anytime, day or night.
              </li>
            </ul>
            <div className="mt-4 p-3 bg-brand-primary/10 border border-brand-primary/20 rounded-lg flex items-center gap-2">
              <Clock size={16} className="text-brand-primary" />
              <span className="text-xs text-brand-primary font-semibold">Open Now</span>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#000208] py-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} AL Mujahid Quetta Caffe Resturant. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};