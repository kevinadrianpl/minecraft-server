import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Layout from '@/components/Layout'

export default function WikiIndex({ pages }: any) {
  return (
    <Layout>
      <div className="card">
        <h1 className="text-2xl font-bold">Wiki</h1>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          {pages.map((p: any) => (
            <Link key={p.slug} href={`/wiki/${p.slug}`} className="p-3 border rounded hover:bg-black/5">
              <div className="font-semibold">{p.title}</div>
              <div className="text-sm text-dxrery.muted">{p.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const contentDir = path.join(process.cwd(), 'content', 'wiki')
  let files: string[] = []
  try {
    files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'))
  } catch (e) {
    files = []
  }
  const pages = files.map((file) => {
    const source = fs.readFileSync(path.join(contentDir, file))
    const { data } = matter(source)
    return { title: data.title || file.replace('.mdx',''), slug: data.slug || file.replace('.mdx',''), description: data.description || '' }
  })
  return { props: { pages } }
}
