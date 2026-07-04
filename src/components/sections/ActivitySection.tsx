import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ActivityCard from '@/src/components/ui/ActivityCard'
import { activities } from '@/src/data/activities'

const PER_PAGE = 6

export default function ActivitySection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(0)

  const totalPages = Math.ceil(activities.length / PER_PAGE)

  const pages: (typeof activities)[] = []
  for (let i = 0; i < totalPages; i++) {
    pages.push(activities.slice(i * PER_PAGE, i * PER_PAGE + PER_PAGE))
  }

  const updatePage = useCallback(() => {
    if (!scrollRef.current) return
    const scrollLeft = scrollRef.current.scrollLeft
    const width = scrollRef.current.offsetWidth
    const page = Math.round(scrollLeft / width)
    setCurrentPage(Math.min(page, totalPages - 1))
  }, [totalPages])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', updatePage, { passive: true })
    return () => el.removeEventListener('scroll', updatePage)
  }, [updatePage])

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const width = scrollRef.current.offsetWidth
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -width : width,
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="kegiatan"
      className="py-24 lg:py-32 px-6 lg:px-12 xl:px-32 bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-zinc-400 dark:text-zinc-500 uppercase tracking-widest text-xs font-bold mb-4 block">
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

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Selanjutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {pages.map((page, pageIdx) => (
            <div
              key={pageIdx}
              className="snap-center shrink-0 w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {page.map((item) => (
                  <ActivityCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    schedule={item.schedule}
                    image={item.image}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!scrollRef.current) return
                const width = scrollRef.current.offsetWidth
                scrollRef.current.scrollTo({ left: width * i, behavior: 'smooth' })
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentPage
                  ? 'bg-zinc-900 dark:bg-zinc-100'
                  : 'bg-zinc-300 dark:bg-zinc-600'
              }`}
              aria-label={`Halaman ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
