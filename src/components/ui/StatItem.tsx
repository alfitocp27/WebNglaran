interface StatItemProps {
  value: string
  label: string
}

export default function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="stat-item flex flex-col gap-2 border-t border-zinc-200 pt-6">
      <div className="font-serif italic text-5xl lg:text-6xl font-light text-zinc-900 leading-none">
        {value}
      </div>
      <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium mt-1">
        {label}
      </div>
    </div>
  )
}
