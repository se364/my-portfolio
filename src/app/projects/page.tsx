'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'DaySide LLC',
    description: 'Designed and built a responsive, data-driven website',
    image: '/project1.png',
    link: 'http://www.daysidellc.com/',
  },
  {
    title: 'Project Two',
    description: 'A real-time chat application with WebSocket integration.',
    image: '/project2.jpg',
    link: 'https://project2.com',
  },
  {
    title: 'Project Three',
    description: 'A real-time chat application with WebSocket integration.',
    image: '/project2.jpg',
    link: 'https://project2.com',
  },
]

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
              <div className="h-36 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground flex-grow">{project.description}</p>
                <div className="mt-2 flex">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative rounded-lg px-3 py-2 text-sm font-medium transition-colors text-green-700 hover:text-green-700 bg-yellow-100"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
} 