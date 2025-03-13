'use client'

import { Nav } from '@/components/nav'
import { motion } from 'framer-motion'

const posts = [
  {
    title: 'Building a Modern Web Application with Next.js',
    description: 'Learn how to build a modern web application using Next.js, React, and TypeScript.',
    date: '2024-03-12',
    readTime: '5 min read',
    slug: 'building-modern-web-app',
  },
  {
    title: 'The Power of TypeScript in Large Scale Applications',
    description: 'Exploring how TypeScript improves developer experience and code quality in large applications.',
    date: '2024-03-10',
    readTime: '8 min read',
    slug: 'typescript-large-scale-apps',
  },
  // Add more blog posts as needed
]

export default function Blog() {
  return (
    <>
      <Nav />
      <div className="container px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Thoughts, learnings, and insights about software development and technology.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-lg border bg-card p-6 transition-colors hover:bg-accent/50"
            >
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>{post.readTime}</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold group-hover:text-primary">
                <a href={`/blog/${post.slug}`}>{post.title}</a>
              </h2>
              <p className="mt-2 text-muted-foreground">{post.description}</p>
              <a
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Read more
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </>
  )
} 