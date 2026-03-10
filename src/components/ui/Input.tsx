import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'w-full h-[52px] px-4 bg-background-secondary border rounded-[10px]',
          'text-text-primary placeholder:text-text-tertiary',
          'transition-all duration-200',
          'focus:outline-none focus:border-purple-primary focus:ring-2 focus:ring-purple-primary/10',
          error ? 'border-red-500' : 'border-border',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
