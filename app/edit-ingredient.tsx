import { activeIngredientAtom } from '@/api/atoms/ingredientAtoms'
import { createIngredientOpts } from '@/api/queries/ingredientOpts'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useAtomValue } from 'jotai'
import { Suspense } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

export default function Index() {
  const ingredientID = useAtomValue(activeIngredientAtom)

  if (!ingredientID) return <ActivityIndicator />
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <Edit id={ingredientID} />
    </Suspense>
  )
}

function Edit({ id }: { id: string }) {
  const {
    data: { name, metric, quantity, updated_at },
  } = useSuspenseQuery(createIngredientOpts(id))

  return (
    <View>
      <Text>{name}</Text>
      <Text>
        {quantity} {metric}
      </Text>
      <Text>{updated_at}</Text>
    </View>
  )
}
