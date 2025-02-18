import { CRUD } from '@brightsidedevelopers/brightbase'
import supabase from './Supabase'

const Tables = {
  user: new CRUD('griddle_user', supabase),
  ingredient: new CRUD('griddle_ingredients', supabase),
}

export default Tables
