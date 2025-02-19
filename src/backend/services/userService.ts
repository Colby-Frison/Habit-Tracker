import { createClient } from '@supabase/supabase-js'
import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface User {
  id: string
  username: string
  first_name: string
  last_name: string
  password_hash: string
  created_at: string
}

export class UserService {
  async createUser(firstName: string, lastName: string, username: string, password: string): Promise<Omit<User, 'password_hash'>> {
    // Check if username already exists
    const { data: existingUser } = await supabase
      .from('users')
      .select('username')
      .eq('username', username)
      .single()

    if (existingUser) {
      throw new Error('Username already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, salt)

    // Create new user
    const newUser: User = {
      id: uuidv4(),
      username,
      first_name: firstName,
      last_name: lastName,
      password_hash: passwordHash,
      created_at: new Date().toISOString(),
    }

    const { data: createdUser, error } = await supabase
      .from('users')
      .insert([newUser])
      .select('id, username, first_name, last_name, created_at')
      .single()

    if (error) {
      throw new Error('Failed to create user: ' + error.message)
    }

    return createdUser
  }

  async validateCredentials(username: string, password: string): Promise<boolean> {
    const { data: user } = await supabase
      .from('users')
      .select('password_hash')
      .eq('username', username)
      .single()

    if (!user) {
      return false
    }

    return bcrypt.compare(password, user.password_hash)
  }
}

export const userService = new UserService() 