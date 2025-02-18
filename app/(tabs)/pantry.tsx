import { ingredientOpts } from '@/api/queries/ingredientOpts'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Suspense } from 'react'
import { Text, ActivityIndicator, View } from 'react-native'

export default function index() {
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <Pantry />
    </Suspense>
  )
}

function Pantry() {
  const { data: ingredients } = useSuspenseQuery(ingredientOpts)

  return ingredients.map(({ id, name }) => (
    <View key={id}>
      <Text>{name}</Text>
    </View>
  ))
}
