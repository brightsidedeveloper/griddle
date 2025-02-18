import { activeIngredientAtom } from '@/api/atoms/ingredientAtoms'
import { ingredientsOpts } from '@/api/queries/ingredientOpts'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useRouter } from 'expo-router'
import { useSetAtom } from 'jotai'
import { Suspense } from 'react'
import { Text, ActivityIndicator, TouchableOpacity } from 'react-native'

export default function index() {
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <Pantry />
    </Suspense>
  )
}

function Pantry() {
  const r = useRouter()
  const setIngredient = useSetAtom(activeIngredientAtom)
  const { data: ingredients } = useSuspenseQuery(ingredientsOpts)

  return ingredients.map(({ id, name }) => (
    <TouchableOpacity
      key={id}
      style={{ height: 50, borderColor: 'black', borderBottomWidth: 1 }}
      onPress={() => {
        setIngredient(id)
        r.push('/edit-ingredient')
      }}
    >
      <Text>{name}</Text>
    </TouchableOpacity>
  ))
}
