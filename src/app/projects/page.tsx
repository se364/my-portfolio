'use client'

import { Nav } from '@/components/nav'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack web application built with Next.js and Node.js.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    image: '/project1.jpg',
    link: 'https://project1.com',
    github: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project Two',
    description: 'A real-time chat application with WebSocket integration.',
    tech: ['React', 'Socket.io', 'Express', 'MongoDB'],
    image: '/project2.jpg',
    link: 'https://project2.com',
    github: 'https://github.com/yourusername/project2',
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <>
      <Nav/>
      <div className="container px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A collection of projects I've worked on, showcasing my skills and experience.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border bg-card"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="mt-2 text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    GitHub
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