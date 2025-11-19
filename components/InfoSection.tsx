import React from 'react';
import { OPENING_HOURS, CONTACT_INFO } from '../constants';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const BUSY_DATA = [
  { time: '10am', visitors: 20 },
  { time: '12pm', visitors: 65 },
  { time: '2pm', visitors: 45 },
  { time: '4pm', visitors: 30 },
  { time: '6pm', visitors: 85 },
  { time: '8pm', visitors: 95 },
  { time: '10pm', visitors: 50 },
];

const InfoSection: React.FC = () => {
  return (
    <section className="py-20 bg-victory-cream text-gray-800" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Info */}
          <div>
            <h2 className="font-serif text-4xl font-bold mb-8 text-victory-green">Visit Us</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-victory-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg uppercase tracking-wide mb-1">Location</h3>
                  <p className="text-gray-600 leading-relaxed w-2/3">{CONTACT_INFO.address}</p>
                  <a href="https://maps.google.com/?q=21-69+Steinway+Street,+Astoria,+NY" target="_blank" rel="noreferrer" className="text-victory-green hover:underline text-sm mt-2 inline-block font-bold">Get Directions →</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-victory-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg uppercase tracking-wide mb-2">Opening Hours</h3>
                  <ul className="space-y-2 text-gray-600">
                    {OPENING_HOURS.map((hour, idx) => (
                      <li key={idx} className="flex justify-between w-full max-w-xs border-b border-dashed border-gray-300 pb-1">
                        <span>{hour.label}</span>
                        <span className="font-semibold">{hour.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-victory-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg uppercase tracking-wide mb-1">Contact</h3>
                  {CONTACT_INFO.phone.map(p => (
                    <p key={p} className="text-gray-600">{p}</p>
                  ))}
                  <div className="flex items-center mt-2">
                     <Mail className="w-4 h-4 mr-2 text-gray-400" />
                     <a href={`mailto:${CONTACT_INFO.email}`} className="text-victory-green hover:underline">{CONTACT_INFO.email}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Chart & Map Placeholder */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
             <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6">Popular Times</h3>
             <div className="h-64 w-full mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={BUSY_DATA}>
                    <XAxis 
                        dataKey="time" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fontSize: 12, fill: '#9CA3AF'}} 
                    />
                    <Tooltip 
                        cursor={{fill: '#f3f4f6'}}
                        contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
                    />
                    <Bar dataKey="visitors" radius={[4, 4, 0, 0]}>
                      {BUSY_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 5 ? '#D4AF37' : '#E5E7EB'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
             </div>
             <p className="text-center text-sm text-gray-500 italic">
                Data shows typical visitor peak times. We recommend reserving tables for 8pm dining.
             </p>
             
             <div className="mt-8 h-48 w-full bg-gray-200 rounded-lg overflow-hidden relative group cursor-pointer">
                <img 
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000" 
                    alt="Map Preview" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg">View on Map</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;