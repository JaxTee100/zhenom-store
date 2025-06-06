'use client'
import { motion } from 'framer-motion';

import { ReactNode } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

interface MotionSectionProps {
  children: ReactNode
}

export default function MotionSection({ children }: MotionSectionProps) {
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  )
}
