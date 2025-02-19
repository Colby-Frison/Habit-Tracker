import { supabase } from './supabase'

export interface Habit {
  id: string
  name: string
  description?: string
  frequency: string
  created_at: string
  updated_at: string
}

export interface HabitEntry {
  id: string
  habit_id: string
  completed: boolean
  date: string
  notes?: string
}

export const habitService = {
  async getAllHabits(): Promise<Habit[]> {
    const { data, error } = await supabase
      .from('habits')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data || []
  },

  async createHabit(habit: Omit<Habit, 'id' | 'created_at' | 'updated_at'>): Promise<Habit> {
    const { data, error } = await supabase
      .from('habits')
      .insert([habit])
      .select()
      .single()

    if (error) throw error
    return data
  },

  async updateHabit(id: string, habit: Partial<Habit>): Promise<Habit> {
    const { data, error } = await supabase
      .from('habits')
      .update(habit)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  },

  async deleteHabit(id: string): Promise<void> {
    const { error } = await supabase
      .from('habits')
      .delete()
      .eq('id', id)

    if (error) throw error
  },

  async getHabitEntries(habitId: string): Promise<HabitEntry[]> {
    const { data, error } = await supabase
      .from('habit_entries')
      .select('*')
      .eq('habit_id', habitId)
      .order('date', { ascending: false })

    if (error) throw error
    return data || []
  },

  async createHabitEntry(entry: Omit<HabitEntry, 'id'>): Promise<HabitEntry> {
    const { data, error } = await supabase
      .from('habit_entries')
      .insert([entry])
      .select()
      .single()

    if (error) throw error
    return data
  },

  async updateHabitEntry(id: string, entry: Partial<HabitEntry>): Promise<HabitEntry> {
    const { data, error } = await supabase
      .from('habit_entries')
      .update(entry)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  },
} 