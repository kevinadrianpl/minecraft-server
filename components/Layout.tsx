import Link from 'next/link'
import React from 'react'

type Props = { children: React.ReactNode }

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-dxrery.surface text-dxrery.text header-shadow">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <img src="/assets/logo.svg" alt="DXRERY" className="h-10" />
            <div className="text-lg font-semibold">DXRERY</div>
          </Link>
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="/store">Store</Link>
            <Link href="/vote">Vote</Link>
            <Link href="/wiki">Wiki</Link>
            <Link href="/rules">Rules</Link>
            <Link href="/map">Map</Link>
            <a href="https://discord.gg/Ubx7Tvu" target="_blank" rel="noreferrer" className="px-3 py-1 rounded bg-dxrery.primary text-white">Discord</a>
          </nav>
          <div className="md:hidden">{/* mobile menu placeholder */}
            <button aria-label="menu" className="p-2 border rounded">☰</button>
          </div>
        </div>
      </header>
      <main className="container py-8 flex-1">{children}</main>
      <footer className="bg-dxrery.surface text-dxrery.muted py-6">
        <div className="container text-sm">
          <div>© {new Date().getFullYear()} DXRERY — play.dxrery.top</div>
          <div className="mt-2">Built with ❤️ • Mirror of pixiesmp.net layout (inspired)</div>
        </div>
      </footer>
    </div>
  )
}
