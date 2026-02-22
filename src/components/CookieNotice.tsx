import { useEffect, useState } from 'react'

const KEY = 'jarvix_cookie_notice_v1'

export function CookieNotice() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setOpen(true)
  }, [])

  if (!open) return null

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50">
      <div className="container">
        <div className="rounded-2xl border border-line bg-card shadow-soft p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-text-muted">Deze website gebruikt alleen functionele cookies (geen tracking).</p>
          <button
            className="rounded-xl bg-brand px-4 py-2 text-sm font-medium text-bg hover:bg-brand-strong"
            onClick={() => {
              localStorage.setItem(KEY, 'ok')
              setOpen(false)
            }}
          >
            Oké
          </button>
        </div>
      </div>
    </div>
  )
}
