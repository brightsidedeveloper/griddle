import { recipeOpts } from '@/api/queries/recipeOpts'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Suspense } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

export default function index() {
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <Recipes />
    </Suspense>
  )
}

function Recipes() {
  const { data: ingredients } = useSuspenseQuery(recipeOpts)

  return ingredients.map(({ id, name }) => (
    <View key={id}>
      <Text>{name}</Text>
    </View>
  ))
}
