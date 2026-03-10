'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, CheckCircle, AlertCircle, Info, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { TraceEvent } from '@/types';

interface TracePanelProps {
  events: TraceEvent[];
  title?: string;
  emptyState?: string;
}

const iconMap = {
  info: Info,
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
};

const colorMap = {
  info: 'text-blue-500 bg-blue-500/10',
  success: 'text-emerald-500 bg-emerald-500/10',
  error: 'text-red-500 bg-red-500/10',
  warning: 'text-amber-500 bg-amber-500/10',
};

export const TracePanel = ({
  events,
  title = 'Live Trace',
  emptyState = 'Trace events will appear here',
}: TracePanelProps) => {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [events]);

  return (
    <div className="h-full flex flex-col bg-background-secondary border-l border-border">
      {/* Header */}
      <div className="px-4 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-purple-primary" />
          <h2 className="text-h5 font-semibold text-text-primary">{title}</h2>
        </div>
      </div>

      {/* Events Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {events.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <p className="text-text-tertiary text-body-sm text-center px-4">
              {emptyState}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {events.map((event) => {
                const Icon = iconMap[event.type];
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-background-tertiary rounded-lg p-3 border border-border"
                  >
                    <div className="flex items-start gap-3">
                      <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0', colorMap[event.type])}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-body-sm text-text-primary font-medium">
                          {event.message}
                        </p>
                        {event.details && (
                          <p className="text-caption text-text-tertiary mt-1 font-mono">
                            {event.details}
                          </p>
                        )}
                        <span className="text-caption text-text-tertiary mt-1 block">
                          {event.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
            <div ref={endRef} />
          </div>
        )}
      </div>
    </div>
  );
};
