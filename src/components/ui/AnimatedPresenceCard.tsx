import { useState, useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Play } from 'lucide-react'
import { cn } from '@/src/lib/utils'
import VideoModal from '@/src/components/ui/VideoModal'
import PosterModal from '@/src/components/ui/PosterModal'

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&h=400&fit=crop'

interface AnimatedPresenceCardProps {
  topText: string
  imageUrl: string
  title: ReactNode
  description: string
  buttonText: string
  buttonHref?: string
  footerLeft: ReactNode
  footerRight: ReactNode
  className?: string
  hasVideo?: boolean
  videoUrl?: string
  posterUrl?: string
}

export function AnimatedPresenceCard({
  topText,
  imageUrl,
  title,
  description,
  buttonText,
  buttonHref = '#',
  footerLeft,
  footerRight,
  className,
  hasVideo = false,
  videoUrl,
  posterUrl,
}: AnimatedPresenceCardProps) {
  const [videoOpen, setVideoOpen] = useState(false)
  const [posterOpen, setPosterOpen] = useState(false)
  const [imgSrc, setImgSrc] = useState(imageUrl)
  const ref = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-150, 150], [10, -10])
  const rotateY = useTransform(mouseX, [-200, 200], [-10, 10])

  const springConfig = { damping: 20, stiffness: 150 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const handleImgError = () => {
    setImgSrc(FALLBACK_IMG)
  }

  const isVideoVisible = hasVideo && videoUrl && imgSrc !== FALLBACK_IMG

  return (
    <>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
        className={cn(
          'group relative w-full overflow-hidden rounded-[2rem] bg-zinc-900 border border-zinc-800 shadow-xl',
          'text-white transition-all duration-300 ease-out hover:shadow-2xl hover:border-zinc-700',
          className,
        )}
      >
        <div style={{ transform: 'translateZ(20px)' }} className="relative h-full flex flex-col">
          <div className="absolute top-6 left-6 z-20 text-xs font-bold uppercase tracking-widest text-white/90 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
            {topText}
          </div>

          <div className="relative h-56 md:h-64 overflow-hidden rounded-t-[2rem] bg-zinc-800">
            <img
              src={imgSrc}
              alt={typeof title === 'string' ? title : ''}
              onError={handleImgError}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {isVideoVisible && (
              <button
                onClick={() => setVideoOpen(true)}
                className="absolute inset-0 flex items-center justify-center z-20 transition-colors"
                aria-label="Putar video promosi"
              >
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md flex items-center justify-center rounded-full border border-white/40 shadow-lg group-hover:bg-white/30 transition-colors">
                  <Play fill="white" className="w-6 h-6 text-white ml-1" />
                </div>
              </button>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10 pointer-events-none" />
          </div>

          <div className="p-6 md:p-8 flex-grow flex flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-serif italic leading-tight text-white">
              {title}
            </h2>
            <p className="mt-3 text-zinc-400 text-sm leading-relaxed flex-grow">{description}</p>
            <div className="mt-6 md:mt-8 flex flex-wrap gap-x-6 gap-y-2 items-center">
              {buttonHref && (
                <a
                  href={buttonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:text-zinc-300 py-2 border-b border-transparent hover:border-zinc-300 min-h-[44px]"
                >
                  {buttonText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              )}
              {posterUrl && (
                <button
                  onClick={() => setPosterOpen(true)}
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:text-zinc-300 py-2 border-b border-transparent hover:border-zinc-300 min-h-[44px] cursor-pointer"
                >
                  Lihat Poster
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-zinc-800 p-4 md:p-6 text-xs text-zinc-500 font-mono">
            <span>{footerLeft}</span>
            <span>{footerRight}</span>
          </div>
        </div>
      </motion.div>

      {videoUrl && (
        <VideoModal
          videoUrl={videoUrl}
          isOpen={videoOpen}
          onClose={() => setVideoOpen(false)}
        />
      )}
      {posterUrl && (
        <PosterModal
          imageUrl={posterUrl}
          isOpen={posterOpen}
          onClose={() => setPosterOpen(false)}
          title={typeof title === 'string' ? title : 'UMKM'}
        />
      )}
    </>
  )
}
