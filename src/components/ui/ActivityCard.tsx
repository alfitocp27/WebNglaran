import type { ActivityItem } from '@/src/types/content'

interface ActivityCardProps extends ActivityItem {
  className?: string
}

export default function ActivityCard({ title, description, image, className = '' }: ActivityCardProps) {
  return (
    <div
      className={`stagger-card group cursor-pointer border border-zinc-100 rounded-3xl overflow-hidden bg-bg-base hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 flex flex-col ${className}`}
    >
      <div className="w-full relative border-b border-zinc-100 aspect-[4/3] md:aspect-[3/2] overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none backdrop-grayscale-[0.5] group-hover:backdrop-grayscale-0" />
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
      </div>
      <div className="p-6 lg:p-8 space-y-3 flex-1 flex flex-col justify-start bg-white relative z-20">
        <h3 className="font-serif italic text-zinc-900 group-hover:text-accent-800 transition-colors text-2xl">
          {title}
        </h3>
        <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
