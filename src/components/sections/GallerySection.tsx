import { FocusRail } from '@/src/components/ui/FocusRail'
import { galleryItems } from '@/src/data/gallery'

export default function GallerySection() {
  return (
    <section
      id="galeri"
      className="py-16 md:py-24 lg:py-32 px-5 sm:px-6 lg:px-12 xl:px-32 bg-zinc-50/50 dark:bg-zinc-900/50 border-b border-zinc-100 dark:border-zinc-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <div className="space-y-[-3px] md:space-y-[-5px]">
            <h2 className="reveal-header font-serif italic text-3xl md:text-4xl lg:text-5xl leading-none tracking-tight text-zinc-900 dark:text-zinc-100">
              Rekam Jejak
            </h2>
            <h2 className="reveal-header font-bold uppercase text-3xl md:text-4xl lg:text-5xl leading-none tracking-tighter text-zinc-900 dark:text-zinc-100">
              Kebersamaan.
            </h2>
          </div>
        </div>

        <div className="gallery-container w-full mt-4">
          <FocusRail items={galleryItems} autoPlay={true} />
        </div>
      </div>
    </section>
  )
}
