'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { funPosts } from '@/data/funPosts'

export default function Fun() {
  return (
    <>
      <div className="container px-4 pt-24 pb-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl"
        >
          <h1 className="text-4xl font-bold tracking-tight">Fun Stuff</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A collection of fun space and tech-related content to enjoy.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          {funPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border bg-card p-6 flex flex-col h-auto"
            >
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">{post.description}</p>
              </div>
              <div>
                <Link
                  href={`/fun/${post.slug}`}
                  className="relative rounded-lg px-3 py-2 text-sm font-medium transition-colors text-green-700 hover:text-green-700 bg-yellow-100"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
} 