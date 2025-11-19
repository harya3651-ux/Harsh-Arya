import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, ArrowUpCircle } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold mb-4 text-victory-gold">Victory Sweet Shop Ltd</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A staple of Astoria, offering a unique blend of Mediterranean bakery delights and a full-service restaurant experience in our beautiful garden.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-victory-gold transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-victory-gold transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-victory-gold transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-victory-gold transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-bold uppercase tracking-widest mb-6 text-sm text-gray-200">Quick Navigation</h4>
            <ul className="space-y-3">
                {NAV_LINKS.map(link => (
                    <li key={link.label}>
                        <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">{link.label}</a>
                    </li>
                ))}
            </ul>
          </div>

          {/* Reserve */}
          <div className="text-center md:text-right">
             <h4 className="font-bold uppercase tracking-widest mb-6 text-sm text-gray-200">Reservations</h4>
             <p className="text-gray-400 text-sm mb-4">Secure your spot in our garden today.</p>
             <a 
                href="#reservations" 
                className="inline-block bg-white text-gray-900 px-6 py-3 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-victory-gold hover:text-white transition-all"
             >
                Find a Table via OpenTable
             </a>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2018 Victory Sweet Shop Ltd. All Rights Reserved.</p>
            <a href="#home" className="mt-4 md:mt-0 flex items-center hover:text-white transition-colors">
                Back to Top <ArrowUpCircle className="ml-2 w-4 h-4" />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;