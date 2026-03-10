import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'w-full min-h-[100px] px-4 py-3 bg-background-secondary border rounded-[10px]',
          'text-text-primary placeholder:text-text-tertiary',
          'transition-all duration-200 resize-y',
          'focus:outline-none focus:border-purple-primary focus:ring-2 focus:ring-purple-primary/10',
          error ? 'border-red-500' : 'border-border',
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
