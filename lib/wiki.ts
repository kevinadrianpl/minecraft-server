import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const wikiDir = path.join(process.cwd(), 'content', 'wiki')

export function getAllPages() {
  let files = []
  try {
    files = fs.readdirSync(wikiDir).filter(f => f.endsWith('.mdx'))
  } catch (e) {
    return []
  }
  return files.map((file) => {
    const source = fs.readFileSync(path.join(wikiDir, file))
    const { data } = matter(source)
    return { title: data.title || file.replace('.mdx',''), slug: data.slug || file.replace('.mdx',''), description: data.description || '' }
  })
}
