import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Tab {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const TabNavigation = ({ tabs, activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <div className="bg-background-secondary border-b border-border sticky top-20 z-40">
      <div className="max-w-content mx-auto px-6 lg:px-16">
        <div className="flex gap-8 justify-center">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  'flex items-center gap-2 pb-4 pt-4 text-body font-medium transition-colors relative',
                  activeTab === tab.id
                    ? 'text-purple-primary'
                    : 'text-text-secondary hover:text-text-primary'
                )}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeMainTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-primary"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
