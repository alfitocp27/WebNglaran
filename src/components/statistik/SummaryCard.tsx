
interface SummaryCardProps {
  title: string;
  value: number;
}

export default function SummaryCard({ title, value }: SummaryCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700/50 flex flex-col justify-center items-center text-center transition-all hover:shadow-md">
      <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
        {title}
      </h3>
      <div className="text-4xl font-serif italic text-zinc-900 dark:text-white">
        {value.toLocaleString("id-ID")}
      </div>
    </div>
  );
}
