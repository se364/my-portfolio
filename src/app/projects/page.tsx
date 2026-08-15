'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'DaySide LLC',
    description: 'Designed and built a responsive, data-driven website',
    image: '/project1.png',
    link: 'http://www.daysidellc.com/',
    internal: false,
  },
  {
    title: 'Portfolio',
    description: 'Personal portfolio website built with Next.js and Tailwind CSS.',
    image: '/project2.png',
    link: 'https://www.shahemran.com/',
    internal: false,
  },
  {
    title: 'Obstacle Avoiding Robot Using Arduino',
    description: 'The car uses a servo mounted ultrasonic sensor to detect objects in front of and on either side of the car and an L293D DC motor driver shield to drive four geared motors, one on each wheel. An Arduino underneath the shield controls the motor shield, ultrasonic sensor, and the servo.',
    image: '/project-robot.jpg',
    video: '/project-robot.mp4',
    link: '/projects/obstacle-avoiding-robot',
    internal: true,
  },
]

function ProjectMedia({ project }: { project: (typeof projects)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  if (!project.video) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    )
  }

  return (
    <>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
      />
      <video
        ref={videoRef}
        src={project.video}
        muted
        loop
        playsInline
        onMouseEnter={() => videoRef.current?.play()}
        onMouseLeave={() => {
          videoRef.current?.pause()
          if (videoRef.current) videoRef.current.currentTime = 0
        }}
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </>
  )
}

export default function Projects() {
  return (
    <>
      <div className="container px-4 pt-24 pb-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl"
        >
          <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A collection of projects I've worked on.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border bg-card h-[340px] flex flex-col"
            >
              <div className="h-36 overflow-hidden relative">
                <ProjectMedia project={project} />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground flex-grow">{project.description}</p>
                <div className="mt-2 flex">
                  {project.internal ? (
                    <Link
                      href={project.link}
                      className="relative rounded-lg px-3 py-2 text-sm font-medium transition-colors text-green-700 hover:text-green-700 bg-yellow-100"
                    >
                      View Project
                    </Link>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative rounded-lg px-3 py-2 text-sm font-medium transition-colors text-green-700 hover:text-green-700 bg-yellow-100"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}
