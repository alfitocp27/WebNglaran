import { AnimatedPresenceCard } from '@/src/components/ui/AnimatedPresenceCard'
import { umkmList } from '@/src/data/umkm'

export default function UmkmSection() {
  return (
    <section
      id="umkm"
      className="py-24 lg:py-32 px-6 lg:px-12 xl:px-32 bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-zinc-400 dark:text-zinc-500 uppercase tracking-widest text-[10px] font-bold mb-4 block">
              Ekonomi Kreatif
            </span>
            <div className="space-y-[-5px]">
              <h2 className="reveal-header font-bold uppercase text-4xl lg:text-5xl leading-none tracking-tighter text-zinc-900 dark:text-zinc-100">
                Dukung
              </h2>
              <h2 className="reveal-header font-serif italic text-4xl lg:text-5xl leading-none tracking-tight text-zinc-900 dark:text-zinc-100">
                Karya Lokal.
              </h2>
            </div>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-sm text-xs leading-relaxed">
            Menghadirkan produk berkualitas dari tangan-tangan terampil warga Padukuhan Nglaran,
            memajukan perekonomian desa.
          </p>
        </div>

        <div className="stagger-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {umkmList.map((item) => (
            <AnimatedPresenceCard
              key={item.title}
              title={item.title}
              topText={item.category}
              description={item.description}
              imageUrl={item.imageUrl}
              buttonText="Hubungi Sekarang"
              buttonHref={item.whatsapp}
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
