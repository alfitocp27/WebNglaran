import { useEffect, useRef, useState } from 'react'

const DEFAULT_CENTER: [number, number] = [-7.7956, 110.3695]
const DEFAULT_ZOOM = 15

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
      })

      L.control.zoom({ position: 'bottomright' }).addTo(map)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
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
            <strong style="font-size:14px;">Balai Padukuhan Nglaran</strong><br/>
            <span style="font-size:12px;color:#71717a;">Jl. Tentram No. 12, DIY</span>
          </div>`,
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
    <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800" style={{ isolation: 'isolate' }}>
      <div ref={mapRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-200 dark:bg-zinc-800" style={{ zIndex: 1 }}>
          <div className="text-center space-y-2">
            <div className="w-8 h-8 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Memuat peta...</p>
          </div>
        </div>
      )}
    </div>
  )
}
