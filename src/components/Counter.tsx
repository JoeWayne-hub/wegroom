import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

export default function Counter({ to, format = (n: number) => String(Math.round(n)), duration = 1.6 }: { to: number; format?: (n: number) => string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: reduce ? 0 : duration, ease: 'easeOut', onUpdate: setVal })
    return () => c.stop()
  }, [inView, to, duration, reduce])
  return <span ref={ref}>{format(inView ? val : 0)}</span>
}
