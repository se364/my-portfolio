'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Markdown from 'markdown-to-jsx'

export default function PostContent({ post, postType }) {
  // postType is either 'blog' or 'fun'
  const backLink = postType === 'blog' ? '/blog' : '/fun'
  const backLinkText = postType === 'blog' ? 'Back to Blog' : 'Back to Fun'

  return (
    <div className="container max-w-3xl mx-auto px-4 py-20">
      <Link 
        href={backLink}
        className="inline-flex items-center mb-6 text-sm font-medium text-green-700 hover:underline"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="mr-2 h-4 w-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {backLinkText}
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-tight mb-2">{post.title}</h1>
        <p className="text-gray-500 mb-8">{post.date}</p>
        
        <div className="prose prose-green max-w-none">
          <Markdown>{post.content}</Markdown>
        </div>
      </motion.div>
    </div>
  )
} 