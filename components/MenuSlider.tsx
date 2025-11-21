import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingCart, MessageCircle } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuSliderProps {
  onContactClick: (itemName?: string) => void;
}

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Mutton Karahi Special',
    price: 2400,
    description: 'Tender mutton cooked in fresh tomatoes, green chilies, and traditional Quetta spices in a wok.',
    image: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=1000&q=80', // Curry/Karahi vibe
    category: 'Premium',
  },
  {
    id: '2',
    name: 'Quetta Milk Tea',
    price: 150,
    description: 'Rich, creamy tea brewed for hours with special herbs and fresh milk. A signature delight.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80', // Tea cup
    category: 'Hot Drinks',
  },
  {
    id: '3',
    name: 'Crispy Lacha Paratha',
    price: 120,
    description: 'Golden, flaky, multi-layered flatbread fried in pure ghee. Best served with tea or karahi.',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=1000&q=80', // Fried bread
    category: 'Breakfast',
  },
  {
    id: '4',
    name: 'Chapli Kabab',
    price: 450,
    description: 'Minced beef patties marinated with dried pomegranate seeds and fried to perfection.',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=1000&q=80', // Meat dish
    category: 'Starters',
  },
  {
    id: '5',
    name: 'Kabuli Pulao',
    price: 950,
    description: 'Aromatic basmati rice cooked with lamb, sweet carrots, and raisins. A royal Afghan treat.',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=1000&q=80', // Rice/Biryani
    category: 'Rice',
  },
  {
    id: '6',
    name: 'Chicken Roast',
    price: 850,
    description: 'Whole chicken leg quarters marinated in yogurt and spices, steam roasted to juicy perfection.',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=1000&q=80', // Chicken
    category: 'Main',
  },
  {
    id: '7',
    name: 'Sooji Halwa',
    price: 200,
    description: 'Sweet semolina dessert cooked with ghee, sugar, and garnished with nuts.',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=1000&q=80', // Halwa / Dessert
    category: 'Dessert',
  },
  {
    id: '8',
    name: 'Desi Murgh Karahi',
    price: 2200,
    description: 'Organic chicken cooked in a traditional wok with fresh tomatoes, ginger, and black pepper.',
    image: 'https://images.unsplash.com/photo-1615937722923-67f6de1e9a6e?auto=format&fit=crop&w=1000&q=80', // Chicken Curry
    category: 'Special',
  },
];

export const MenuSlider: React.FC<MenuSliderProps> = ({ onContactClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % menuItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
  };

  return (
    <div className="relative w-full h-[600px] md:h-[700px] bg-brand-dark overflow-hidden flex flex-col items-center justify-center border-y border-white/5">
      
      {/* Background Blur Effect using current image */}
      <motion.div 
        key={`bg-${currentIndex}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center blur-3xl transform scale-110"
        style={{ backgroundImage: `url(${menuItems[currentIndex].image})` }}
      />
      
      {/* Overlay to ensure blue theme consistency */}
      <div className="absolute inset-0 bg-brand-dark/80" />

      <div className="relative w-full max-w-6xl px-4 z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <AnimatePresence mode='wait'>
            <motion.div
              key={menuItems[currentIndex].id}
              initial={{ opacity: 0, x: -50, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: 50, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="relative"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white/10 shadow-2xl shadow-black/50">
                 <img 
                   src={menuItems[currentIndex].image} 
                   alt={menuItems[currentIndex].name}
                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                   // Priority loading for the active slide
                   fetchPriority="high"
                   loading="eager"
                 />
              </div>
              {/* Floating Badge */}
              <motion.div 
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 transition={{ delay: 0.3 }}
                 className="absolute -top-4 -right-4 bg-brand-gold text-brand-dark w-20 h-20 rounded-full flex items-center justify-center font-bold shadow-lg rotate-12 border-4 border-brand-dark"
              >
                <div className="text-center leading-tight">
                  <span className="text-xs block font-sans">PKR</span>
                  <span className="text-lg">{menuItems[currentIndex].price}</span>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left text-white">
          <AnimatePresence mode='wait'>
             <motion.div
              key={`text-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
             >
               <span className="inline-block py-1 px-3 rounded-full bg-brand-primary/20 text-brand-primary text-sm font-bold tracking-wider mb-4 border border-brand-primary/30">
                 {menuItems[currentIndex].category}
               </span>
               <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white leading-tight">
                 {menuItems[currentIndex].name}
               </h2>
               <p className="text-lg text-slate-300 mb-8 max-w-md mx-auto md:mx-0">
                 {menuItems[currentIndex].description}
               </p>
               
               <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                 <button 
                   onClick={() => onContactClick(menuItems[currentIndex].name)}
                   className="flex items-center justify-center gap-2 bg-brand-gold text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                 >
                   <ShoppingCart size={20} /> Order Now
                 </button>
                 <button 
                   onClick={() => onContactClick("Suggestion for " + menuItems[currentIndex].name)}
                   className="flex items-center justify-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
                 >
                   <MessageCircle size={20} /> Suggestion
                 </button>
               </div>
             </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-6 z-20">
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm transition-all border border-white/10"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="flex gap-2">
          {menuItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-brand-gold w-8' : 'bg-white/20 hover:bg-white/40'}`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm transition-all border border-white/10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};