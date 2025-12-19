
import React, { useState, useRef, useEffect } from 'react';
import { gemini } from '../services/geminiService';

const ConciergeChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'concierge', content: string }[]>([
    { role: 'concierge', content: 'Welcome to ÆTHERIA. How may I assist your pursuit of beauty today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);

    const response = await gemini.chatWithConcierge(userMsg);
    setMessages(prev => [...prev, { role: 'concierge', content: response }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {isOpen ? (
        <div className="bg-[#FDFBF7] border border-[#2D2D2A]/10 w-80 md:w-96 h-[500px] shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#2D2D2A] text-[#FDFBF7] px-6 py-4 flex justify-between items-center">
            <span className="text-[10px] uppercase tracking-[0.2em] font-light">Concierge Service</span>
            <button onClick={() => setIsOpen(false)} className="text-xs hover:opacity-70 transition-opacity">Close</button>
          </div>
          
          {/* Messages */}
          <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-6 scroll-smooth">
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <span className="text-[8px] uppercase tracking-widest text-[#BFA181] mb-1 font-bold">
                  {m.role === 'user' ? 'Inquiry' : 'Response'}
                </span>
                <p className={`text-sm font-light leading-relaxed p-3 ${m.role === 'user' ? 'bg-[#F4F1EA]' : ''} max-w-[85%]`}>
                  {m.content}
                </p>
              </div>
            ))}
            {isTyping && (
              <div className="flex flex-col items-start animate-pulse">
                <span className="text-[8px] uppercase tracking-widest text-[#BFA181] mb-1 font-bold">Reflecting</span>
                <div className="h-4 w-12 bg-[#F4F1EA] rounded" />
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[#2D2D2A]/5 flex space-x-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Speak with us..."
              className="flex-1 bg-transparent text-sm focus:outline-none italic placeholder-[#2D2D2A]/30"
            />
            <button onClick={handleSend} className="text-[10px] uppercase tracking-widest text-[#BFA181] font-bold">Send</button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#2D2D2A] text-[#FDFBF7] w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform duration-300 group"
        >
          <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ConciergeChat;
