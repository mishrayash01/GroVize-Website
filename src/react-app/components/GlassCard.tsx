import React from 'react';
import { cn } from '@/lib/utils'; // Assuming you have a utility for class names

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        'bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:bg-white/20',
        className
      )}
    >
      {children}
    </div>
  );
}
