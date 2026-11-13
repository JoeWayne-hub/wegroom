import { motion } from 'framer-motion'
import Heading from '../components/Heading'
import Icon from '../components/Icon'
import { activities } from '../data/content'

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Heading eyebrow="Our work" title="What We Do">Five connected activities that move people from having a skill to earning from it.</Heading>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {activities.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group rounded-3xl border border-forest/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl hover:shadow-forest/10 lg:col-span-2 ${i === 3 ? 'lg:col-start-2' : ''}`}
            >
              <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-forest text-gold transition group-hover:scale-110"><Icon name={a.icon} className="size-6" /></div>
              <p className="text-xs font-semibold text-gold-deep">0{i + 1}</p>
              <h3 className="mt-1 text-xl font-semibold">{a.title}</h3>
              <p className="mt-3 leading-relaxed text-forest/70">{a.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
