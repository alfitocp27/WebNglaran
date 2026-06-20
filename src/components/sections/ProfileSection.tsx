import StatItem from '@/src/components/ui/StatItem'
import { stats, profileDescription } from '@/src/data/profile'

export default function ProfileSection() {
  return (
    <section
      id="profil"
      className="py-24 lg:py-32 px-6 lg:px-12 xl:px-32 bg-bg-base border-b border-zinc-100"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        <div className="lg:w-1/2">
          <div className="reveal-header space-y-[-5px] mb-8">
            <h2 className="font-serif italic text-4xl lg:text-6xl text-zinc-900 leading-none tracking-tight">
              Jantung kehangatan
            </h2>
            <h2 className="font-bold uppercase text-4xl lg:text-6xl text-zinc-900 leading-none tracking-tighter">
              Masyarakat
            </h2>
            <h2 className="font-serif italic text-4xl lg:text-6xl text-zinc-900 leading-none tracking-tight">
              yang guyub rukun.
            </h2>
          </div>

          <p className="reveal-header text-zinc-500 text-sm leading-relaxed mb-6">
            {profileDescription}
          </p>
        </div>

        <div className="lg:w-1/2 w-full pt-8 lg:pt-0 stats-container grid grid-cols-2 gap-x-8 gap-y-12">
          {stats.map((stat) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
