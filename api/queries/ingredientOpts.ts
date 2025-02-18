import { queryOptions } from '@tanstack/react-query'
import Tables from '../Tables'

export const ingredientOpts = queryOptions({
  queryKey: ['ingredients'],
  queryFn() {
    return Tables.ingredient.read()
  },
})
