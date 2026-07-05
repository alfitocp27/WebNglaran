import { useEffect, useRef, useState } from 'react'

const DEFAULT_CENTER: [number, number] = [-7.889710, 110.580917]
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

      const gmapsUrl = `https://www.google.com/maps?q=${DEFAULT_CENTER[0]},${DEFAULT_CENTER[1]}`

      L.marker(DEFAULT_CENTER, { icon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family:Inter,sans-serif;padding:4px 0;">
            <strong style="font-size:14px;">Pendopo Dukuh Nglaran</strong><br/>
            <span style="font-size:12px;color:#71717a;">Nglaran, RT.03/RW.11, Ngalang, Gedang Sari, Gunungkidul</span><br/>
            <a href="${gmapsUrl}" target="_blank" rel="noopener" style="display:inline-block;margin-top:8px;padding:6px 12px;background:#A8BA9A;color:white;border-radius:6px;font-size:12px;font-weight:600;text-decoration:none;">Buka di Google Maps</a>
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
