'use client';

import { motion } from 'framer-motion';
import { EnhancedCardList } from '@/components/console/EnhancedCardList';
import { ChatPanel } from '@/components/console/ChatPanel';
import { TracePanel } from '@/components/console/TracePanel';
import { useChat } from '@/hooks/useChat';
import { useTrace } from '@/hooks/useTrace';
import { consoleContent } from '@/content/console';

export const ConsoleTab = () => {
  const { messages, sendMessage } = useChat();
  const { events, simulateTrace } = useTrace();

  const handleSendMessage = (content: string) => {
    sendMessage(content);
    simulateTrace(content);
  };

  return (
    <div className="h-[calc(100vh-160px)] flex">
      <motion.aside
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-80 border-r border-border bg-background-secondary hidden lg:block"
      >
        <EnhancedCardList cards={consoleContent.cards} />
      </motion.aside>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1"
      >
        <ChatPanel
          messages={messages}
          onSendMessage={handleSendMessage}
          placeholder={consoleContent.chat.placeholder}
          emptyState={consoleContent.chat.emptyState}
        />
      </motion.main>

      <motion.aside
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-96 hidden xl:block"
      >
        <TracePanel
          events={events}
          title={consoleContent.trace.title}
          emptyState={consoleContent.trace.emptyState}
        />
      </motion.aside>
    </div>
  );
};
