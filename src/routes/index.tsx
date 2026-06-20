import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import Navbar from '@/src/components/layout/Navbar'
import Footer from '@/src/components/layout/Footer'
import HeroSection from '@/src/components/sections/HeroSection'
import ProfileSection from '@/src/components/sections/ProfileSection'

gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
  const container = useRef<HTMLDivElement>(null)

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
    },
    { scope: container },
  )

  return (
    <div ref={container} className="relative w-full bg-bg-base font-sans text-zinc-900 selection:bg-zinc-200 selection:text-zinc-900">
      <Navbar />

      <main>
        <HeroSection />
        <ProfileSection />
      </main>

      <Footer />
    </div>
  )
}
