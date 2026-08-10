import Layout from '@/components/Layout'

const products = [
  {
    id: 'starter-pack',
    title: 'Starter Pack',
    price: 'USD 4.99',
    description: 'Get started with essential items and a small balance.'
  },
  {
    id: 'pyro-kit',
    title: 'Pyro Kit',
    price: 'USD 9.99',
    description: 'Flame-themed gear to help with Pyromining and Pyrofishing.'
  },
  {
    id: 'vip',
    title: 'VIP',
    price: 'USD 19.99',
    description: 'VIP rank with perks and priority access.'
  }
]

export default function Shop() {
  const storeUrl = process.env.NEXT_PUBLIC_STORE_URL || '#'
  return (
    <Layout>
      <div className="card">
        <h1 className="text-2xl font-bold">Store</h1>
        <p className="text-dxrery.muted mt-2">Purchase ranks, kits, and special items from the store.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {products.map(p => (
            <div key={p.id} className="p-4 border rounded bg-[rgba(255,255,255,0.02)]">
              <div className="font-semibold">{p.title}</div>
              <div className="text-sm text-dxrery.muted">{p.description}</div>
              <div className="mt-4 flex items-center justify-between">
                <div className="font-bold">{p.price}</div>
                <a href={`${storeUrl}`} target="_blank" rel="noreferrer" className="px-3 py-1 bg-dxrery.gold text-black rounded">Buy</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
