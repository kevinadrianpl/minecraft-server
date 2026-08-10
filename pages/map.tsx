import Layout from '@/components/Layout'

export default function MapPage() {
  const bluemap = process.env.BLUEMAPS_URL || 'https://vanilla.tvpmc.co.za:26357'
  return (
    <Layout>
      <div className="card">
        <h1 className="text-2xl font-bold">Map</h1>
        <p className="text-dxrery.muted mt-2">Live map embed (Bluemaps). Click Open Live Map to open in a new tab.</p>
        <div className="mt-4" style={{ minHeight: 400 }}>
          {/* Bluemaps iframe embed — may require https and allow from bluemaps host */}
          <iframe src={bluemap} title="Bluemaps" className="w-full h-[480px] border-0 rounded" />
        </div>
        <a className="mt-4 inline-block px-4 py-2 bg-dxrery.gold text-black rounded" href={bluemap} target="_blank" rel="noreferrer">Open Live Map</a>
      </div>
    </Layout>
  )
}
