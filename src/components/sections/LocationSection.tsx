import { MapPin } from 'lucide-react'

export default function LocationSection() {
  return (
    <section
      id="lokasi"
      className="py-24 lg:py-32 px-6 lg:px-12 xl:px-32 bg-bg-base relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="space-y-[-5px] mb-6 text-center">
          <h2 className="reveal-header font-bold uppercase text-4xl lg:text-5xl leading-none tracking-tighter">
            Temukan
          </h2>
          <h2 className="reveal-header font-serif italic text-4xl lg:text-5xl leading-none tracking-tight">
            Kami.
          </h2>
        </div>

        <p className="reveal-header text-zinc-500 max-w-lg text-center mb-16 text-sm leading-relaxed">
          Berkunjunglah dan rasakan langsung kehangatan Padukuhan Nglaran. Peta digital sedang
          dalam pengembangan. Versi peta fisik tersedia di Balai Padukuhan.
        </p>

        <div className="w-full aspect-[4/3] md:aspect-[21/9] bg-zinc-200 rounded-3xl relative overflow-hidden group border border-zinc-300">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-2 relative z-10">
              <div className="w-16 h-16 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform cursor-pointer shadow-sm">
                <MapPin className="w-6 h-6 text-zinc-600" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 block">
                Peta Digital Padukuhan
              </span>
              <p className="text-[10px] text-zinc-400 px-8">
                Sistem Informasi Geografis (SIG) Terintegrasi
              </p>
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-zinc-200 shadow-sm flex items-center justify-between">
            <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-600">
              Skala 1:500
            </p>
            <p className="text-[10px] leading-tight text-zinc-500 font-medium hidden sm:block">
              Tersedia cetak fisik di Kantor Balai Padukuhan.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
