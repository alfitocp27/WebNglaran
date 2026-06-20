import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, type PanInfo } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/src/lib/utils'

export type FocusRailItem = {
  id: string | number
  title: string
  description?: string
  imageSrc: string
  href?: string
  meta?: string
}

interface FocusRailProps {
  items: FocusRailItem[]
  initialIndex?: number
  loop?: boolean
  autoPlay?: boolean
  interval?: number
  className?: string
}

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

const BASE_SPRING = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30,
  mass: 1,
}

const TAP_SPRING = {
  type: 'spring' as const,
  stiffness: 450,
  damping: 18,
  mass: 1,
}

export function FocusRail({
  items,
  initialIndex = 0,
  loop = true,
  autoPlay = false,
  interval = 2500,
  className,
}: FocusRailProps) {
  const [active, setActive] = useState(initialIndex)
  const [isHovering, setIsHovering] = useState(false)
  const lastWheelTime = useRef<number>(0)

  const count = items.length
  const activeIndex = wrap(0, count, active)
  const activeItem = items[activeIndex]

  const handlePrev = useCallback(() => {
    if (!loop && active === 0) return
    setActive((p) => p - 1)
  }, [loop, active])

  const handleNext = useCallback(() => {
    if (!loop && active === count - 1) return
    setActive((p) => p + 1)
  }, [loop, active, count])

  const onWheel = useCallback(
    (e: React.WheelEvent) => {
      const now = Date.now()
      if (now - lastWheelTime.current < 400) return

      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY)
      const delta = isHorizontal ? e.deltaX : e.deltaY

      if (Math.abs(delta) > 20) {
        if (delta > 0) handleNext()
        else handlePrev()
        lastWheelTime.current = now
      }
    },
    [handleNext, handlePrev],
  )

  useEffect(() => {
    if (!autoPlay || isHovering) return
    const timer = setInterval(() => handleNext(), interval)
    return () => clearInterval(timer)
  }, [autoPlay, isHovering, handleNext, interval])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrev()
    if (e.key === 'ArrowRight') handleNext()
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity

  const onDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x)
    if (swipe < -swipeConfidenceThreshold) handleNext()
    else if (swipe > swipeConfidenceThreshold) handlePrev()
  }

  const visibleIndices = [-2, -1, 0, 1, 2]

  return (
    <div
      className={cn(
        'group relative flex h-[600px] w-full flex-col overflow-hidden bg-transparent text-zinc-900 outline-none select-none',
        className,
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onWheel={onWheel}
    >
      <div className="relative z-10 flex flex-1 flex-col justify-center px-4 md:px-8 pt-8">
        <motion.div
          className="relative mx-auto flex h-[360px] w-full max-w-6xl items-center justify-center perspective-[1200px] cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={onDragEnd}
        >
          {visibleIndices.map((offset) => {
            const absIndex = active + offset
            const index = wrap(0, count, absIndex)
            const item = items[index]

            if (!loop && (absIndex < 0 || absIndex >= count)) return null

            const isCenter = offset === 0
            const dist = Math.abs(offset)
            const xOffset = offset * 320
            const zOffset = -dist * 180
            const scale = isCenter ? 1 : 0.85
            const rotateY = offset * -20
            const opacity = isCenter ? 1 : Math.max(0.1, 1 - dist * 0.5)
            const brightness = isCenter ? 1 : 0.7

            return (
              <motion.div
                key={absIndex}
                className={cn(
                  'absolute aspect-[3/4] w-[260px] md:w-[300px] rounded-2xl border-t border-white/20 bg-neutral-900 shadow-2xl transition-shadow duration-300',
                  isCenter ? 'z-20 shadow-white/10' : 'z-10',
                )}
                initial={false}
                animate={{
                  x: xOffset,
                  z: zOffset,
                  scale,
                  rotateY,
                  opacity,
                  filter: `blur(0px) brightness(${brightness})`,
                }}
                transition={(val: string) => (val === 'scale' ? TAP_SPRING : BASE_SPRING)}
                style={{ transformStyle: 'preserve-3d' }}
                onClick={() => {
                  if (offset !== 0) setActive((p) => p + offset)
                }}
              >
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="h-full w-full rounded-2xl object-cover pointer-events-none"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                <div className="absolute inset-0 rounded-2xl bg-black/10 pointer-events-none mix-blend-multiply" />
              </motion.div>
            )
          })}
        </motion.div>

        <div className="mx-auto mt-6 flex w-full max-w-4xl flex-col items-center justify-center gap-6 pointer-events-auto">
          <div className="flex flex-col items-center text-center h-16 justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 font-serif italic">
                  {activeItem.title}
                </h2>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 rounded-full bg-white/80 p-1 ring-1 ring-zinc-200 shadow-sm backdrop-blur-md">
              <button
                onClick={handlePrev}
                className="rounded-full p-3 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 active:scale-95"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="min-w-[40px] text-center text-xs font-mono text-zinc-400">
                {activeIndex + 1} / {count}
              </span>
              <button
                onClick={handleNext}
                className="rounded-full p-3 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 active:scale-95"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
