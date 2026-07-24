import type { UmkmItem } from '../types/content'

import imgIbuNovi from '../assets/umkm/umkm - ibu novi.jpeg'
import imgLaundryMbakRida from '../assets/umkm/umkm - laundry mbak rida.jpeg'
import imgBuburNengIndri from '../assets/umkm/umkm - bubur neng indri.jpeg'
import imgKueMbakEni from '../assets/umkm/umkm - kue mbak eni.png'

export const umkmList: UmkmItem[] = [
  {
    title: 'Bubur Ayam Neng Indri',
    category: 'Kuliner',
    description: 'Sarapan pagi dengan bubur ayam hangat lezat yang dipadu dengan kaldu tradisional bumbu rempah nusantara.',
    imageUrl: imgBuburNengIndri,
    mapsUrl: 'https://maps.app.goo.gl/eyMuSKAxqKzbxR6i7?g_st=ipc',
    location: 'RT 02',
  },
  {
    title: 'Laundry Mbak Rida',
    category: 'Jasa',
    description: 'Jasa cuci dan setrika pakaian cepat, bersih, harum, dan rapi untuk kebutuhan warga dusun.',
    imageUrl: imgLaundryMbakRida,
    mapsUrl: 'https://maps.app.goo.gl/kDtyWkjQevqyJWuf8?g_st=iw',
    location: 'RT 02',
  },
  {
    title: 'Aneka Kue Mbak Eni',
    category: 'Kuliner',
    description: 'Menyediakan berbagai macam kue basah, kue kering lezat, serta pesanan jajanan pasar untuk berbagai kebutuhan acara.',
    imageUrl: imgKueMbakEni,
    mapsUrl: 'https://maps.app.goo.gl/Hf1RVbq6RGLhJ7de7?g_st=ic',
    location: 'RT 05',
  },
  {
    title: 'Warung Kelontong Ibu Novi',
    category: 'Toko Kelontong',
    description: 'Menyediakan berbagai kebutuhan pokok sehari-hari, jajanan dan gas LPG bagi warga sekitar.',
    imageUrl: imgIbuNovi,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Warung+Kelontong+Ibu+Novi+Nglaran+Gedangsari+Gunungkidul',
    location: 'RT 05',
  },
]
