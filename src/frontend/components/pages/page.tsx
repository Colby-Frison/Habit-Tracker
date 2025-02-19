'use client'

import { useEffect, useState } from 'react'
import { habitService, type Habit } from '@/backend/services/habitService'

export default function Home() {
  const [habits, setHabits] = useState<Habit[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadHabits()
  }, [])

  async function loadHabits() {
    try {
      const data = await habitService.getAllHabits()
      setHabits(data)
    } catch (err) {
      setError('Failed to load habits')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div className="p-8">Loading...</div>
  if (error) return <div className="p-8 text-red-500">{error}</div>

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Habit Tracker</h1>
      <div className="space-y-4">
        {habits.length === 0 ? (
          <p className="text-gray-500">No habits added yet. Start by adding your first habit!</p>
        ) : (
          habits.map((habit) => (
            <div key={habit.id} className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-xl font-semibold">{habit.name}</h2>
              {habit.description && (
                <p className="text-gray-600 mt-2">{habit.description}</p>
              )}
              <p className="text-sm text-gray-500 mt-2">
                Frequency: {habit.frequency}
              </p>
            </div>
          ))
        )}
      </div>
    </main>
  )
} 