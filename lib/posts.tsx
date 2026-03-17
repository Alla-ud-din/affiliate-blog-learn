// lib/posts.js
// Reads all post files from /posts directory and parses frontmatter.
// Supports both .json and .md files.

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(fn => fn.endsWith('.json') || fn.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.(json|md)$/, '')
      const fullPath = path.join(postsDirectory, fileName)

      if (fileName.endsWith('.json')) {
        const raw = fs.readFileSync(fullPath, 'utf8')
        const data = JSON.parse(raw)
        return { slug, ...data }
      }

      // .md file
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      return { slug, ...data }
    })

  return allPostsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter(fn => fn.endsWith('.json') || fn.endsWith('.md'))
    .map(fileName => ({
      params: { slug: fileName.replace(/\.(json|md)$/, '') },
    }))
}

export function getPostData(slug) {
  // Try .json first, then .md
  const jsonPath = path.join(postsDirectory, `${slug}.json`)
  const mdPath   = path.join(postsDirectory, `${slug}.md`)

  if (fs.existsSync(jsonPath)) {
    const raw = fs.readFileSync(jsonPath, 'utf8')
    return JSON.parse(raw)
  }

  if (fs.existsSync(mdPath)) {
    const fileContents = fs.readFileSync(mdPath, 'utf8')
    const { data, content } = matter(fileContents)
    return { ...data, slug, content }
  }

  throw new Error(`No post found for slug: ${slug}`)
}
