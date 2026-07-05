export interface NavLink {
  label: string
  href: string
}

export interface ProfileStats {
  value: string
  label: string
}

export interface PotentialItem {
  title: string
  description: string
  icon?: string
  isDark?: boolean
  isAccent?: boolean
  colSpan?: string
}

export interface ActivityItem {
  title: string
  description: string
  schedule: string
  images?: string[]
}

export interface UmkmItem {
  title: string
  category: string
  description: string
  imageUrl: string
  whatsapp: string
  location: string
  hasVideo?: boolean
  videoUrl?: string
}

export interface GalleryItem {
  id: number
  title: string
  description: string
  meta: string
  imageSrc: string
}

export interface ContactInfo {
  address: string[]
  email: string
  phone: string
  social: {
    instagram?: string
    youtube?: string
  }
}
