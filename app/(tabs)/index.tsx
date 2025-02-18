import { eventOpts } from '@/api/queries/eventOpts'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Suspense } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

export default function Index() {
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <Events />
    </Suspense>
  )
}

function Events() {
  const { data: events } = useSuspenseQuery(eventOpts)

  return events.map(({ id, date, recipe_name, attendees }) => (
    <View key={id}>
      <Text>
        {recipe_name} - {date} - {attendees.length}
      </Text>
    </View>
  ))
}
