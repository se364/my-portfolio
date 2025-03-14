'use client'

import { motion } from 'framer-motion'

const interests = [
  {
    title: 'Photography',
    description: 'Capturing moments and exploring new perspectives through my lens.',
    image: '/photography.jpg',
  },
  {
    title: 'Travel',
    description: 'Exploring new cultures and places around the world.',
    image: '/travel.jpg',
  },
  {
    title: 'Music',
    description: 'Playing guitar and discovering new genres.',
    image: '/music.jpg',
  },
  {
    title: 'Reading',
    description: 'Science fiction, technology, and philosophy books.',
    image: '/reading.jpg',
  },
]

const books = [
  { title: 'Dune', author: 'Frank Herbert' },
  { title: 'Snow Crash', author: 'Neal Stephenson' },
  { title: 'The Pragmatic Programmer', author: 'Dave Thomas & Andy Hunt' },
]

export default function Fun() {
  return (
    <>
      <div className="container px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight">Fun & Interests</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            When I'm not coding, here's what keeps me busy and inspired.
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold">Hobbies & Interests</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg border bg-card"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={interest.image}
                    alt={interest.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{interest.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {interest.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold">Currently Reading</h2>
          <div className="mt-8 grid gap-4">
            {books.map((book, index) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 rounded-lg border bg-card p-4"
              >
                <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-primary/10" />
                <div>
                  <h3 className="font-medium">{book.title}</h3>
                  <p className="text-sm text-muted-foreground">by {book.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 pb-16"
        >
          <h2 className="text-2xl font-semibold">Music I'm Enjoying</h2>
          <div className="mt-8">
            <iframe
              src="https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID"
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </div>
        </motion.section>
      </div>
    </>
  )
} 