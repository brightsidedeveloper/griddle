import { CRUD } from '@brightsidedevelopers/brightbase'
import supabase from './Supabase'
import { Database } from '@/types/database.types'

const Tables = {
  user: new CRUD<Database, 'griddle_user'>('griddle_user', supabase),
  ingredient: new CRUD<Database, 'griddle_ingredients'>('griddle_ingredients', supabase),
}

export default Tables
