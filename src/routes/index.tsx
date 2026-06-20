import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import { useDarkMode } from '@/src/lib/useDarkMode'
import Navbar from '@/src/components/layout/Navbar'
import Footer from '@/src/components/layout/Footer'
import HeroSection from '@/src/components/sections/HeroSection'
import ProfileSection from '@/src/components/sections/ProfileSection'
import PotentialSection from '@/src/components/sections/PotentialSection'
import ActivitySection from '@/src/components/sections/ActivitySection'
import GallerySection from '@/src/components/sections/GallerySection'
import UmkmSection from '@/src/components/sections/UmkmSection'
import LocationSection from '@/src/components/sections/LocationSection'

gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
  const container = useRef<HTMLDivElement>(null)
  const { isDark, toggle: toggleDark } = useDarkMode()

  useEffect(() => {
    ScrollTrigger.refresh()
  }, [isDark])

  useGSAP(
    () => {
      gsap.to('.hero-img', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.from('.hero-text > *', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.2,
      })

      const headers = gsap.utils.toArray<HTMLElement>('.reveal-header')
      headers.forEach((header) => {
        gsap.fromTo(header,
          { y: 40, opacity: 0 },
          {
            scrollTrigger: {
              trigger: header,
              start: 'top 90%',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
          },
        )
      })

      const stats = gsap.utils.toArray<HTMLElement>('.stat-item')
      if (stats.length > 0) {
        gsap.fromTo(stats,
          { y: 40, opacity: 0 },
          {
            scrollTrigger: {
              trigger: '.stats-container',
              start: 'top 85%',
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
          },
        )
      }

      const staggerContainers = gsap.utils.toArray<HTMLElement>('.stagger-container')
      staggerContainers.forEach((container) => {
        const cards = container.querySelectorAll('.stagger-card')
        if (cards.length > 0) {
          gsap.fromTo(cards,
            { y: 60, opacity: 0 },
            {
              scrollTrigger: {
                trigger: container,
                start: 'top 85%',
              },
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: 'power3.out',
            },
          )
        }
      })
    },
    { scope: container },
  )

  return (
    <div
      ref={container}
      className="relative w-full bg-bg-base text-zinc-900 dark:text-zinc-100 selection:bg-zinc-200 dark:selection:bg-zinc-700 selection:text-zinc-900 dark:selection:text-zinc-100 transition-colors duration-300 ease-out"
    >
      <Navbar isDark={isDark} onToggleDark={toggleDark} />

      <main>
        <HeroSection />
        <ProfileSection />
        <PotentialSection />
        <ActivitySection />
        <GallerySection />
        <UmkmSection />
        <LocationSection />
      </main>

      <Footer />
    </div>
  )
}
