import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { ActivityItem } from '@/src/types/content'

interface ActivityCardProps extends ActivityItem {
  className?: string
}

const FALLBACK_IMG = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" fill="%23e4e4e7"%3E%3Crect width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" fill="%2371717a" font-size="14" text-anchor="middle" dy=".3em"%3EGambar tidak tersedia%3C/text%3E%3C/svg%3E'

export default function ActivityCard({ title, description, schedule, images, className = '' }: ActivityCardProps) {
  const allImages = images && images.length > 0 ? images : [FALLBACK_IMG]
  const hasSlideshow = allImages.length > 1

  const [currentIdx, setCurrentIdx] = useState(0)
  const [imgSrc, setImgSrc] = useState(allImages[0])
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((idx: number) => {
    const next = (idx + allImages.length) % allImages.length
    setCurrentIdx(next)
    setImgSrc(allImages[next])
  }, [allImages])

  const goPrev = useCallback(() => goTo(currentIdx - 1), [goTo, currentIdx])
  const goNext = useCallback(() => goTo(currentIdx + 1), [goTo, currentIdx])

  useEffect(() => {
    if (!hasSlideshow) return
    intervalRef.current = setInterval(() => {
      setCurrentIdx(prev => {
        const next = (prev + 1) % allImages.length
        setImgSrc(allImages[next])
        return next
      })
    }, 3000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [hasSlideshow, allImages])

  const pauseSlideshow = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  const resumeSlideshow = () => {
    if (!hasSlideshow) return
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentIdx(prev => {
        const next = (prev + 1) % allImages.length
        setImgSrc(allImages[next])
        return next
      })
    }, 3000)
  }

  return (
    <article
      className={`stagger-card group border border-zinc-100 dark:border-zinc-700 rounded-2xl overflow-hidden bg-white dark:bg-zinc-800 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-500 flex flex-col ${className}`}
    >
      <div
        className="w-full relative border-b border-zinc-100 dark:border-zinc-700 aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-800"
        onMouseEnter={pauseSlideshow}
        onMouseLeave={resumeSlideshow}
      >
        <img
          src={imgSrc}
          alt={title}
          onError={() => setImgSrc(FALLBACK_IMG)}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />

        {hasSlideshow && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60"
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60"
              aria-label="Foto selanjutnya"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
              {allImages.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); goTo(i) }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIdx
                      ? 'bg-white w-3'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Foto ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-5 space-y-3 flex-1 flex flex-col">
        <h3 className="font-serif italic text-zinc-900 dark:text-zinc-100 group-hover:text-accent-800 dark:group-hover:text-accent transition-colors text-lg leading-tight">
          {title}
        </h3>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed line-clamp-2">{description}</p>
        <div className="mt-auto pt-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 dark:text-zinc-500 bg-zinc-50 dark:bg-zinc-700/50 rounded-full px-3 py-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {schedule}
          </span>
        </div>
      </div>
    </article>
  )
}
