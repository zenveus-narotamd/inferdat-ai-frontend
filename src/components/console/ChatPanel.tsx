'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import type { Message } from '@/types';

interface ChatPanelProps {
  messages: Message[];
  onSendMessage: (content: string) => void;
  placeholder?: string;
  emptyState?: string;
}

export const ChatPanel = ({
  messages,
  onSendMessage,
  placeholder = 'Type your message...',
  emptyState = 'Start a conversation',
}: ChatPanelProps) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  return (
    <div className="h-full flex flex-col bg-background-secondary">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <p className="text-text-tertiary text-body">{emptyState}</p>
          </div>
        ) : (
          <div className="space-y-6 max-w-3xl mx-auto">
            <AnimatePresence mode="popLayout">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    'flex gap-4',
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  
                  <div
                    className={cn(
                      'max-w-[70%] rounded-2xl px-5 py-3',
                      message.role === 'user'
                        ? 'gradient-primary text-white'
                        : 'bg-background-tertiary text-text-primary'
                    )}
                  >
                    <p className="text-body whitespace-pre-wrap">{message.content}</p>
                    <span className="text-xs opacity-70 mt-2 block">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>

                  {message.role === 'user' && (
                    <div className="w-8 h-8 rounded-lg bg-purple-primary/10 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-purple-primary" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-border px-6 py-4">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={placeholder}
              className={cn(
                'flex-1 h-[52px] px-4 bg-background-tertiary border border-border rounded-[10px]',
                'text-text-primary placeholder:text-text-tertiary',
                'transition-all duration-200',
                'focus:outline-none focus:border-purple-primary focus:ring-2 focus:ring-purple-primary/10'
              )}
            />
            <Button
              type="submit"
              size="sm"
              disabled={!input.trim()}
              className="h-[52px] w-[52px] p-0"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
