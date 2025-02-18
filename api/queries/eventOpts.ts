import { queryOptions } from '@tanstack/react-query'
import functions from '../Funtions'

export const eventOpts = queryOptions({
  queryKey: ['events'],
  async queryFn() {
    return functions.get_events()
  },
})
