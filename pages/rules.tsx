import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '@/components/Layout'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

export default function Rules({ source, meta }: any) {
  return (
    <Layout>
      <div className="card">
        <h1 className="text-2xl font-bold">{meta.title}</h1>
        <div className="mt-4 prose prose-invert"><MDXRemote {...source} /></div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'rules.mdx')
  const source = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(source)
  const mdxSource = await serialize(content, { scope: data })
  return { props: { source: mdxSource, meta: data } }
}
