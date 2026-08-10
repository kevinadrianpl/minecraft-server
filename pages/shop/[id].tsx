import Layout from '@/components/Layout'
import Image from 'next/image'

const products: any = {
  'starter-pack': {
    id: 'starter-pack',
    title: 'Starter Pack',
    price: 'USD 4.99',
    description: 'Get started with essential items and a small balance.',
    perks: ['Starter kit', 'Small balance', 'Welcome crate'],
    img: '/assets/product-starter.svg'
  },
  'pyro-kit': {
    id: 'pyro-kit',
    title: 'Pyro Kit',
    price: 'USD 9.99',
    description: 'Flame-themed gear to help with Pyromining and Pyrofishing.',
    perks: ['Pyro rod', 'Pyro pick', 'Rare bait'],
    img: '/assets/product-pyro.svg'
  },
  'vip': {
    id: 'vip',
    title: 'VIP',
    price: 'USD 19.99',
    description: 'VIP rank with perks and priority access.',
    perks: ['Priority login', 'Custom tag', 'Monthly bonus'],
    img: '/assets/product-vip.svg'
  }
}

export default function ProductPage({ params }: any) {
  const id = params?.id || ''
  const p = products[id]
  if (!p) return (
    <Layout>
      <div className="card">Product not found</div>
    </Layout>
  )

  return (
    <Layout>
      <div className="card">
        <div className="md:flex md:gap-6">
          <div className="md:w-1/3">
            <Image src={p.img} alt={p.title} width={400} height={400} className="w-full" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{p.title}</h1>
            <div className="text-dxrery.muted mt-2">{p.description}</div>
            <div className="mt-4">
              <h3 className="font-semibold">Perks</h3>
              <ul className="list-disc list-inside mt-2">
                {p.perks.map((k: any) => <li key={k}>{k}</li>)}
              </ul>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <div className="text-2xl font-bold">{p.price}</div>
              <a href={process.env.NEXT_PUBLIC_STORE_URL || '#'} target="_blank" rel="noreferrer" className="px-4 py-2 bg-dxrery.gold text-black rounded">Buy on Store</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  return { paths: Object.keys(products).map(k => ({ params: { id: k } })), fallback: false }
}

export async function getStaticProps({ params }: any) {
  return { props: { params } }
}
