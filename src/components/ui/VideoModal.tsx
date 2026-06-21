import { useEffect } from 'react'
import { X } from 'lucide-react'

interface VideoModalProps {
  videoUrl: string
  isOpen: boolean
  onClose: () => void
}

export default function VideoModal({ videoUrl, isOpen, onClose }: VideoModalProps) {
  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Pemutar video promosi"
    >
      <div
        className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-11 h-11 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
          aria-label="Tutup video"
        >
          <X className="w-5 h-5 text-white" />
        </button>
        <iframe
          src={`${videoUrl}?autoplay=1&rel=0`}
          title="Video promosi"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}
