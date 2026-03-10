'use client';

import { Zap, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'h-20 bg-background-secondary/80 backdrop-blur-sm',
        'border-b border-border',
        className
      )}
    >
      <div className="h-full px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-h5 font-semibold text-text-primary">
            Inferdat AI
          </span>
        </div>

        {/* Right: User Info */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-background-tertiary transition-colors">
            <div className="w-8 h-8 rounded-full bg-purple-primary/10 flex items-center justify-center">
              <User className="w-4 h-4 text-purple-primary" />
            </div>
            <span className="text-sm font-medium text-text-primary hidden sm:block">
              User
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
