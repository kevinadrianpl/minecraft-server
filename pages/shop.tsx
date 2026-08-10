import Layout from '@/components/Layout'
import Link from 'next/link'

const products = [
  {
    id: 'starter-pack',
    title: 'Starter Pack',
    price: 'USD 4.99',
    description: 'Get started with essential items and a small balance.',
    img: '/assets/product-starter.svg'
  },
  {
    id: 'pyro-kit',
    title: 'Pyro Kit',
    price: 'USD 9.99',
    description: 'Flame-themed gear to help with Pyromining and Pyrofishing.',
    img: '/assets/product-pyro.svg'
  },
  {
    id: 'vip',
    title: 'VIP',
    price: 'USD 19.99',
    description: 'VIP rank with perks and priority access.',
    img: '/assets/product-vip.svg'
  }
]

export default function ShopList() {
  return (
    <Layout>
      <div className="card">
        <h1 className="text-2xl font-bold">Shop</h1>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {products.map(p => (
            <div key={p.id} className="p-4 border rounded bg-[rgba(255,255,255,0.02)] flex flex-col">
              <img src={p.img} alt={p.title} className="h-28 mx-auto" />
              <div className="mt-4 font-semibold">{p.title}</div>
              <div className="text-sm text-dxrery.muted">{p.description}</div>
              <div className="mt-4 flex items-center justify-between mt-auto">
                <div className="font-bold">{p.price}</div>
                <div className="flex gap-2">
                  <Link href={`/shop/${p.id}`} className="px-3 py-1 border rounded">Details</Link>
                  <a href={process.env.NEXT_PUBLIC_STORE_URL || '#'} target="_blank" rel="noreferrer" className="px-3 py-1 bg-dxrery.gold text-black rounded">Buy</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
