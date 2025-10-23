import React from 'react'

import { getPayload } from 'payload'
import config from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { notFound } from 'next/navigation'

type PageParams = {
  params: {
    postSlug: string
  }
}

async function BlogPostPage({ params }: PageParams) {
  const payload = await getPayload({ config })

  const queryResult = await payload.find({
    collection: 'posts',
  })

  const post = queryResult.docs.find((doc) => doc.slug === params.postSlug)

  if (!post) {
    notFound()
  }

  return (
    <main>
      <div key={post.id}>
        <h1>{post.title}</h1>
        <RichText data={post.content} />
        <h3>{post.timestamps}</h3>
      </div>
    </main>
  )
}

export default BlogPostPage
