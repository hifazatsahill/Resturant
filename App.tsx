import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Sidebar } from './components/Sidebar';
import { MenuSlider } from './components/MenuSlider';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { ViewState } from './types';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [contactMessage, setContactMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // "Direct on main objective": Handle quick order from slider or sidebar
  const handleQuickOrder = (itemName?: string) => {
    setContactMessage(itemName || '');
    setView(ViewState.CONTACT);
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col relative text-slate-200">
      {/* Header */}
      <Navbar setView={setView} activeView={view} />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 relative">
        
        {/* Desktop Sidebar is fixed on the right side */}
        <div className="hidden md:block">
           <Sidebar onItemClick={handleQuickOrder} />
        </div>
        
        {/* Also render sidebar for mobile */}
        <div className="md:hidden">
           <Sidebar onItemClick={handleQuickOrder} />
        </div>

        {/* Content Wrapper - Needs right margin on desktop to accommodate sidebar */}
        <main className="flex-1 md:mr-64 lg:mr-72 transition-all duration-300">
          
          {/* Conditional Rendering based on View */}
          {view === ViewState.HOME && (
            <>
              <Hero setView={setView} />
              <div className="py-16 px-4 bg-brand-dark">
                <div className="max-w-4xl mx-auto text-center">
                   <h2 className="text-3xl font-serif font-bold mb-6 text-brand-gold">Our Signature Menu</h2>
                   <p className="text-slate-400 mb-8">Discover the authentic taste of Quetta cuisines prepared with love and tradition.</p>
                </div>
                <MenuSlider onContactClick={handleQuickOrder} />
              </div>
              <Gallery />
            </>
          )}

          {view === ViewState.MENU && (
            <div className="bg-brand-dark min-h-screen pt-8 pb-16">
              <div className="text-center mb-8 px-4">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Digital Menu</h2>
                <p className="text-slate-400">Explore our delicious offerings slide by slide.</p>
              </div>
              <MenuSlider onContactClick={handleQuickOrder} />
            </div>
          )}

          {view === ViewState.ABOUT && (
            <div className="py-20 px-6 max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-serif font-bold mb-8 text-brand-gold">Our Story</h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Founded with a passion for authentic taste, <span className="font-bold text-brand-primary">AL Mujahid Quetta Caffe Resturant</span> brings the serene vibes of Astore Deosai Lake right to your table. We believe in serving not just food, but an experience. From our signature Chai to our spicy Karahi, every dish tells a story of tradition.
              </p>
              <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/50 mt-8 border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80" 
                  alt="Cafe Interior" 
                  className="w-full opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent" />
              </div>
            </div>
          )}

          {view === ViewState.GALLERY && <Gallery />}

          {view === ViewState.CONTACT && (
            <div className="py-16 px-4 max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-brand-gold mb-4">Contact Us</h2>
                <p className="text-slate-400">We'd love to hear from you. Reserve a table or send us a suggestion.</p>
              </div>
              <ContactForm initialMessage={contactMessage} />
            </div>
          )}

        </main>
      </div>

      {/* Footer moves with the main content wrapper */}
      <div className="md:mr-64 lg:mr-72">
         <Footer setView={setView} />
      </div>

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 left-6 z-50 p-3 rounded-full bg-brand-gold text-brand-dark shadow-lg transition-all duration-300 hover:scale-110 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default App;
