import Link from 'next/link'
import { getAllPages } from '@/lib/wiki'
import Layout from '@/components/Layout'

export default function WikiIndex({ pages }: any) {
  return (
    <Layout>
      <div className="md:flex md:gap-6">
        <aside className="md:w-1/4 mb-6 md:mb-0">
          <div className="card">
            <h3 className="font-semibold">Wiki</h3>
            <nav className="mt-3 flex flex-col gap-2">
              {pages.map((p: any) => (
                <Link key={p.slug} href={`/wiki/${p.slug}`} className="text-sm text-dxrery.muted hover:text-dxrery.gold">{p.title}</Link>
              ))}
            </nav>
          </div>
        </aside>
        <div className="flex-1">
          <div className="card">
            <h1 className="text-2xl font-bold">Wiki</h1>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              {pages.map((p: any) => (
                <Link key={p.slug} href={`/wiki/${p.slug}`} className="p-3 border rounded hover:bg-black/5 block">
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm text-dxrery.muted">{p.description}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const pages = getAllPages()
  return { props: { pages } }
}
