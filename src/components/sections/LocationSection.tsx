import { useState } from 'react'
import { Map, Image, Download, ZoomIn, ZoomOut } from 'lucide-react'
import InteractiveMap from '@/src/components/ui/InteractiveMap'
import petaNglaran from '@/src/assets/peta/Peta Nglaran.jpg'

export default function LocationSection() {
  const [activeTab, setActiveTab] = useState<'interactive' | 'static'>('interactive')
  const [imageLoaded, setImageLoaded] = useState(false)
  const [scale, setScale] = useState(1)

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.5, 4))
  }

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.5, 1))
  }

  const handleTabChange = (tab: 'interactive' | 'static') => {
    setActiveTab(tab)
    if (tab === 'interactive') {
      setScale(1) // Reset zoom when switching tabs
    }
  }

  return (
    <section
      id="lokasi"
      className="py-16 md:py-24 lg:py-32 px-5 sm:px-6 lg:px-12 xl:px-32 bg-bg-base relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="space-y-[-3px] md:space-y-[-5px] mb-6 text-center">
          <h2 className="reveal-header font-bold uppercase text-3xl md:text-4xl lg:text-5xl leading-none tracking-tighter text-zinc-900 dark:text-zinc-100">
            Temukan
          </h2>
          <h2 className="reveal-header font-serif italic text-3xl md:text-4xl lg:text-5xl leading-none tracking-tight text-zinc-900 dark:text-zinc-100">
            Kami.
          </h2>
        </div>

        <p className="reveal-header text-zinc-500 dark:text-zinc-400 max-w-lg text-center mb-10 text-sm leading-relaxed">
          Berkunjunglah dan rasakan langsung kehangatan Padukuhan Nglaran.
          Gunakan peta interaktif atau lihat peta wilayah administrasi padukuhan.
        </p>

        {/* Tab Switcher - Minimalist */}
        <div className="reveal-header flex border-b border-zinc-200 dark:border-zinc-800/80 w-full max-w-sm justify-center mb-10">
          <button
            onClick={() => handleTabChange('interactive')}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 font-medium text-sm transition-all duration-200 cursor-pointer ${
              activeTab === 'interactive'
                ? 'border-accent text-zinc-900 dark:text-zinc-100'
                : 'border-transparent text-zinc-400 hover:text-zinc-655 dark:hover:text-zinc-200'
            }`}
          >
            <Map className="w-4 h-4" />
            <span>Lokasi Padukuhan</span>
          </button>
          <button
            onClick={() => handleTabChange('static')}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 font-medium text-sm transition-all duration-200 cursor-pointer ${
              activeTab === 'static'
                ? 'border-accent text-zinc-900 dark:text-zinc-100'
                : 'border-transparent text-zinc-400 hover:text-zinc-655 dark:hover:text-zinc-200'
            }`}
          >
            <Image className="w-4 h-4" />
            <span>Peta Padukuhan</span>
          </button>
        </div>

        {/* Map Container */}
        <div className="parallax-map w-full">
          {activeTab === 'interactive' ? (
            <InteractiveMap />
          ) : (
            <div className="space-y-4 w-full">
              {/* Header Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-4 rounded-2xl gap-3 sm:gap-0 shadow-sm">
                <div>
                  <h3 className="font-bold text-sm md:text-base text-zinc-900 dark:text-zinc-100">
                    Peta Administrasi Padukuhan Nglaran
                  </h3>
                  <p className="text-[10px] md:text-xs text-zinc-500 dark:text-zinc-400">
                    Tampilan peta administratif secara lengkap dan tanpa pemotongan.
                  </p>
                </div>
                <a
                  href={petaNglaran}
                  download="Peta Padukuhan Nglaran.jpg"
                  className="flex items-center gap-2 px-4 py-2.5 bg-accent hover:bg-accent/90 active:scale-95 transition-all text-xs font-semibold text-white rounded-xl shadow-md cursor-pointer self-stretch sm:self-auto justify-center"
                >
                  <Download className="w-4 h-4" />
                  <span>Unduh Peta HD</span>
                </a>
              </div>

              {/* Inline Full Image Container */}
              <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900/40 shadow-lg">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-200 dark:bg-zinc-800 z-10">
                    <div className="text-center space-y-2">
                      <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto" />
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">Memuat peta padukuhan...</p>
                    </div>
                  </div>
                )}

                {/* Floating Zoom Controls */}
                {imageLoaded && (
                  <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-2">
                    <button
                      onClick={handleZoomIn}
                      disabled={scale >= 4}
                      className="p-2.5 bg-white/90 dark:bg-zinc-800/90 hover:bg-white dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-100 rounded-xl shadow-md border border-zinc-200/50 dark:border-zinc-700 transition-colors disabled:opacity-50 cursor-pointer flex items-center justify-center"
                      title="Perbesar"
                    >
                      <ZoomIn className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleZoomOut}
                      disabled={scale <= 1}
                      className="p-2.5 bg-white/90 dark:bg-zinc-800/90 hover:bg-white dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-100 rounded-xl shadow-md border border-zinc-200/50 dark:border-zinc-700 transition-colors disabled:opacity-50 cursor-pointer flex items-center justify-center"
                      title="Perkecil"
                    >
                      <ZoomOut className="w-5 h-5" />
                    </button>
                  </div>
                )}

                {/* Scrollable Viewport */}
                <div className={`w-full h-full overflow-auto ${scale === 1 ? 'flex items-center justify-center p-2 md:p-4' : 'p-4'}`}>
                  <img
                    src={petaNglaran}
                    alt="Peta Administrasi Padukuhan Nglaran"
                    className={`select-none transition-all duration-350 ease-in-out ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    } ${
                      scale === 1 ? 'max-w-full max-h-full object-contain' : 'block max-w-none max-h-none'
                    }`}
                    style={
                      scale > 1
                        ? {
                            width: `${100 * scale}%`,
                            height: 'auto',
                          }
                        : {}
                    }
                    loading="lazy"
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}


