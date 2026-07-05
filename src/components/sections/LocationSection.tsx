import InteractiveMap from '@/src/components/ui/InteractiveMap'

export default function LocationSection() {
  return (
    <section
      id="lokasi"
      className="py-16 md:py-24 lg:py-32 px-5 sm:px-6 lg:px-12 xl:px-32 bg-bg-base relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="space-y-[-3px] md:space-y-[-5px] mb-6 text-center">
          <h2 className="reveal-header font-bold uppercase text-3xl md:text-4xl lg:text-5xl leading-none tracking-tighter text-zinc-900 dark:text-zinc-100">
            Temukan
          </h2>
          <h2 className="reveal-header font-serif italic text-3xl md:text-4xl lg:text-5xl leading-none tracking-tight text-zinc-900 dark:text-zinc-100">
            Kami.
          </h2>
        </div>

        <p className="reveal-header text-zinc-500 dark:text-zinc-400 max-w-lg text-center mb-16 text-sm leading-relaxed">
          Berkunjunglah dan rasakan langsung kehangatan Padukuhan Nglaran.
          Peta interaktif membantu Anda menemukan lokasi Balai Padukuhan.
        </p>

        <div className="parallax-map w-full">
          <InteractiveMap />
        </div>
      </div>
    </section>
  )
}
