import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Layout from '@/components/Layout'
import ServerStatus from '@/components/ServerStatus'

export default function Home({ latest }: any) {
  return (
    <Layout>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <section className="card mb-6">
            <h1 className="text-3xl font-bold">DXRERY — RPG Minecraft</h1>
            <p className="mt-2 text-dxrery.muted">A small RPG server — welcome! Mirror of pixiesmp.net layout with dark army green + gold theme.</p>
            <div className="mt-4 flex gap-3">
              <Link href="/store" className="px-4 py-2 bg-dxrery.gold text-black rounded">Store</Link>
              <Link href="/vote" className="px-4 py-2 border border-dxrery.gold rounded">Vote</Link>
              <Link href="/wiki" className="px-4 py-2 border rounded">Wiki</Link>
            </div>
          </section>

          <section className="card">
            <h2 className="text-xl font-semibold">Latest Wiki</h2>
            <div className="mt-4 grid gap-3">
              {latest.map((p: any) => (
                <Link key={p.slug} href={`/wiki/${p.slug}`} className="block p-3 border rounded hover:bg-black/5">
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm text-dxrery.muted">{p.description}</div>
                </Link>
              ))}
            </div>
          </section>

        </div>

        <aside className="space-y-6">
          <ServerStatus />

          <div className="card">
            <h3 className="font-semibold">Leaderboard</h3>
            <div className="mt-2 text-sm text-dxrery.muted">Placeholder leaderboard — replace with real API later.</div>
            <ol className="mt-3 list-decimal list-inside">
              <li>PlayerOne — 1000 pts</li>
              <li>PlayerTwo — 900 pts</li>
              <li>PlayerThree — 850 pts</li>
            </ol>
          </div>

        </aside>
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
  const posts = files.map((file) => {
    const source = fs.readFileSync(path.join(contentDir, file))
    const { data } = matter(source)
    return { title: data.title || file.replace('.mdx',''), slug: data.slug || file.replace('.mdx',''), description: data.description || '' }
  })
  return { props: { latest: posts.slice(0,5) } }
}
