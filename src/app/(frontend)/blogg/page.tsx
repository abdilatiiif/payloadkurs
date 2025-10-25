import Link from 'next/link'
import React from 'react'

async function BlogListPage() {
  let posts = []

  try {
    // Using Payload's REST API endpoint format
    const req = await fetch('http://localhost:3000/api/posts?')

    if (!req.ok) {
      throw new Error(`HTTP error! status: ${req.status}`)
    }

    const data = await req.json()

    posts = data.docs || []
  } catch (err) {
    console.log('Error fetching posts:', err)
  }

  console.log('Fetched posts:', posts)
  return (
    <main>
      <h1>Blog Posts</h1>

      <ul>
        {' '}
        {posts.map((post: { id: string; slug: string }) => (
          <Link key={post.id} href={`/blogg/${post.slug}`}>
            <li>{post.slug}</li>
          </Link>
        ))}
      </ul>
    </main>
  )
}

export default BlogListPage
