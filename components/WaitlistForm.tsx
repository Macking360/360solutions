'use client'

import { useState, useEffect } from 'react'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('waitlist_email')
    if (saved) setEmail(saved)
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    localStorage.setItem('waitlist_email', email)
    const subject = encodeURIComponent('TLS Guard Waitlist Request')
    const body = encodeURIComponent('Please add this email to the waitlist: ' + email)
    window.location.href = `mailto:support@myagentleadsgenerator.com?subject=${subject}&body=${body}`
  }

  return (
    <form className="waitlist-form" aria-label="Waitlist request form" onSubmit={handleSubmit}>
      <label htmlFor="waitlist-email">Email for waitlist updates</label>
      <div className="waitlist-row">
        <input
          id="waitlist-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn btn-secondary" type="submit">Request access</button>
      </div>
    </form>
  )
}
