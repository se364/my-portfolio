'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="container px-4 pt-24 pb-12 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl font-bold tracking-tight">About</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Hi, I&apos;m Shah Emran, a computer science and mechanical engineering
          student with a passion for building things that move, think, and fly.
          I&apos;m diving deep into robotics and rocketry, with a growing curiosity
          for AI along the way.
        </p>
      </motion.div>
    </div>
  )
}
