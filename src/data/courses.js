export const courses = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: '🌐',
    description: 'HTML · CSS · JS · React · Tailwind',
    color: 'blue',
    totalLessons: 25,
    completedLessons: 18,
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: '⚙️',
    description: 'Python · Django · REST API · DB',
    color: 'green',
    totalLessons: 20,
    completedLessons: 6,
  },
  {
    id: 'foundation',
    title: 'Foundation',
    icon: '🧱',
    description: 'Computer basics · Git · Terminal',
    color: 'purple',
    totalLessons: 15,
    completedLessons: 15,
  },
]

const delay = (ms) => new Promise((r) => setTimeout(r, ms))

export async function fetchCourses() {
  await delay(300)
  return courses
}

export async function fetchCourse(id) {
  await delay(200)
  return courses.find((c) => c.id === id) ?? null
}
