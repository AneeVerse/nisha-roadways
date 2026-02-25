import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Helper function to fetch all posts
export async function getAllPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      excerpt,
      "author": author->name,
      "categories": categories[]->title
    }
  `)
}

// Helper function to fetch a single post by slug
export async function getPostBySlug(slug: string) {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      body,
      excerpt,
      faqs,
      "author": author->name,
      "authorImage": author->image,
      "authorRole": author->role,
      "categories": categories[]->title
    }
  `, { slug })
}
