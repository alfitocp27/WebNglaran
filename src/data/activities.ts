import type { ActivityItem } from '../types/content'

import imgGejogLesung from '../assets/kegiatan/kegiatan-gejog lesung.jpeg'
import imgGejogLesung2 from '../assets/kegiatan/kegiatan-gejog lesung 2.jpeg'
import imgGejogLesung3 from '../assets/kegiatan/kegiatan-gejog lesung 3.jpeg'
import imgJatilan from '../assets/kegiatan/kegiatan-jatilan.jpeg'
import imgJatilan2 from '../assets/kegiatan/kegiatan-jatilan2.jpeg'
import imgJatilan3 from '../assets/kegiatan/kegiatan-jatilan3.jpeg'
import imgJatilan4 from '../assets/kegiatan/kegiatan-jatilan4.jpeg'
import imgKarawitan from '../assets/kegiatan/kegiatan-karawitan.jpeg'
import imgKelompokTani from '../assets/kegiatan/kegiatan-kelompok tani.jpeg'
import imgKelompokTani2 from '../assets/kegiatan/kegiatan-kelompok tani 2.jpeg'
import imgPkk from '../assets/kegiatan/kegiatan-pkk.jpeg'
import imgPosyandu from '../assets/kegiatan/kegiatan-posyandu.jpeg'
import imgSenam from '../assets/kegiatan/kegiatan-senam ibu.jpeg'
import imgPertemuanWarga from '../assets/kegiatan/kegiatan-pertemuan warga.jpeg'
import imgPertemuanWarga2 from '../assets/kegiatan/kegiatan-pertemuan warga 2.jpeg'
import imgPertemuanWarga3 from '../assets/kegiatan/kegiatan-pertemuan warga 3.jpeg'

export const activities: ActivityItem[] = [
  {
    title: 'Pertemuan Warga',
    description: 'Pertemuan rutin warga untuk membahas perkembangan dan musyawarah dusun.',
    schedule: 'Sebulan sekali per RT',
    images: [imgPertemuanWarga, imgPertemuanWarga2, imgPertemuanWarga3],
  },
  {
    title: 'Pertemuan Lembaga Dusun',
    description: 'Musyawarah lembaga dusun membahas perencanaan dan koordinasi program dukuh.',
    schedule: 'Sebulan sekali, Malam Senin Pahing',
    images: ['https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop'],
  },
  {
    title: 'Pertemuan Pemuda',
    description: 'Koordinasi dan kegiatan positif pemuda dusun untuk kemajuan Nglaran.',
    schedule: 'Sebulan sekali',
    images: ['https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2670&auto=format&fit=crop'],
  },
  {
    title: 'Kelompok Tani Bugel',
    description: 'Pertemuan kelompok tani untuk membahas pertanian, pupuk, dan musim tanam.',
    schedule: 'Sebulan sekali, Senin Wage',
    images: [imgKelompokTani, imgKelompokTani2],
  },
  {
    title: 'Kelompok Wanita Tani',
    description: 'Kegiatan kelompok wanita tani dalam pengelolaan pertanian dan pemberdayaan perempuan.',
    schedule: 'Sebulan sekali, Tanggal 15',
    images: ['https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=2670&auto=format&fit=crop'],
  },
  {
    title: 'PKK Dusun',
    description: 'Pertemuan PKK untuk program pemberdayaan keluarga dan kesejahteraan masyarakat.',
    schedule: 'Sebulan sekali, Rabu Kliwon',
    images: [imgPkk],
  },
  {
    title: 'Posyandu Nyawiji Menur',
    description: 'Pelayanan kesehatan ibu dan balita melalui penimbangan, imunisasi, dan penyuluhan.',
    schedule: 'Sebulan sekali, Tanggal 13',
    images: [imgPosyandu],
  },
  {
    title: 'Kelompok Kesenian',
    description: 'Latihan dan pelestarian kesenian tradisional seperti karawitan dan jatilan.',
    schedule: 'Sebulan sekali',
    images: [imgJatilan, imgJatilan2, imgJatilan3, imgJatilan4, imgKarawitan],
  },
  {
    title: 'Kelompok Pengelola Air Bersih',
    description: 'Pengelolaan dan pemeliharaan sumber air bersih untuk kebutuhan warga.',
    schedule: 'Sebulan sekali',
    images: ['https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2674&auto=format&fit=crop'],
  },
  {
    title: 'Kelompok Peternakan',
    description: 'Koordinasi dan diskusi seputar peternakan sapi, kambing, dan hewan ternak lainnya.',
    schedule: 'Sebulan sekali',
    images: ['https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2674&auto=format&fit=crop'],
  },
  {
    title: 'Voli Rutin',
    description: 'Olahraga voli rutin sebagai sarana rekreasi dan mempererat kebersamaan warga.',
    schedule: 'Setiap hari',
    images: ['https://images.unsplash.com/photo-1612872087720-bb876e2e67d6?q=80&w=2670&auto=format&fit=crop'],
  },
  {
    title: 'Senam Ibu-ibu',
    description: 'Kegiatan senam pagi untuk menjaga kebugaran dan kesehatan ibu-ibu dusun.',
    schedule: 'Setiap hari Sabtu',
    images: [imgSenam],
  },
  {
    title: 'Gejog Lesung',
    description: 'Kesenian tradisional gejog lesung yang dimainkan oleh ibu-ibu sebagai pelestarian budaya.',
    schedule: 'Sesuai jadwal',
    images: [imgGejogLesung, imgGejogLesung2, imgGejogLesung3],
  },
]
