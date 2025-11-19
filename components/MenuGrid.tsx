import React from 'react';
import { MENU_CATEGORIES } from '../constants';
import { ArrowRight } from 'lucide-react';

const MenuGrid: React.FC = () => {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-victory-gold font-bold tracking-widest uppercase text-sm">Taste the Tradition</span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-16">Our Menus</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_CATEGORIES.map((menu, idx) => (
            <div 
                key={idx} 
                className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3] cursor-pointer"
            >
              <img 
                src={`https://picsum.photos/seed/${menu.replace(/\s/g, '')}/600/400`} 
                alt={menu}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{menu}</h3>
                <div className="flex items-center text-victory-gold text-sm font-bold uppercase tracking-wider translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    View Details <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
             <p className="text-gray-500 max-w-2xl mx-auto mb-6">
                Our bakery is open daily from 8 AM featuring fresh pastries, cookies, and traditional Greek desserts.
             </p>
             <button className="border-b-2 border-victory-green text-victory-green font-bold pb-1 hover:text-green-800 hover:border-green-800 transition-colors">
                Download Full Menu PDF
             </button>
        </div>
      </div>
    </section>
  );
};

export default MenuGrid;