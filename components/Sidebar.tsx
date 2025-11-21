import React, { useState } from 'react';
import { ChevronRight, Star, ChevronLeft, ShoppingBag, X } from 'lucide-react';
import { SidebarItem } from '../types';

interface SidebarProps {
  onItemClick: (itemName: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SidebarItem | null>(null);

  const specialItems: SidebarItem[] = [
    { 
      id: '1', 
      name: 'Quetta Special Tea', 
      price: 150,
      image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=300&q=80' 
    },
    { 
      id: '2', 
      name: 'Crispy Paratha', 
      price: 120,
      image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=300&q=80' 
    },
    { 
      id: '3', 
      name: 'Potato Paratha', 
      price: 200,
      image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=300&q=80' 
    },
    { 
      id: '4', 
      name: 'Egg Fry Special', 
      price: 150,
      image: 'https://images.unsplash.com/photo-1582169505937-b9992bd01ed9?auto=format&fit=crop&w=300&q=80' 
    },
    { 
      id: '5', 
      name: 'Chicken Roast', 
      price: 850,
      image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=300&q=80' 
    },
    { 
      id: '6', 
      name: 'Sooji Halwa', 
      price: 200,
      image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=300&q=80' 
    },
    { 
      id: '7', 
      name: 'Desi Chicken Karahi', 
      price: 2200,
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=300&q=80' 
    },
    { 
      id: '8', 
      name: 'Mutton Karahi', 
      price: 2400,
      image: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=300&q=80' 
    },
    { 
      id: '9', 
      name: 'Rice Biryani', 
      price: 950,
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=300&q=80' 
    },
    { 
      id: '10', 
      name: 'Kabuli Pulao', 
      price: 950,
      image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=300&q=80' 
    },
    { 
      id: '11', 
      name: 'Vegetable Salan', 
      price: 350,
      image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&w=300&q=80' 
    },
    { 
      id: '12', 
      name: 'Dal Mash', 
      price: 400,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=300&q=80' 
    },
    { 
      id: '13', 
      name: 'Dal Moong', 
      price: 350,
      image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=300&q=80' 
    },
    { 
      id: '14', 
      name: 'Dal Masoor', 
      price: 350,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80' 
    },
    { 
      id: '15', 
      name: 'Mix Sabzi', 
      price: 300,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=300&q=80' 
    },
  ];

  const handleItemClick = (name: string) => {
    onItemClick(name);
    setSelectedItem(null);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle (Floating) */}
      <button
        aria-label="Toggle Menu"
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden fixed z-50 bottom-24 right-0 bg-brand-gold text-brand-dark p-3 rounded-l-full shadow-lg transition-transform duration-300 ${isOpen ? 'translate-x-full' : 'translate-x-0'}`}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Sidebar Container */}
      <div 
        className={`fixed right-0 top-20 bottom-0 z-40 bg-brand-card/95 backdrop-blur shadow-2xl w-72 transform transition-transform duration-300 ease-in-out flex flex-col border-l border-white/10
        ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
        md:translate-x-0 md:w-72 h-[calc(100vh-5rem)]`}
      >
        <div className="p-5 bg-brand-dark/50 border-b border-white/10 flex justify-between items-center">
          <h3 className="font-serif text-xl font-bold text-brand-gold flex items-center gap-2">
            <Star className="text-brand-gold fill-brand-gold" size={20} />
            Specials
          </h3>
          <button onClick={() => setIsOpen(false)} className="md:hidden text-slate-400 hover:text-white">
            <ChevronRight />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 p-3 space-y-3 custom-scrollbar pb-24">
          {specialItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="w-full group flex items-center gap-3 p-2.5 bg-slate-800/40 border border-white/5 rounded-xl shadow-sm hover:bg-brand-primary/20 hover:border-brand-primary/50 transition-all duration-200 text-left"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                loading="lazy"
                decoding="async"
                className="w-12 h-12 rounded-lg object-cover border border-white/10 group-hover:scale-105 transition-transform" 
              />
              <div className="flex-1 min-w-0">
                <span className="text-slate-200 font-medium text-sm group-hover:text-brand-gold block truncate">{item.name}</span>
                <span className="text-brand-gold text-xs font-bold">PKR {item.price}</span>
              </div>
              <ShoppingBag size={16} className="text-slate-500 group-hover:text-brand-gold transition-colors shrink-0" />
            </button>
          ))}
        </div>
        
        <div className="p-4 bg-brand-dark text-center text-xs text-slate-500 border-t border-white/10 absolute bottom-0 w-full">
          <p>Tap an item to order!</p>
        </div>
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedItem(null)}
          ></div>

          {/* Modal Content */}
          <div className="bg-brand-card border border-white/20 rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden relative z-10 animate-fade-in-up">
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-red-500/80 transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="relative h-64 w-full">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.name} 
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-card to-transparent h-20"></div>
            </div>

            <div className="p-6 text-center -mt-6 relative">
              <h3 className="text-2xl font-serif font-bold text-white mb-2">{selectedItem.name}</h3>
              <p className="text-brand-gold text-xl font-bold mb-6">PKR {selectedItem.price}</p>
              
              <button 
                onClick={() => {
                  handleItemClick(selectedItem.name);
                }}
                className="w-full bg-brand-primary hover:bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag size={20} />
                ORDER NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};