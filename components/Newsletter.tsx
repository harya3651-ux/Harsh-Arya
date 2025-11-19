import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
        setStatus('error');
        return;
    }
    // Simulate API call
    setTimeout(() => setStatus('success'), 1000);
  };

  return (
    <section className="py-16 bg-victory-green text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
        <p className="text-white/80 mb-8 text-lg">Subscribe to receive exclusive offers, event updates, and seasonal menu announcements.</p>
        
        {status === 'success' ? (
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm animate-fade-in-up">
                <p className="text-xl font-bold text-victory-gold">Thanks for subscribing!</p>
                <p className="text-sm mt-2">Please check your email for further instructions.</p>
            </div>
        ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-stretch gap-4 max-w-lg mx-auto">
            <input 
                type="email" 
                placeholder="Enter your email address" 
                className="px-6 py-3 rounded-sm text-gray-900 w-full focus:outline-none focus:ring-2 focus:ring-victory-gold"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    if(status === 'error') setStatus('idle');
                }}
            />
            <button 
                type="submit" 
                className="bg-victory-gold px-8 py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2"
            >
                Subscribe <Send size={16} />
            </button>
            </form>
        )}
        {status === 'error' && <p className="text-red-300 mt-4 text-sm">Please enter a valid email address.</p>}
      </div>
    </section>
  );
};

export default Newsletter;