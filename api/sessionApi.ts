import supabase from '@/lib/supabase'
import { queryOptions } from '@tanstack/react-query'

export const getSessionApi = () =>
  queryOptions({
    queryKey: ['session'],
    async queryFn() {
      return supabase.auth.getSession().then(({ data: { session } }) => session)
    },
  })
