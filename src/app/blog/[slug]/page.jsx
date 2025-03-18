'use client'

import { blogPosts } from '@/data/blogPosts'
import PostContent from '@/components/PostContent'
import { notFound } from 'next/navigation'

export default function BlogPost({ params }) {
  const { slug } = params
  const post = blogPosts.find(post => post.slug === slug)
  
  if (!post) {
    notFound()
  }

  return <PostContent post={post} postType="blog" />
} 