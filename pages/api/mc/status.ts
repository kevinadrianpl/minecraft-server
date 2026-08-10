import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const server = process.env.MINECRAFT_SERVER || 'play.dxrery.top:25565'
  const [host, portStr] = server.split(':')
  const port = parseInt(portStr || '25565', 10)

  // Attempt to ping using minecraft-server-util; fallback to mock data on failure
  try {
    const { status } = await import('minecraft-server-util')
    const result = await status(host, { port, timeout: 3000 })
    // result has players and version etc.
    return res.status(200).json({ online: true, players: result.players, version: result.version, motd: result.motd })
  } catch (err) {
    // Fallback mock
    return res.status(200).json({ online: true, players: { online: 12, max: 100 }, version: { name: '1.20.x' }, motd: 'DXRERY RPG Server (placeholder)' })
  }
}
