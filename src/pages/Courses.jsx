import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import { useCourses } from '../hooks/useCourses'
import ProgressBar from '../components/ui/ProgressBar'

const colorMap = {
  blue: { bg: 'bg-blue-50', text: 'text-ios-blue', border: 'border-blue-100' },
  green: { bg: 'bg-green-50', text: 'text-ios-green', border: 'border-green-100' },
  purple: { bg: 'bg-purple-50', text: 'text-ios-purple', border: 'border-purple-100' },
}

export default function Courses() {
  const { data: courses = [], isLoading } = useCourses()

  return (
    <div className="p-5 lg:p-8 max-w-[900px]">
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold tracking-tight text-ios-label">Barcha kurslar</h2>
        <p className="text-sm text-ios-gray4 mt-1">Robocodde IT Academy — barcha yo'nalishlar</p>
      </div>

      <div className="space-y-4">
        {isLoading
          ? [1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl h-28 animate-pulse" />
            ))
          : courses.map((course) => {
              const pct = Math.round((course.completedLessons / course.totalLessons) * 100)
              const c = colorMap[course.color] ?? colorMap.blue
              return (
                <Link
                  key={course.id}
                  to={`/courses/${course.id}`}
                  className={`flex items-center gap-5 bg-white rounded-2xl p-5 border ${c.border} hover:shadow-sm transition-all group`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${c.bg} flex items-center justify-center text-2xl shrink-0`}>
                    {course.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-[17px] font-bold text-ios-label">{course.title} Kursi</h3>
                      <span className={`text-sm font-bold ${c.text}`}>{pct}%</span>
                    </div>
                    <p className="text-xs text-ios-gray4 mb-2">{course.description}</p>
                    <ProgressBar value={pct} color={course.color} />
                    <p className="text-xs text-ios-gray4 mt-1.5">
                      {course.completedLessons}/{course.totalLessons} dars o'tildi
                    </p>
                  </div>
                  <HiArrowRight className="text-ios-gray3 text-lg shrink-0 group-hover:text-ios-blue transition-colors" />
                </Link>
              )
            })}
      </div>
    </div>
  )
}
