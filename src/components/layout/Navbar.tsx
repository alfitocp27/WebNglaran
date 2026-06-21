import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { navLinks, mobileNavLinks } from '@/src/data/navigation'

interface NavbarProps {
  isDark: boolean
  onToggleDark: () => void
}

export default function Navbar({ isDark, onToggleDark }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const check = () => {
      const hero = document.getElementById('beranda')
      if (!hero) return
      setIsScrolled(hero.getBoundingClientRect().bottom <= 0)
    }
    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])

  const linkClass = (base: string) =>
    `${base} text-xs uppercase tracking-widest font-bold transition-colors border-b border-transparent ${
      isScrolled
        ? 'text-[#71717a] hover:text-[#18181b] dark:text-[#a1a1aa] dark:hover:text-white hover:border-[#18181b] dark:hover:border-white'
        : 'text-[#ffffffb3] hover:text-white hover:border-white'
    }`

  const brandClass = isScrolled
    ? 'text-[#18181b] dark:text-white'
    : 'text-white'

  return (
    <>
      <nav
        aria-label="Navigasi utama"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-between items-center px-6 lg:px-12 xl:px-32 ${
          isScrolled
            ? 'bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md py-4 border-b border-zinc-100 dark:border-zinc-800'
            : 'bg-transparent py-6'
        }`}
      >
        <a href="#beranda" className={`flex flex-col transition-colors ${brandClass}`}>
          <span className="text-xs tracking-[0.3em] uppercase font-bold mb-1 opacity-70">
            Padukuhan
          </span>
          <span className="text-2xl font-serif italic leading-none">Nglaran.</span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href} className={linkClass('')}>
              {item.label}
            </a>
          ))}
          <button
            onClick={onToggleDark}
            className={`p-2.5 rounded-full transition-colors ${
              isScrolled
                ? 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                : 'text-white/70 hover:text-white'
            }`}
            aria-label={isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <button
            onClick={onToggleDark}
            className={`p-2.5 transition-colors ${brandClass}`}
            aria-label={isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className={`p-2.5 -mr-2 transition-colors ${brandClass}`}
            aria-label="Buka menu"
            aria-expanded={isOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <a
          href="#kontak"
          className={`hidden lg:block px-6 py-2 border rounded-full text-xs uppercase tracking-tighter font-bold transition-all cursor-pointer ${
            isScrolled
              ? 'border-zinc-900 dark:border-white text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900'
              : 'border-white text-white hover:bg-white hover:text-zinc-900'
          }`}
        >
          Hubungi Kami
        </a>
      </nav>

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
        className={`fixed inset-0 bg-zinc-900 z-[60] transition-transform duration-500 origin-top ${
          isOpen ? 'scale-y-100 pointer-events-auto' : 'scale-y-0 pointer-events-none'
        } lg:hidden flex flex-col`}
      >
        <div className="p-6 flex justify-between items-center">
          <button
            onClick={onToggleDark}
            className="p-3 text-white/50 hover:text-white transition-colors"
            aria-label={isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
          >
            {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-3 text-white/50 hover:text-white"
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
