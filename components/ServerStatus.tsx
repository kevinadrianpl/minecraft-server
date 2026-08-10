import React, { useEffect, useState } from 'react'

export default function ServerStatus() {
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState<any>(null)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/mc/status')
        const json = await res.json()
        setStatus(json)
      } catch (e) {
        setStatus({ online: false })
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <div className="card">Checking server status…</div>
  if (!status) return <div className="card">Server status unavailable</div>

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-dxrery.muted">Server</div>
          <div className="text-lg font-semibold">play.dxrery.top</div>
        </div>
        <div className="text-right">
          {status.online ? (
            <>
              <div className="text-green-400">Online</div>
              <div className="text-sm">{status.players?.online ?? 0} / {status.players?.max ?? '??'} players</div>
            </>
          ) : (
            <div className="text-red-400">Offline</div>
          )}
        </div>
      </div>
    </div>
  )
}
