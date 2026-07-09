import type { GalleryItem } from '../types/content'

import imgCup2022 from '../assets/galeri/galeri-nglaran cup 3 2022.jpg'
import imgCup2023 from '../assets/galeri/galeri-nglaran cup 4 2023.jpg'
import imgCup2024 from '../assets/galeri/galeri-nglaran cup 5 2024.jpg'
import imgCup2025 from '../assets/galeri/galeri-nglaran cup 6 2025.jpg'
import imgTakbir from '../assets/galeri/galeri-takbir keliling.jpg'
import imgSungaiOyo from '../assets/galeri/galeri-sungai oyo.jpeg'

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
]
