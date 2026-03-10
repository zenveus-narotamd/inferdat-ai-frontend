'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Activity, FileText } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { TabNavigation } from '@/components/dashboard/TabNavigation';
import { ConsoleTab } from '@/components/dashboard/ConsoleTab';
import { HealthTab } from '@/components/dashboard/HealthTab';
import { DocumentsTab } from '@/components/dashboard/DocumentsTab';

type MainTab = 'console' | 'health' | 'documents';

const MAIN_TABS = [
  { id: 'console' as const, label: 'Console', icon: MessageSquare },
  { id: 'health' as const, label: 'Health Dashboard', icon: Activity },
  { id: 'documents' as const, label: 'Knowledge Bases', icon: FileText },
];

export const DashboardPage = () => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('console');

  return (
    <div className="min-h-screen bg-background-primary">
      <Header />

      <div className="pt-20">
        <TabNavigation
          tabs={MAIN_TABS}
          activeTab={activeMainTab}
          onTabChange={(tabId) => setActiveMainTab(tabId as MainTab)}
        />

        <motion.div
          key={activeMainTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {activeMainTab === 'console' && <ConsoleTab />}
          {activeMainTab === 'health' && <HealthTab />}
          {activeMainTab === 'documents' && <DocumentsTab />}
        </motion.div>
      </div>
    </div>
  );
};
