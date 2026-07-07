import type { NavLink } from '../types/content'

export const navLinks: NavLink[] = [
  { label: 'Profil', href: '#profil' },
  { label: 'Statistik', href: '#statistik' },
  { label: 'Potensi', href: '#potensi' },
  { label: 'Kegiatan', href: '#kegiatan' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'UMKM', href: '#umkm' },
  { label: 'Lokasi', href: '#lokasi' },
]

export const mobileNavLinks: NavLink[] = [
  { label: 'Beranda', href: '#beranda' },
  ...navLinks,
]
