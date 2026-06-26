import { useState, useCallback } from 'react'

const KEY = 'robocodde_progress'

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) ?? {}
  } catch {
    return {}
  }
}

export function useProgress() {
  const [progress, setProgress] = useState(load)

  const completeLesson = useCallback((lessonId) => {
    setProgress((prev) => {
      const next = { ...prev, [lessonId]: { completed: true, completedAt: new Date().toISOString() } }
      localStorage.setItem(KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const isCompleted = useCallback((lessonId) => !!progress[lessonId]?.completed, [progress])

  const completedCount = Object.values(progress).filter((v) => v.completed).length

  return { progress, completeLesson, isCompleted, completedCount }
}
