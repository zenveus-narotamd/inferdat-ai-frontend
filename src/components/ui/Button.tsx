import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'gradient-primary text-white shadow-purple hover:-translate-y-0.5 hover:shadow-purple-lg',
      secondary: 'bg-transparent border border-border text-text-primary hover:border-purple-primary hover:text-purple-primary',
      ghost: 'bg-transparent text-text-secondary hover:text-purple-primary hover:bg-purple-primary/5',
    };
    
    const sizes = {
      sm: 'px-5 py-2.5 text-sm',
      md: 'px-8 py-4 text-base',
      lg: 'px-10 py-5 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
