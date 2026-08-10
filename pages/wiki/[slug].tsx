import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Layout from '@/components/Layout'
import { getAllPages } from '@/lib/wiki'

export default function WikiPage({ source, meta, pages }: any) {
  return (
    <Layout>
      <div className="md:flex md:gap-6">
        <aside className="md:w-1/4 mb-6 md:mb-0">
          <div className="card">
            <h3 className="font-semibold">Wiki</h3>
            <nav className="mt-3 flex flex-col gap-2">
              {pages.map((p: any) => (
                <a key={p.slug} href={`/wiki/${p.slug}`} className="text-sm text-dxrery.muted hover:text-dxrery.gold">{p.title}</a>
              ))}
            </nav>
          </div>
        </aside>
        <div className="flex-1">
          <div className="card">
            <h1 className="text-2xl font-bold">{meta.title}</h1>
            <div className="text-sm text-dxrery.muted">{meta.date}</div>
            <div className="mt-4 prose prose-invert">
              <MDXRemote {...source} />
            </div>
          </div>
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
  const pages = getAllPages()
  return { props: { source: mdxSource, meta: data, pages } }
}
