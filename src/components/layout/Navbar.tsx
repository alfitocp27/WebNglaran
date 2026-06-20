import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, mobileNavLinks } from '@/src/data/navigation'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClass = (base: string) =>
    `${base} text-[11px] uppercase tracking-widest font-bold transition-colors border-b border-transparent ${
      isScrolled
        ? 'text-zinc-500 hover:text-zinc-900 hover:border-zinc-900'
        : 'text-white/70 hover:text-white hover:border-white'
    }`

  const brandClass = isScrolled ? 'text-zinc-900' : 'text-white'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-between items-center px-6 lg:px-12 xl:px-32 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md py-4 border-b border-zinc-100'
            : 'bg-transparent py-6'
        }`}
      >
        <a href="#beranda" className={`flex flex-col transition-colors ${brandClass}`}>
          <span className="text-[10px] tracking-[0.3em] uppercase font-bold mb-1 opacity-70">
            Padukuhan
          </span>
          <span className="text-2xl font-serif italic leading-none">Nglaran.</span>
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href} className={linkClass('')}>
              {item.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className={`lg:hidden p-2 -mr-2 transition-colors ${brandClass}`}
          aria-label="Buka menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        <a
          href="#kontak"
          className={`hidden lg:block px-6 py-2 border rounded-full text-[10px] uppercase tracking-tighter font-bold transition-all cursor-pointer ${
            isScrolled
              ? 'border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white'
              : 'border-white text-white hover:bg-white hover:text-zinc-900'
          }`}
        >
          Hubungi Kami
        </a>
      </nav>

      <div
        className={`fixed inset-0 bg-zinc-900 z-[60] transition-transform duration-500 origin-top ${
          isOpen ? 'scale-y-100' : 'scale-y-0'
        } lg:hidden flex flex-col`}
      >
        <div className="p-6 flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-white/50 hover:text-white"
            aria-label="Tutup menu"
          >
            <X className="w-8 h-8" />
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-8 pb-20 text-center">
          {mobileNavLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="font-bold uppercase tracking-tighter text-3xl text-white hover:text-zinc-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
