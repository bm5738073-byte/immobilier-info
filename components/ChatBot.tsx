import React, { useState, useRef, useEffect, useContext } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

const ChatBot: React.FC = () => {
  const { lang, isRTL } = useContext(AppContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  // Initial greeting
  useEffect(() => {
    if (messages.length === 0) {
      const greetings = {
        ar: 'مرحبًا بك في Immobilier Info! كيف يمكنني مساعدتك اليوم؟',
        en: 'Welcome to Immobilier Info! How can I help you today?',
        fr: 'Bienvenue sur Immobilier Info ! Comment puis-je vous aider aujourd\'hui ?'
      };
      setMessages([{ id: 'init', role: 'model', text: greetings[lang] }]);
    }
  }, [lang]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Define system instruction based on language
      const navTerms = {
        ar: '- الرئيسية\n- الدول\n- المدن\n- المدونة\n- من نحن\n- سياسة الخصوصية\n- الشروط والأحكام',
        en: '- Home\n- Countries\n- Cities\n- Blog\n- About Us\n- Privacy Policy\n- Terms & Conditions',
        fr: '- Accueil\n- Pays\n- Villes\n- Blog\n- À propos\n- Politique de confidentialité\n- Termes et conditions'
      };

      const quickReplyHeader = {
        ar: 'الروابط السريعة:',
        en: 'Quick Replies:',
        fr: 'Réponses rapides :'
      };

      const sysInstruction = `You are a helpful real estate assistant on the 'Immobilier Info' website. 
      Current Language: ${lang}. 
      Always respond to user questions with clear and concise answers in the current language. 
      At the very end of your response, leave a blank line and then strictly append exactly this list of quick navigation suggestions titled "${quickReplyHeader[lang]}":
      ${navTerms[lang]}
      
      Do not invent links. Just list the names.`;

      const model = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: sysInstruction,
        }
      });

      // Send history + new message
      // Note: In a real prod app, you'd map the whole 'messages' state to history. 
      // For simplicity here, we send the new message with the system instruction context.
      const result = await model.sendMessage({ message: input });
      
      const responseText = result.text;

      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: responseText 
      }]);

    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: lang === 'ar' ? 'عذراً، حدث خطأ. يرجى المحاولة لاحقاً.' : 'Sorry, something went wrong. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReplyClick = (text: string) => {
    // Map text to routes for navigation if the user clicks a "chip" (advanced feature)
    // For now, we just insert the text into the chat as if the user asked for it
    const routes: Record<string, string> = {
      'الرئيسية': '/', 'Home': '/', 'Accueil': '/',
      'الدول': '/countries', 'Countries': '/countries', 'Pays': '/countries',
      'المدن': '/cities', 'Cities': '/cities', 'Villes': '/cities',
      'المدونة': '/blog', 'Blog': '/blog',
      'من نحن': '/about', 'About Us': '/about', 'À propos': '/about',
      'اتصل بنا': '/contact', 'Contact Us': '/contact', 'Contact': '/contact'
    };
    
    // Check if it matches a route key loosely
    const cleanText = text.replace(/^- /, '').trim();
    if (routes[cleanText]) {
      navigate(routes[cleanText]);
      setIsOpen(false); // Close chat on navigation
    } else {
      setInput(cleanText);
      // Optional: auto-send
    }
  };

  // Helper to render text with clickable quick replies if we parsed them, 
  // or just plain text. Here we render plain text but could add chip logic.
  const renderMessageText = (text: string) => {
    return text.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-marina-600 hover:bg-marina-700'
        } text-white`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-24 ${isRTL ? 'left-6' : 'right-6'} w-80 md:w-96 bg-white rounded-xl shadow-2xl z-50 flex flex-col border border-gray-200 overflow-hidden transition-all duration-300 max-h-[600px] h-[70vh]`}>
          
          {/* Header */}
          <div className="bg-marina-600 p-4 text-white flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-bold">{lang === 'ar' ? 'المساعد الذكي' : lang === 'fr' ? 'Assistant IA' : 'AI Assistant'}</h3>
              <span className="text-xs text-marina-100 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Online
              </span>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-lg text-sm shadow-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-marina-600 text-white rounded-tr-none'
                      : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg border border-gray-100 rounded-tl-none flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions (Static Helper) */}
          <div className="bg-gray-100 p-2 flex gap-2 overflow-x-auto no-scrollbar">
            {['Home', 'Countries', 'Blog', 'Contact'].map(link => {
              const labels: Record<string, Record<string, string>> = {
                Home: { ar: 'الرئيسية', fr: 'Accueil', en: 'Home' },
                Countries: { ar: 'الدول', fr: 'Pays', en: 'Countries' },
                Blog: { ar: 'المدونة', fr: 'Blog', en: 'Blog' },
                Contact: { ar: 'اتصل بنا', fr: 'Contact', en: 'Contact' }
              };
               // Simple route mapping
               const routes: Record<string, string> = { Home: '/', Countries: '/countries', Blog: '/blog', Contact: '/contact' };
               
               return (
                <button 
                  key={link}
                  onClick={() => { navigate(routes[link]); setIsOpen(false); }}
                  className="whitespace-nowrap bg-white text-marina-600 text-xs px-3 py-1.5 rounded-full border border-marina-100 shadow-sm hover:bg-marina-50"
                >
                  {labels[link][lang]}
                </button>
               )
            })}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={lang === 'ar' ? 'اكتب رسالتك...' : lang === 'fr' ? 'Écrivez votre message...' : 'Type your message...'}
              className="flex-1 bg-gray-100 border-0 rounded-full px-4 py-2 focus:ring-2 focus:ring-marina-500 focus:outline-none text-sm"
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              className="bg-marina-600 text-white p-2 rounded-full hover:bg-marina-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <Send size={18} className={isRTL ? 'rotate-180' : ''} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
