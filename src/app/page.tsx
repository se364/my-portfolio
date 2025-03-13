'use client'

import { Nav } from '@/components/nav'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Nav />
      <div className="container px-4 pt-32">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I'm <span className="text-primary">Shah Emran</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A passionate software engineer focused on building beautiful and functional web applications.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              className="rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Download Resume
            </a>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-32 max-w-2xl"
        >
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I'm a software engineer with a passion for creating elegant solutions to complex problems.
            With expertise in full-stack development, I specialize in building scalable web applications
            using modern technologies like React, Node.js, and TypeScript.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-semibold">Frontend Development</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                React, Next.js, TypeScript, Tailwind CSS
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-semibold">Backend Development</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Node.js, Express, PostgreSQL, MongoDB
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  )
}
