import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Sparkles, Minimize2, Maximize2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { haptic } from '../utils/haptics';
import { projectId, publicAnonKey } from '/utils/supabase/info';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMsg: Message = {
        id: Date.now().toString(),
        text: language === 'fa' 
          ? "👋 سلام! من دستیار هوشمند ارشام هستم.\n\nمی‌تونم درباره پروژه‌ها، فرآیند طراحی، مهارت‌ها، تجربیات، چالش‌ها، و یادگیری‌های ارشام باهات صحبت کنم.\n\nچه سوالی داری؟"
          : "👋 Hi! I'm Arsham's AI assistant.\n\nI can talk about his projects, design process, skills, experience, challenges, and learnings.\n\nWhat would you like to know?",
        isBot: true,
        timestamp: new Date()
      };
      setMessages([welcomeMsg]);
    }
  }, [isOpen, language, messages.length]);

  const sendToBackend = async (userMessage: string): Promise<string> => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-a6e89339/chat`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify({
            message: userMessage,
            language: language,
            conversationHistory: messages
          })
        }
      );

      const data = await response.json();
      
      // Check if we got a response
      if (data.response) {
        return data.response;
      }
      
      // If no response field, check for error
      if (data.error) {
        throw new Error(data.error);
      }

      // If response is not ok and no data.response
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${data.details || data.error || 'Unknown error'}`);
      }

      // Fallback
      return language === 'fa'
        ? "متأسفم، نتونستم پاسخ مناسبی دریافت کنم."
        : "Sorry, I couldn't get a proper response.";
    } catch (error: any) {
      console.error('Backend communication error:', error);
      
      // Return the actual error message
      return language === 'fa'
        ? `❌ خطا در ارتباط: ${error?.message || 'خطای ناشناخته'}\n\nلطفاً دوباره امتحان کن.`
        : `❌ Communication error: ${error?.message || 'Unknown error'}\n\nPlease try again.`;
    }
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    haptic('light');

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    setIsTyping(true);
    
    try {
      const response = await sendToBackend(text);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      haptic('success');
    } catch (error) {
      console.error('Send message error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: language === 'fa'
          ? "متأسفم، مشکلی پیش اومد. لطفاً دوباره امتحان کن."
          : "Sorry, something went wrong. Please try again.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const quickPrompts = language === 'fa'
    ? [
        'پروژه‌های اصلی چی بودن؟',
        'بزرگترین چالشت چی بود؟',
        'فرآیند طراحیت چطوریه؟',
        'چه مهارت‌هایی داری؟'
      ]
    : [
        'What are your main projects?',
        'What was your biggest challenge?',
        'What is your design process?',
        'What skills do you have?'
      ];

  return (
    <>
      {/* Chatbot Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              haptic('medium');
              setIsOpen(true);
            }}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white rounded-full shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-300 flex items-center justify-center group hover:scale-110 active:scale-95"
            aria-label="Open AI assistant"
          >
            <div className="relative">
              <Sparkles className="w-7 h-7 group-hover:rotate-12 transition-transform" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? '60px' : '650px'
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-[420px] max-w-[calc(100vw-3rem)] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden"
            style={{ maxHeight: 'calc(100vh - 3rem)' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white px-5 py-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center ring-2 ring-white/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-base">
                    {language === 'fa' ? 'دستیار هوشمند ارشام' : "Arsham's AI Assistant"}
                  </div>
                  <div className="text-xs opacity-90 flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    {language === 'fa' ? '🤖 OpenAI GPT-4o-mini' : '🤖 OpenAI GPT-4o-mini'}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    haptic('light');
                    setIsMinimized(!isMinimized);
                  }}
                  className="w-9 h-9 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={isMinimized ? 'Maximize' : 'Minimize'}
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => {
                    haptic('light');
                    setIsOpen(false);
                    setIsMinimized(false);
                  }}
                  className="w-9 h-9 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50 dark:bg-gray-950">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div className="max-w-[85%]">
                        <div
                          className={`px-4 py-3 rounded-2xl ${
                            message.isBot
                              ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm border border-gray-200 dark:border-gray-700'
                              : 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md'
                          }`}
                        >
                          <div className="text-sm leading-relaxed [&>*]:my-2 [&>p]:my-2 [&>ul]:my-2 [&>ul]:ml-4 [&>ul]:list-disc [&>li]:my-1 [&>strong]:font-bold [&>h1]:text-lg [&>h1]:font-bold [&>h2]:text-base [&>h2]:font-semibold [&>h3]:text-sm [&>h3]:font-semibold">
                            <ReactMarkdown>{message.text}</ReactMarkdown>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white dark:bg-gray-800 px-5 py-3 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                          <div className="flex gap-1.5">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                          <span className="ml-1">{language === 'fa' ? 'در حال فکر کردن...' : 'Thinking...'}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Prompts */}
                {messages.length <= 1 && !isTyping && (
                  <div className="px-5 py-3 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 flex flex-wrap gap-2">
                    {quickPrompts.map((prompt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(prompt)}
                        className="text-xs px-3 py-1.5 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full transition-colors border border-gray-200 dark:border-gray-700 shadow-sm"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                )}

                {/* Input */}
                <div className="border-t border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-gray-900 flex-shrink-0">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage(inputValue);
                        }
                      }}
                      placeholder={language === 'fa' ? 'هر سوالی داری بپرس...' : 'Ask anything...'}
                      className="flex-1 px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      disabled={isTyping}
                    />
                    <button
                      onClick={() => handleSendMessage(inputValue)}
                      disabled={!inputValue.trim() || isTyping}
                      className="w-11 h-11 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 flex-shrink-0"
                      aria-label="Send message"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}