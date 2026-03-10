import { forwardRef, type SelectHTMLAttributes } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            'w-full h-[52px] px-4 pr-10 bg-background-secondary border rounded-[10px]',
            'text-text-primary appearance-none',
            'transition-all duration-200',
            'focus:outline-none focus:border-purple-primary focus:ring-2 focus:ring-purple-primary/10',
            error ? 'border-red-500' : 'border-border',
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary pointer-events-none" />
      </div>
    );
  }
);

Select.displayName = 'Select';
