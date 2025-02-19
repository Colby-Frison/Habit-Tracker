import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Habit {
  id: string
  name: string
  description?: string
  frequency: string
  createdAt: string
  updatedAt: string
}

interface HabitEntry {
  id: string
  habitId: string
  completed: boolean
  date: string
  notes?: string
}

interface HabitsState {
  habits: Habit[]
  entries: HabitEntry[]
  status: 'idle' | 'loading' | 'failed'
  error: string | null
}

const initialState: HabitsState = {
  habits: [],
  entries: [],
  status: 'idle',
  error: null,
}

export const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    setHabits: (state, action: PayloadAction<Habit[]>) => {
      state.habits = action.payload
    },
    addHabit: (state, action: PayloadAction<Habit>) => {
      state.habits.push(action.payload)
    },
    updateHabit: (state, action: PayloadAction<Habit>) => {
      const index = state.habits.findIndex(habit => habit.id === action.payload.id)
      if (index !== -1) {
        state.habits[index] = action.payload
      }
    },
    deleteHabit: (state, action: PayloadAction<string>) => {
      state.habits = state.habits.filter(habit => habit.id !== action.payload)
    },
    setEntries: (state, action: PayloadAction<HabitEntry[]>) => {
      state.entries = action.payload
    },
    addEntry: (state, action: PayloadAction<HabitEntry>) => {
      state.entries.push(action.payload)
    },
    updateEntry: (state, action: PayloadAction<HabitEntry>) => {
      const index = state.entries.findIndex(entry => entry.id === action.payload.id)
      if (index !== -1) {
        state.entries[index] = action.payload
      }
    },
    setStatus: (state, action: PayloadAction<'idle' | 'loading' | 'failed'>) => {
      state.status = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
  },
})

export const {
  setHabits,
  addHabit,
  updateHabit,
  deleteHabit,
  setEntries,
  addEntry,
  updateEntry,
  setStatus,
  setError,
} = habitsSlice.actions

export default habitsSlice.reducer 