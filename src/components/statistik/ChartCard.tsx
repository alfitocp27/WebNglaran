import React from 'react';


interface ChartCardProps {
  title: string;
  children: React.ReactNode;
}

export default function ChartCard({ title, children }: ChartCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700/50 flex flex-col h-full">
      <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-6 text-center lg:text-left">
        {title}
      </h3>
      <div className="w-full h-[320px] min-h-[320px] relative overflow-x-auto overflow-y-hidden mobile-scrollbar">
        {children}
      </div>
    </div>
  );
}
