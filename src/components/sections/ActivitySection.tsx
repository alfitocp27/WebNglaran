import ActivityCard from '@/src/components/ui/ActivityCard'
import { activities } from '@/src/data/activities'

export default function ActivitySection() {
  return (
    <section
      id="kegiatan"
      className="py-24 lg:py-32 px-6 lg:px-12 xl:px-32 bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-zinc-400 dark:text-zinc-500 uppercase tracking-widest text-[10px] font-bold mb-4 block">
            Agenda Desa
          </span>
          <div className="space-y-[-5px]">
            <h2 className="reveal-header font-bold uppercase text-4xl lg:text-5xl leading-none tracking-tighter text-zinc-900 dark:text-zinc-100">
              Denyut Nadi
            </h2>
            <h2 className="reveal-header font-serif italic text-4xl lg:text-5xl leading-none tracking-tight text-zinc-900 dark:text-zinc-100">
              kehidupan Nglaran.
            </h2>
          </div>
        </div>

        <div className="stagger-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {activities.map((item) => (
            <ActivityCard
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
