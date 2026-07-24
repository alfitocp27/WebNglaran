import { useEffect } from 'react'
import { X } from 'lucide-react'

interface PosterModalProps {
  imageUrl: string
  isOpen: boolean
  onClose: () => void
  title: string
}

export default function PosterModal({ imageUrl, isOpen, onClose, title }: PosterModalProps) {
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Poster ${title}`}
    >
      <div
        className="relative max-w-full max-h-[90vh] md:max-h-[85vh] bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-11 h-11 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Tutup poster"
        >
          <X className="w-5 h-5 text-white" />
        </button>
        <img
          src={imageUrl}
          alt={`Poster ${title}`}
          className="max-w-full max-h-[90vh] md:max-h-[85vh] object-contain rounded-2xl"
        />
      </div>
    </div>
  )
}
