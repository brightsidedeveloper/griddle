import { queryOptions } from '@tanstack/react-query'
import Tables from '../Tables'

export const ingredientsOpts = queryOptions({
  queryKey: ['ingredients'],
  queryFn() {
    return Tables.ingredient.read()
  },
})

export const createIngredientOpts = (id: string) =>
  queryOptions({
    queryKey: ['ingredient', { id }],
    async queryFn() {
      const rows = await Tables.ingredient.read({ id })
      return rows[0]
    },
  })
