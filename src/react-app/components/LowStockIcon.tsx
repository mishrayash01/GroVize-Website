import { AlertTriangle } from 'lucide-react';

export const LowStockIcon = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <AlertTriangle className="w-1/2 h-1/2 text-orange-500" />
      <span className="absolute bottom-1 right-1 bg-red-500 text-white text-[8px] font-bold px-1 py-0.5 rounded">
        LOW
      </span>
    </div>
  );
};
