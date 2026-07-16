import { useEffect, useRef, useState } from 'react'

const DEFAULT_CENTER: [number, number] = [-7.889710, 110.580917]
const DEFAULT_ZOOM = 15
const GMAPS_URL = `https://www.google.com/maps?q=${DEFAULT_CENTER[0]},${DEFAULT_CENTER[1]}`

export default function InteractiveMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<unknown>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    const initMap = async () => {
      const L = (await import('leaflet')).default
      await import('leaflet/dist/leaflet.css')

      const map = L.map(mapRef.current!, {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
        scrollWheelZoom: false,
        zoomControl: false,
        dragging: false,
        touchZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
      })

      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; <a href="https://www.esri.com/">Esri</a>',
        maxZoom: 17,
      }).addTo(map)

      const icon = L.divIcon({
        html: `<div style="width:32px;height:32px;background:#A8BA9A;border:3px solid white;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>`,
        className: '',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      })

      L.marker(DEFAULT_CENTER, { icon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family:Inter,sans-serif;padding:4px 0;">
            <strong style="font-size:13px;color:#18181b;">Pendopo Dukuh Nglaran</strong><br/>
            <span style="font-size:11px;color:#71717a;">Nglaran, RT.03/RW.11, Ngalang, Gedang Sari, Gunungkidul</span>
          </div>`,
          { closeButton: false }
        )
        .openPopup()

      mapInstanceRef.current = map
      setLoaded(true)
    }

    initMap()

    return () => {
      if (mapInstanceRef.current) {
        ;(mapInstanceRef as React.MutableRefObject<{ remove: () => void }>).current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return (
    <a
      href={GMAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 group shadow-lg cursor-pointer"
      style={{ isolation: 'isolate' }}
    >
      <div ref={mapRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />
      
      {/* Click redirection overlay */}
      <div 
        className="absolute inset-0 bg-black/0 group-hover:bg-black/15 dark:group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center"
        style={{ zIndex: 2 }}
      >
        <div className="bg-black/75 backdrop-blur-md text-white text-xs font-semibold px-4 py-2.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md flex items-center gap-1.5">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          Buka Lokasi di Google Maps
        </div>
      </div>

      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-200 dark:bg-zinc-800" style={{ zIndex: 1 }}>
          <div className="text-center space-y-2">
            <div className="w-8 h-8 border-2 border-zinc-450 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Memuat peta...</p>
          </div>
        </div>
      )}
    </a>
  )
}

