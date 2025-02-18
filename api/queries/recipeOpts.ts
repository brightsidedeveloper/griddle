import { queryOptions } from '@tanstack/react-query'
import functions from '../Funtions'

export const recipeOpts = queryOptions({
  queryKey: ['recipes'],
  queryFn() {
    return functions.get_recipes()
  },
})
