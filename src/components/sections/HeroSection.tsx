import { ArrowRight, ChevronDown } from 'lucide-react'
import FloatingParticles from '@/src/components/ui/FloatingParticles'
import heroImg from '@/src/assets/nglaran cover.jpg'

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="hero-section relative h-screen w-full overflow-hidden flex items-end pb-20 md:pb-24 lg:pb-32 px-5 sm:px-6 lg:px-12 xl:px-32"
    >
        <div
          className="absolute inset-0 z-0"
          role="img"
          aria-label="Pemandangan perbukitan dan persawahan hijau Padukuhan Nglaran"
        >
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent z-10" />
          <img
            src={heroImg}
            alt=""
            className="hero-img w-full h-[110%] md:h-[120%] object-cover object-center absolute top-[-5%] md:top-[-10%]"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
        </div>

        <FloatingParticles />

        {/* Scroll Indicator */}
        <a
          href="#profil"
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer group"
          aria-label="Scroll ke bawah"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Gulir Kebawah</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>

      <div className="hero-text relative z-20 max-w-4xl pt-24 md:pt-32">
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <span className="h-[1px] w-8 md:w-12 bg-white" />
          <span className="text-white text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">
            Selamat Datang
          </span>
        </div>

        <div className="space-y-[-6px] md:space-y-[-10px] mb-6 md:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[100px] font-serif italic text-white leading-none tracking-tight">
            Padukuhan
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[100px] font-bold leading-none tracking-tighter uppercase text-white">
            Nglaran.
          </h1>
        </div>

        <p className="text-zinc-300 text-xs sm:text-sm md:text-base max-w-lg md:max-w-2xl leading-relaxed md:pr-4 font-light">
          Sebuah harmoni kehidupan di mana tradisi berakar kuat, alam yang lestari, dan komunitas
          yang terus bertumbuh menuju masa depan yang cerah.
        </p>

        <div className="mt-8 md:mt-10 flex items-center">
          <a
            href="#profil"
            className="group flex items-center justify-center gap-3 bg-white text-zinc-900 px-7 md:px-8 py-3.5 md:py-4 rounded-full text-[10px] md:text-xs uppercase tracking-widest font-bold transition-all hover:bg-zinc-200 w-full sm:w-auto"
          >
            Jelajahi Desa
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
