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
import imgPosyandu2 from '../assets/kegiatan/kegiatan-posyandu 2.jpeg'
import imgPosyandu3 from '../assets/kegiatan/kegiatan-posyandu 3.jpeg'
import imgPosyandu4 from '../assets/kegiatan/kegiatan-posyandu 4.jpeg'
import imgPosyandu5 from '../assets/kegiatan/kegiatan-posyandu 5.jpeg'
import imgSenam from '../assets/kegiatan/kegiatan-senam ibu.jpeg'
import imgSenam2 from '../assets/kegiatan/kegiatan-senam ibu 2.jpeg'
import imgPertemuanLembagaDusun from '../assets/kegiatan/kegiatan-pertemuan lembaga dusun.jpeg'
import imgPertemuanLembagaDusun2 from '../assets/kegiatan/kegiatan-pertemuan lembaga dusun 2.jpeg'
import imgPertemuanLembagaDusun3 from '../assets/kegiatan/kegiatan-pertemuan lembaga dusun 3.jpeg'
import imgVoli from '../assets/kegiatan/kegiatan-voli.jpeg'
import imgVoli2 from '../assets/kegiatan/kegiatan-voli2.jpeg'
import imgPertemuanPemuda from '../assets/kegiatan/kegiatan - Pertemuan Pemuda.jpeg'
import imgPertemuanPemuda2 from '../assets/kegiatan/kegiatan - Pertemuan Pemuda 2.jpeg'
import imgPertemuanWarga from '../assets/kegiatan/kegiatan - pertemuan warga rt 1.jpeg'
import imgPeternakan from '../assets/kegiatan/kegiatan - peternakan.jpeg'

export const activities: ActivityItem[] = [
  {
    title: 'Pertemuan Warga',
    description: 'Pertemuan rutin warga untuk membahas perkembangan dan musyawarah dusun.',
    schedule: 'Sebulan sekali per RT',
    images: [imgPertemuanWarga],
  },
  {
    title: 'Pertemuan Lembaga Dusun',
    description: 'Musyawarah lembaga dusun membahas perencanaan dan koordinasi program dukuh.',
    schedule: 'Sebulan sekali, Malam Senin Pahing',
    images: [imgPertemuanLembagaDusun, imgPertemuanLembagaDusun2, imgPertemuanLembagaDusun3],
  },
  {
    title: 'Pertemuan Pemuda',
    description: 'Koordinasi dan kegiatan positif pemuda dusun untuk kemajuan Nglaran.',
    schedule: 'Sebulan sekali',
    images: [imgPertemuanPemuda, imgPertemuanPemuda2],
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
    images: [imgPosyandu, imgPosyandu2, imgPosyandu3, imgPosyandu4, imgPosyandu5],
  },
  {
    title: 'Kelompok Kesenian',
    description: 'Latihan dan pelestarian kesenian tradisional seperti karawitan dan jatilan.',
    schedule: 'Sebulan sekali',
    images: [imgJatilan, imgJatilan2, imgJatilan3, imgJatilan4, imgKarawitan],
  },
  {
    title: 'Kelompok Pengelola Air Bersih',
    description: 'Pengelolaan and pemeliharaan sumber air bersih untuk kebutuhan warga.',
    schedule: 'Sebulan sekali',
    images: ['https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2674&auto=format&fit=crop'],
  },
  {
    title: 'Kelompok Peternakan',
    description: 'Koordinasi dan diskusi seputar peternakan sapi, kambing, dan hewan ternak lainnya.',
    schedule: 'Sebulan sekali',
    images: [imgPeternakan],
  },
  {
    title: 'Voli Rutin',
    description: 'Olahraga voli rutin sebagai sarana rekreasi dan mempererat kebersamaan warga.',
    schedule: 'Setiap hari',
    images: [imgVoli, imgVoli2],
  },
  {
    title: 'Senam Ibu-ibu',
    description: 'Kegiatan senam pagi untuk menjaga kebugaran dan kesehatan ibu-ibu dusun.',
    schedule: 'Setiap hari Sabtu',
    images: [imgSenam, imgSenam2],
  },
  {
    title: 'Gejog Lesung',
    description: 'Kesenian tradisional gejog lesung yang dimainkan oleh ibu-ibu sebagai pelestarian budaya.',
    schedule: 'Sesuai jadwal',
    images: [imgGejogLesung, imgGejogLesung2, imgGejogLesung3],
  },
]
