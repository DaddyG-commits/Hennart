'use client'

import { useEffect, useRef } from 'react'

/** Soft fluid scroll: progress bar, fade/rise cards, parallax city */
export default function ScrollFluid() {
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const progressEl = progressRef.current
    const fluidCards = Array.from(
      document.querySelectorAll<HTMLElement>('[data-fluid]')
    )
    const parallax = Array.from(
      document.querySelectorAll<HTMLElement>('[data-parallax]')
    )

    let ticking = false

    function update() {
      ticking = false
      const scrollY = window.scrollY || window.pageYOffset
      const docH = document.documentElement.scrollHeight - window.innerHeight
      const p = docH > 0 ? Math.min(1, Math.max(0, scrollY / docH)) : 0

      if (progressEl) {
        progressEl.style.transform = `scaleX(${p})`
      }

      if (prefersReduced) {
        fluidCards.forEach((el) => {
          el.style.opacity = '1'
          el.style.transform = 'none'
        })
        return
      }

      const vh = window.innerHeight

      fluidCards.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const mid = rect.top + rect.height / 2
        const distFromCenter = (mid - vh / 2) / (vh * 0.72)
        const intensity = Math.max(0, 1 - Math.abs(distFromCenter))
        const ease = intensity * intensity * (3 - 2 * intensity)
        const y = (1 - ease) * (distFromCenter > 0 ? 36 : -20)
        const scale = 0.96 + ease * 0.04
        el.style.opacity = String(0.2 + ease * 0.8)
        el.style.transform = `translate3d(0, ${y}px, 0) scale(${scale})`
      })

      parallax.forEach((el) => {
        const speed = Number(el.dataset.parallax) || 0.2
        const rect = el.getBoundingClientRect()
        const offset = (rect.top + rect.height / 2 - vh / 2) * speed
        el.style.transform = `translate3d(0, ${offset * -0.15}px, 0)`
      })
    }

    function onScroll() {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return <div ref={progressRef} className="ha-scroll-progress" aria-hidden />
}
