import { queryOptions } from '@tanstack/react-query'
import Tables from '../Tables'

export const userOpts = queryOptions({
  queryKey: ['users'],
  queryFn() {
    return Tables.user.read()
  },
})
