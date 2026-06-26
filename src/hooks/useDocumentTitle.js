import { useEffect } from 'react'

export function useDocumentTitle(title) {
  useEffect(() => {
    const prev = document.title
    document.title = title ? `${title} — Robocodde LMS` : 'Robocodde LMS'
    return () => { document.title = prev }
  }, [title])
}
