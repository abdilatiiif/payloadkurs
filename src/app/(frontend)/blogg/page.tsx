import React from 'react'

import { getPayload } from 'payload'
import config from '@payload-config'

import Link from 'next/link'

async function BlogListPage() {
  const payload = await getPayload({ config })

  const posts = await payload.find({
    collection: 'posts',
  })

  console.log('Posts:', posts)

  return (
    <main>
      <h1>Blog Posts</h1>

      <ul>
        {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}

        {posts.docs.map((post) => (
          <li key={post.slug}>
            {' '}
            <Link href={`/blogg/${post.slug}`}>{post.title}</Link>{' '}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default BlogListPage
