import { ArrowRight } from 'lucide-react'
import FloatingParticles from '@/src/components/ui/FloatingParticles'

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="hero-section relative h-screen w-full overflow-hidden flex items-end pb-24 lg:pb-32 px-6 lg:px-12 xl:px-32"
    >
        <div
          className="absolute inset-0 z-0"
          role="img"
          aria-label="Pemandangan perbukitan dan persawahan hijau Padukuhan Nglaran"
        >
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2670&auto=format&fit=crop"
            alt=""
            className="hero-img w-full h-[120%] object-cover object-center absolute top-[-10%]"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
        </div>

        <FloatingParticles />

      <div className="hero-text relative z-20 max-w-4xl pt-32">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-[1px] w-12 bg-white" />
          <span className="text-white text-xs tracking-[0.3em] uppercase font-bold">
            Selamat Datang
          </span>
        </div>

        <div className="space-y-[-10px] mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-serif italic text-white leading-none tracking-tight">
            Padukuhan
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-bold leading-none tracking-tighter uppercase text-white">
            Nglaran.
          </h1>
        </div>

        <p className="text-zinc-300 text-sm md:text-base max-w-2xl leading-relaxed pr-4 font-light">
          Sebuah harmoni kehidupan di mana tradisi berakar kuat, alam yang lestari, dan komunitas
          yang terus bertumbuh menuju masa depan yang cerah.
        </p>

        <div className="mt-10 flex items-center gap-6">
          <a
            href="#profil"
            className="group flex items-center gap-3 bg-white text-zinc-900 px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold transition-all hover:bg-zinc-200"
          >
            Jelajahi Desa
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
