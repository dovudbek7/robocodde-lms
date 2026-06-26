import { useQuery } from '@tanstack/react-query'
import { fetchUser } from '../data/user'

export function useUser() {
  return useQuery({ queryKey: ['user'], queryFn: fetchUser, staleTime: Infinity })
}
