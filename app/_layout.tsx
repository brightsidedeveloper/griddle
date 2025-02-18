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
      />
    </QueryClientProvider>
  )
}
