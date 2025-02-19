'use client'

import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen w-full bg-[#070708] flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold text-[#f3f2fb] mb-6">Habit Tracker</h1>
      <p className="text-[#f3f2fb]/60 text-lg mb-8 text-center max-w-md">
        Track your daily habits and build a better routine
      </p>
      <button
        onClick={() => router.push('/login')}
        className="px-8 py-3 bg-[#f3f2fb] text-[#070708] rounded-xl font-medium
          hover:bg-[#f3f2fb]/90 transition-all duration-200 
          transform hover:scale-[1.02] active:scale-[0.98]
          shadow-xl shadow-black/20"
      >
        Get Started
      </button>
    </div>
  )
} 