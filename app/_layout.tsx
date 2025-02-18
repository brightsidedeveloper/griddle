import { Stack } from 'expo-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const qc = new QueryClient()

export default function RootLayout() {
  return (
    <QueryClientProvider client={qc}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="create-event"
          options={{
            presentation: 'modal',
          }}
        />
        <Stack.Screen
          name="edit-recipe"
          options={{
            presentation: 'modal',
          }}
        />
        <Stack.Screen
          name="edit-ingredient"
          options={{
            presentation: 'modal',
          }}
        />
      </Stack>
    </QueryClientProvider>
  )
}
