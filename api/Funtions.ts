import { GenerateFunctionsType } from '@/types/bright.types'
import { Functions } from '@brightsidedevelopers/brightbase'
import supabase from './Supabase'

const FunctionList: (keyof FunctionsType)[] = ['get_events', 'get_recipes']

type FunctionsType = GenerateFunctionsType

const functions = new Functions<FunctionsType>(FunctionList, supabase).functions

export default functions
