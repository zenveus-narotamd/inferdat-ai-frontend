import { forwardRef, type HTMLAttributes } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onDrag' | 'onDragStart' | 'onDragEnd'> {
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, children, ...props }, ref) => {
    if (!hover) {
      return (
        <div
          ref={ref}
          className={cn(
            'bg-background-secondary border border-border rounded-2xl p-6',
            'transition-all duration-300',
            className
          )}
          {...props}
        >
          {children}
        </div>
      );
    }

    const motionProps: HTMLMotionProps<'div'> = {
      ref,
      className: cn(
        'bg-background-secondary border border-border rounded-2xl p-6',
        'transition-all duration-300',
        'hover:shadow-lg hover:border-purple-primary/30 cursor-pointer',
        className
      ),
      whileHover: { y: -4, scale: 1.01 },
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
    };

    return (
      <motion.div {...motionProps}>
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
