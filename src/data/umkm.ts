import type { UmkmItem } from '../types/content'

import imgIbuNovi from '../assets/umkm/umkm - ibu novi.jpeg'
import imgLaundryMbakRida from '../assets/umkm/umkm - laundry mbak rida.jpeg'
import imgBuburNengIndri from '../assets/umkm/umkm - bubur neng indri.jpeg'
import imgKueMbakEni from '../assets/umkm/umkm - kue mbak eni.png'

export const umkmList: UmkmItem[] = [
  {
    title: 'Warung Kelontong Ibu Novi',
    category: 'Toko Kelontong',
    description: 'Menyediakan berbagai kebutuhan pokok sehari-hari, jajanan dan gas LPG bagi warga sekitar.',
    imageUrl: imgIbuNovi,
    whatsapp: 'https://wa.me/6281234567890',
    location: 'RT 05',
  },
  {
    title: 'Laundry Mbak Rida',
    category: 'Jasa',
    description: 'Jasa cuci dan setrika pakaian cepat, bersih, harum, dan rapi untuk kebutuhan warga dusun.',
    imageUrl: imgLaundryMbakRida,
    whatsapp: 'https://wa.me/6281234567890',
    location: 'RT 02',
  },
  {
    title: 'Aneka Kue Mbak Eni',
    category: 'Kuliner',
    description: 'Menyediakan berbagai macam kue basah, kue kering lezat, serta pesanan jajanan pasar untuk berbagai kebutuhan acara.',
    imageUrl: imgKueMbakEni,
    whatsapp: 'https://wa.me/6281234567890',
    location: 'RT 05',
  },
  {
    title: 'Bubur Ayam Neng Indri',
    category: 'Kuliner',
    description: 'Sarapan pagi dengan bubur ayam hangat lezat yang dipadu dengan kaldu tradisional bumbu rempah nusantara.',
    imageUrl: imgBuburNengIndri,
    whatsapp: 'https://wa.me/6281234567890',
    location: 'RT 02',
  },
]
