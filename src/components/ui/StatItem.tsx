import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface StatItemProps {
  value: string
  label: string
}

function parseNumber(val: string): number {
  return parseInt(val.replace(/,/g, ''), 10)
}

function formatNumber(n: number, original: string): string {
  if (original.includes(',')) {
    return n.toLocaleString('id-ID')
  }
  return String(n)
}

export default function StatItem({ value, label }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState('0')
  const target = parseNumber(value)

  useEffect(() => {
    if (!ref.current || target === 0) return

    const obj = { val: 0 }
    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 1.5,
          ease: 'power2.out',
          onUpdate: () => {
            setDisplay(formatNumber(Math.round(obj.val), value))
          },
        })
      },
    })

    return () => {
      trigger.kill()
    }
  }, [target, value])

  return (
    <div ref={ref} className="stat-item flex flex-col gap-2 border-t border-zinc-200 dark:border-zinc-700 pt-6">
      <div className="font-serif italic text-5xl lg:text-6xl font-light text-zinc-900 dark:text-zinc-100 leading-none">
        {display}
      </div>
      <div className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-medium mt-1">
        {label}
      </div>
    </div>
  )
}
