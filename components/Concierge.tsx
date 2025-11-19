import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage, ChatSender } from '../types';
import { getChatResponse } from '../services/geminiService';

const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', text: 'Welcome to Victory Garden Café! I am your virtual concierge. Ask me about our menu, hours, or events.', sender: ChatSender.BOT }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: ChatSender.USER
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    const responseText = await getChatResponse(inputText);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      text: responseText,
      sender: ChatSender.BOT
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-victory-gold hover:bg-yellow-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center gap-2 group"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-sm font-bold">Ask Concierge</span>
          <MessageCircle size={28} />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col overflow-hidden border border-gray-200 animate-fade-in-up" style={{height: '500px'}}>
          {/* Header */}
          <div className="bg-victory-green p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
               <div className="bg-white/20 p-1.5 rounded-full">
                  <Sparkles className="text-victory-gold w-4 h-4" />
               </div>
               <div>
                 <h3 className="text-white font-bold text-sm">Victory Concierge</h3>
                 <p className="text-white/70 text-xs">Powered by Gemini</p>
               </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === ChatSender.USER ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.sender === ChatSender.USER
                      ? 'bg-victory-green text-white rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 animate-spin text-victory-gold" />
                  <span className="text-xs text-gray-500">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about menus, hours..."
                className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputText.trim()}
                className={`p-1.5 rounded-full transition-colors ${
                    inputText.trim() ? 'text-victory-green hover:bg-green-100' : 'text-gray-400'
                }`}
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Concierge;