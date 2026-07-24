import { AnimatedPresenceCard } from '@/src/components/ui/AnimatedPresenceCard'
import { umkmList } from '@/src/data/umkm'

export default function UmkmSection() {
  return (
    <section
      id="umkm"
      className="py-16 md:py-24 lg:py-32 px-5 sm:px-6 lg:px-12 xl:px-32 bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4 md:gap-6">
          <div>
            <span className="text-zinc-400 dark:text-zinc-500 uppercase tracking-widest text-xs font-bold mb-4 block">
              Ekonomi Kreatif
            </span>
            <div className="space-y-[-3px] md:space-y-[-5px]">
              <h2 className="reveal-header font-bold uppercase text-3xl md:text-4xl lg:text-5xl leading-none tracking-tighter text-zinc-900 dark:text-zinc-100">
                Dukung
              </h2>
              <h2 className="reveal-header font-serif italic text-3xl md:text-4xl lg:text-5xl leading-none tracking-tight text-zinc-900 dark:text-zinc-100">
                Karya Lokal.
              </h2>
            </div>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-sm text-xs leading-relaxed">
            Menghadirkan produk berkualitas dari tangan-tangan terampil warga Padukuhan Nglaran,
            memajukan perekonomian dukuh.
          </p>
        </div>

        <div className="stagger-container flex flex-wrap justify-center gap-6">
          {umkmList.map((item) => (
            <AnimatedPresenceCard
              key={item.title}
              className="w-full max-w-[380px]"
              title={item.title}
              topText={item.category}
              description={item.description}
              imageUrl={item.imageUrl}
              buttonText="Petunjuk Arah"
              buttonHref={item.mapsUrl}
              posterUrl={item.posterUrl}
              footerLeft={item.title.split(' ').slice(0, 2).join(' ')}
              footerRight={item.location}
              hasVideo={item.hasVideo}
              videoUrl={item.videoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
