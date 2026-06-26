import { useQuery } from '@tanstack/react-query'
import { fetchLessons, fetchLesson } from '../data/lessons'
import { fetchQuiz } from '../data/quizzes'

export function useLessons(courseId) {
  return useQuery({ queryKey: ['lessons', courseId], queryFn: () => fetchLessons(courseId), enabled: !!courseId })
}

export function useLesson(lessonId) {
  return useQuery({ queryKey: ['lesson', lessonId], queryFn: () => fetchLesson(lessonId), enabled: !!lessonId })
}

export function useQuiz(lessonId) {
  return useQuery({ queryKey: ['quiz', lessonId], queryFn: () => fetchQuiz(lessonId), enabled: !!lessonId })
}
