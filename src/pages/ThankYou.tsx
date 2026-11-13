import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import Button from '../components/Button'

export default function ThankYou() {
  return (
    <section className="relative grid min-h-screen place-items-center overflow-hidden bg-cream px-5 pb-20 pt-32 text-forest">
      <motion.div className="absolute left-1/2 top-1/3 size-[36rem] -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity }} aria-hidden />
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative max-w-2xl text-center">
        <div className="mx-auto mb-8 grid size-20 place-items-center rounded-full bg-forest text-gold shadow-xl"><Heart className="size-9" fill="currentColor" aria-hidden /></div>
        <h1 className="font-display text-4xl leading-tight sm:text-6xl">Thank You for Being Part of <span className="italic text-gold-deep">Our Story.</span></h1>
        <p className="mt-6 text-lg leading-relaxed text-forest/75">Your generosity means more than words can express. Thank you for supporting the vision behind WeGroom and believing in what we’re building. Every contribution, regardless of size, is deeply appreciated.</p>
        <p className="font-display mt-8 text-xl italic">With gratitude,<br />The WeGroom Team.</p>
        <Button to="/" variant="dark" className="mt-10">Back to WeGroom</Button>
      </motion.div>
    </section>
  )
}
