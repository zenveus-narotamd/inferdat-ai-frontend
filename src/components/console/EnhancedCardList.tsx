'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X, UploadCloud, AlertTriangle, Shield, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ConsoleCard } from '@/types/console';

interface EnhancedCardListProps {
  cards: ConsoleCard[];
}

const iconMap = {
  UploadCloud,
  AlertTriangle,
  Shield,
  MessageCircle,
};

// Refined accent colors per layer
const layerAccent: Record<string, {
  border: string;
  bg: string;
  iconBg: string;
  iconText: string;
  tag: string;
  arrow: string;
}> = {
  ingestion: {
    border: 'border-purple-primary/30',
    bg: 'bg-purple-primary/[0.06]',
    iconBg: 'bg-purple-primary/15',
    iconText: 'text-purple-light',
    tag: 'text-purple-light bg-purple-primary/10 border-purple-primary/20',
    arrow: 'text-purple-light',
  },
  failure: {
    border: 'border-red-400/30',
    bg: 'bg-red-400/[0.06]',
    iconBg: 'bg-red-400/15',
    iconText: 'text-red-300',
    tag: 'text-red-300 bg-red-400/10 border-red-400/20',
    arrow: 'text-red-300',
  },
  guardrails: {
    border: 'border-amber-400/30',
    bg: 'bg-amber-400/[0.06]',
    iconBg: 'bg-amber-400/15',
    iconText: 'text-amber-300',
    tag: 'text-amber-300 bg-amber-400/10 border-amber-400/20',
    arrow: 'text-amber-300',
  },
  query: {
    border: 'border-sky-400/30',
    bg: 'bg-sky-400/[0.06]',
    iconBg: 'bg-sky-400/15',
    iconText: 'text-sky-300',
    tag: 'text-sky-300 bg-sky-400/10 border-sky-400/20',
    arrow: 'text-sky-300',
  },
};

export const EnhancedCardList = ({ cards }: EnhancedCardListProps) => {
  const [selectedCard, setSelectedCard] = useState<ConsoleCard | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
        setSelectedCard(null);
      }
    };

    if (selectedCard) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedCard]);

  return (
    <div className="relative h-full overflow-y-auto px-4 py-6">
      <div className="space-y-2">
        {cards.map((card, index) => {
          const Icon = iconMap[card.icon as keyof typeof iconMap] || UploadCloud;
          const isActive = selectedCard?.id === card.id;
          const accent = layerAccent[card.id];
          
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <button
                onClick={() => setSelectedCard(card)}
                className={cn(
                  'w-full text-left flex items-start gap-3 p-3 rounded-xl border transition-all duration-200',
                  isActive 
                    ? cn(accent.border, accent.bg)
                    : 'border-border bg-white/[0.02] hover:border-border-hover'
                )}
              >
                {/* Icon */}
                <div className={cn(
                  'w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5',
                  accent.iconBg
                )}>
                  <Icon className={cn('w-4 h-4', accent.iconText)} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-text-primary">
                      {card.title}
                    </span>
                    <ChevronRight 
                      className={cn(
                        'w-3 h-3 ml-auto shrink-0 transition-all duration-200',
                        isActive ? accent.arrow : 'text-text-tertiary',
                        isActive && 'translate-x-0.5'
                      )} 
                    />
                  </div>
                  <p className="text-xs text-text-tertiary leading-relaxed mt-0.5">
                    {card.description}
                  </p>
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Overlay Panel */}
      <AnimatePresence>
        {selectedCard && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
              onClick={() => setSelectedCard(null)}
            />

            {/* Overlay Card */}
            <motion.div
              ref={overlayRef}
              initial={{ opacity: 0, x: -8, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={cn(
                'fixed z-50 left-[340px] top-[180px] w-[400px] max-h-[calc(100vh-220px)]',
                'overflow-y-auto rounded-2xl border shadow-2xl shadow-black/40',
                'bg-background-secondary',
                layerAccent[selectedCard.id].border
              )}
            >
              <div className="p-5">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={cn(
                    'w-9 h-9 rounded-xl flex items-center justify-center shrink-0',
                    layerAccent[selectedCard.id].iconBg
                  )}>
                    {(() => {
                      const Icon = iconMap[selectedCard.icon as keyof typeof iconMap] || UploadCloud;
                      return <Icon className={cn('w-4.5 h-4.5', layerAccent[selectedCard.id].iconText)} />;
                    })()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-text-primary">
                      {selectedCard.title}
                    </h3>
                    <p className="text-xs text-text-secondary mt-0.5">
                      {selectedCard.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="p-1.5 rounded-lg text-text-tertiary hover:text-text-primary hover:bg-white/[0.05] transition-colors shrink-0"
                    aria-label="Close detail panel"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Sub-cards */}
                <div className="space-y-4">
                  {selectedCard.subCards.map((subCard, idx) => (
                    <motion.div
                      key={subCard.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: idx * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={cn(
                        'rounded-xl p-4',
                        layerAccent[selectedCard.id].bg
                      )}
                    >
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className={cn(
                          'inline-block text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-md border',
                          layerAccent[selectedCard.id].tag
                        )}>
                          {subCard.title}
                        </span>
                      </div>
                      <p className="text-[12.5px] leading-[1.6] text-text-primary mb-2">
                        {subCard.content}
                      </p>
                      <p className="text-[12px] leading-[1.6] text-text-secondary">
                        {subCard.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
