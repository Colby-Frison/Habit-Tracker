'use client'

import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="home-container">
      <h1 className="home-title">Habit Tracker</h1>
      <p className="home-description">
        Track your daily habits and build a better routine
      </p>
      <button
        onClick={() => router.push('/login')}
        className="home-button"
      >
        Get Started
      </button>
    </div>
  )
} 