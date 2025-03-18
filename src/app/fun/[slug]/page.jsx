'use client'

import { funPosts } from '@/data/funPosts'
import PostContent from '@/components/PostContent'
import { notFound } from 'next/navigation'

export default function FunPost({ params }) {
  const { slug } = params
  const post = funPosts.find(post => post.slug === slug)
  
  if (!post) {
    notFound()
  }

  return <PostContent post={post} postType="fun" />
} 