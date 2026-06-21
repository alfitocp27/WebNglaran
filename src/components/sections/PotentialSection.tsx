import { Droplets, Sun } from 'lucide-react'
import { potentials } from '@/src/data/potentials'

export default function PotentialSection() {
  return (
    <section
      id="potensi"
      className="py-24 lg:py-32 px-6 lg:px-12 xl:px-32 bg-zinc-50/50 dark:bg-zinc-900/50 border-b border-zinc-100 dark:border-zinc-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-zinc-400 dark:text-zinc-500 uppercase tracking-widest text-xs font-bold mb-4 block">
            Potensi Desa
          </span>
          <div className="space-y-[-5px]">
            <h2 className="reveal-header font-bold uppercase text-4xl lg:text-5xl leading-none tracking-tighter text-zinc-900 dark:text-zinc-100">
              Kekayaan Alam
            </h2>
            <h2 className="reveal-header font-serif italic text-4xl lg:text-5xl leading-none tracking-tight text-zinc-900 dark:text-zinc-100">
              yang terus dirawat.
            </h2>
          </div>
        </div>

        <div className="stagger-container parallax-potensi grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {potentials.map((item, i) => {
            const Icon = i === 1 ? Droplets : i === 2 ? Sun : null
            return (
              <div
                key={item.title}
                className={`stagger-card ${
                  item.isDark
                    ? 'bg-zinc-900 dark:bg-zinc-950 text-white shadow-xl overflow-hidden relative'
                    : item.isAccent
                      ? 'bg-accent text-white'
                      : 'bg-white dark:bg-zinc-800/80 p-6 md:p-10 border border-zinc-100 dark:border-zinc-700 shadow-sm dark:shadow-zinc-900/50'
                } ${item.colSpan || ''} p-6 md:p-10 rounded-3xl flex flex-col justify-between items-start group`}
              >
                {item.isDark && (
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-accent/30 transition-all" />
                )}
                <div className="relative z-10 flex justify-between items-start w-full mb-8">
                  <span
                    className={`text-xs uppercase tracking-widest font-bold ${
                      item.isDark
                        ? 'text-zinc-500'
                        : item.isAccent
                          ? 'text-accent-800 opacity-80'
                          : 'text-zinc-400 dark:text-zinc-500'
                    }`}
                  >
                    {i === 0
                      ? 'Potensi Lokal'
                      : i === 1
                        ? 'Sumber Daya'
                        : i === 2
                          ? 'Inovasi'
                          : 'Warisan Nusantara'}
                  </span>
                  {Icon && (
                    <Icon
                      className={`w-6 h-6 ${
                        item.isDark ? 'text-zinc-400' : 'text-accent-100'
                      }`}
                      aria-hidden="true"
                    />
                  )}
                  {!Icon && !item.isAccent && (
                    <div
                      className="w-8 h-8 bg-zinc-900 dark:bg-zinc-600 text-white rounded-full flex items-center justify-center text-xs group-hover:bg-accent dark:group-hover:bg-accent transition-colors"
                      aria-hidden="true"
                    >
                      +
                    </div>
                  )}
                </div>
                <div className="relative z-10">
                  <h3
                    className={`${
                      item.isDark
                        ? 'font-bold text-2xl tracking-tighter uppercase'
                        : item.isAccent
                          ? 'font-serif italic text-2xl'
                          : 'font-serif italic text-3xl text-zinc-900 dark:text-zinc-100'
                    } mb-4 ${item.isAccent ? 'text-white' : ''}`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed max-w-md ${
                      item.isDark
                        ? 'text-zinc-400'
                        : item.isAccent
                          ? 'text-accent-100'
                          : 'text-zinc-500 dark:text-zinc-400'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
