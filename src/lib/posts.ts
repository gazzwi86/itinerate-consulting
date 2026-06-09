import { getCollection } from 'astro:content'

export const postSlug = (id: string) => id.replace(/\.mdx?$/, '')

export async function getSortedPosts() {
  return (await getCollection('posts')).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  )
}

export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
