import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import MenuGrid from './components/MenuGrid';
import Events from './components/Events';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Concierge from './components/Concierge';

function App() {
  return (
    <div className="min-h-screen font-sans bg-stone-50 text-gray-900 selection:bg-victory-gold selection:text-white scroll-smooth">
      <Header />
      
      <main>
        <Hero />
        <InfoSection />
        <MenuGrid />
        <Events />
        <Newsletter />
      </main>

      <Footer />
      <Concierge />
    </div>
  );
}

export default App;