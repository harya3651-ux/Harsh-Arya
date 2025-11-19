import React from 'react';

const Events: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-stone-100 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-victory-green opacity-5 skew-x-12 transform translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-victory-gold rounded-lg"></div>
                <img 
                    src="https://images.unsplash.com/photo-1519225468359-6963257d27d7?q=80&w=2070&auto=format&fit=crop" 
                    alt="Garden Wedding" 
                    className="rounded-lg shadow-2xl relative z-10 w-full"
                />
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-left">
            <div className="inline-block bg-white px-4 py-1 rounded-full text-xs font-bold tracking-widest text-victory-green uppercase mb-4 shadow-sm">
                Voted Top 10 NYC Venue
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Weddings & Private Events
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Discover Astoria’s hidden treasure. Our European-style indoor/outdoor garden is available for all types of events: Weddings, Bridal Showers, Baby Showers, and much more.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We provide a certified Wedding/Event Planner on premises to ensure your special day is magical and without stress.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-victory-green text-white px-8 py-3 rounded-sm font-bold hover:bg-green-800 transition-colors shadow-lg">
                    Inquire for Events
                </button>
                <button className="bg-white text-victory-green border border-victory-green px-8 py-3 rounded-sm font-bold hover:bg-green-50 transition-colors">
                    View Gallery
                </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Events;