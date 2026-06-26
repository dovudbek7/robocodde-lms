import { useQuery } from '@tanstack/react-query'
import { fetchCourses, fetchCourse } from '../data/courses'

export function useCourses() {
  return useQuery({ queryKey: ['courses'], queryFn: fetchCourses })
}

export function useCourse(id) {
  return useQuery({ queryKey: ['courses', id], queryFn: () => fetchCourse(id), enabled: !!id })
}
