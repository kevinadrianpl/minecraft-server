import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Layout from '@/components/Layout'

export default function WikiPage({ source, meta }: any) {
  return (
    <Layout>
      <div className="card">
        <h1 className="text-2xl font-bold">{meta.title}</h1>
        <div className="text-sm text-dxrery.muted">{meta.date}</div>
        <div className="mt-4 prose prose-invert">
          <MDXRemote {...source} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), 'content', 'wiki')
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'))
  const paths = files.map(f => ({ params: { slug: f.replace('.mdx','') } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const filePath = path.join(process.cwd(), 'content', 'wiki', `${params.slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(source)
  const mdxSource = await serialize(content, { scope: data })
  return { props: { source: mdxSource, meta: data } }
}
