import type { GalleryItem } from '../types/content'

import imgCup2022 from '../assets/galeri/galeri-nglaran cup 3 2022.jpg'
import imgCup2023 from '../assets/galeri/galeri-nglaran cup 4 2023.jpg'
import imgCup2024 from '../assets/galeri/galeri-nglaran cup 5 2024.jpg'
import imgCup2025 from '../assets/galeri/galeri-nglaran cup 6 2025.jpg'
import imgTakbir from '../assets/galeri/galeri-takbir keliling.jpg'
import imgSungaiOyo from '../assets/galeri/galeri-sungai oyo.jpeg'
import imgVoli2 from '../assets/kegiatan/kegiatan-voli2.jpeg'
import imgPosyandu4 from '../assets/kegiatan/kegiatan-posyandu 4.jpeg'
import imgSenam2 from '../assets/kegiatan/kegiatan-senam ibu 2.jpeg'

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Nglaran Cup 2022',
    description: 'Semangat juang warga Nglaran dalam ajang.turnamen antar dusun yang penuhsportivitas.',
    meta: 'Turnamen',
    imageSrc: imgCup2022,
  },
  {
    id: 2,
    title: 'Nglaran Cup 2023',
    description: 'Kemeriahan Nglaran Cup edisi keempat yang mempertemukan para talenta muda dukuh.',
    meta: 'Turnamen',
    imageSrc: imgCup2023,
  },
  {
    id: 3,
    title: 'Nglaran Cup 2024',
    description: 'Ajang tahunan yang menjadi momen kebersamaan seluruh warga Nglaran.',
    meta: 'Turnamen',
    imageSrc: imgCup2024,
  },
  {
    id: 4,
    title: 'Nglaran Cup 2025',
    description: 'Perjalanan panjang tradisi kebersamaan yang terus hidup di setiap generasi.',
    meta: 'Turnamen',
    imageSrc: imgCup2025,
  },
  {
    id: 5,
    title: 'Takbir Keliling',
    description: 'Suasana khusyuk malam takbiran mengelilingi dusun Nglaran menyambut hari kemenangan.',
    meta: 'Keagamaan',
    imageSrc: imgTakbir,
  },
  {
    id: 6,
    title: 'Pesona Sungai Oyo',
    description: 'Keindahan aliran Sungai Oyo yang asri, menawarkan potensi wisata alam yang menyegarkan di sekitar dusun.',
    meta: 'Wisata Alam',
    imageSrc: imgSungaiOyo,
  },
  {
    id: 7,
    title: 'Latihan Voli Bersama',
    description: 'Keseruan warga Dusun Nglaran saat bermain voli bersama guna memupuk sportivitas dan menjaga kebersamaan.',
    meta: 'Olahraga',
    imageSrc: imgVoli2,
  },
  {
    id: 8,
    title: 'Pelayanan Posyandu',
    description: 'Kegiatan rutin penimbangan balita dan pelayanan kesehatan dasar di Posyandu Nyawiji Menur.',
    meta: 'Kesehatan',
    imageSrc: imgPosyandu4,
  },
  {
    id: 9,
    title: 'Senam Sehat Ibu-Ibu',
    description: 'Semangat kebersamaan dan keceriaan ibu-ibu Dusun Nglaran saat melaksanakan senam bugar bersama.',
    meta: 'Kesehatan',
    imageSrc: imgSenam2,
  },
]
