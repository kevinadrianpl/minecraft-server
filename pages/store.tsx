import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Store() {
  return (
    <Layout>
      <div className="card">
        <h1 className="text-2xl font-bold">Store</h1>
        <p className="mt-2 text-dxrery.muted">Store placeholder. Replace STORE_URL in the environment variables with your Tebex/Store link.</p>
        <Link className="mt-4 inline-block px-4 py-2 bg-dxrery.gold text-black rounded" href="/">Open Store</Link>
      </div>
    </Layout>
  )
}
