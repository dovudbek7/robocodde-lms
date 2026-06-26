import { useProgress } from '../hooks/useProgress'
import { useCourses } from '../hooks/useCourses'
import ProgressBar from '../components/ui/ProgressBar'

const weekDays = ['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya']
const weekActivity = [3, 5, 2, 4, 6, 3, 1]

export default function Progress() {
  const { completedCount } = useProgress()
  const { data: courses = [] } = useCourses()

  return (
    <div className="p-5 lg:p-8 max-w-[900px]">
      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { val: completedCount || 12, lbl: "O'tilgan darslar", color: 'text-ios-blue' },
          { val: 3, lbl: 'Quiz yechildi', color: 'text-ios-green' },
          { val: '68%', lbl: 'Umumiy progress', color: 'text-ios-purple' },
          { val: 7, lbl: 'Kun streak 🔥', color: 'text-ios-orange' },
        ].map(({ val, lbl, color }) => (
          <div key={lbl} className="bg-white rounded-2xl p-4 text-center">
            <p className={`text-3xl font-extrabold ${color}`}>{val}</p>
            <p className="text-xs text-ios-gray4 mt-1">{lbl}</p>
          </div>
        ))}
      </div>

      {/* Weekly activity */}
      <div className="bg-white rounded-2xl p-5 mb-4">
        <p className="text-sm font-bold text-ios-label mb-4">Haftalik faollik</p>
        <div className="flex items-end justify-between gap-2 h-20">
          {weekDays.map((day, i) => (
            <div key={day} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-lg bg-ios-blue/20 transition-all"
                style={{ height: `${(weekActivity[i] / 6) * 100}%`, background: weekActivity[i] > 4 ? '#007AFF' : 'rgba(0,122,255,0.2)' }}
              />
              <span className="text-[10px] text-ios-gray4">{day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Courses progress */}
      <p className="text-xs font-bold uppercase tracking-wider text-ios-gray4 mb-3">Kurslar bo'yicha progress</p>
      <div className="space-y-3">
        {courses.map((course) => {
          const pct = Math.round((course.completedLessons / course.totalLessons) * 100)
          return (
            <div key={course.id} className="bg-white rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{course.icon}</span>
                  <div>
                    <p className="text-[15px] font-bold text-ios-label">{course.title}</p>
                    <p className="text-xs text-ios-gray4">{course.completedLessons} / {course.totalLessons} dars</p>
                  </div>
                </div>
                <span className={`text-2xl font-extrabold ${pct === 100 ? 'text-ios-green' : 'text-ios-blue'}`}>{pct}%</span>
              </div>
              <ProgressBar value={pct} color={course.color} />
            </div>
          )
        })}
      </div>

      {/* Achievements */}
      <p className="text-xs font-bold uppercase tracking-wider text-ios-gray4 mt-6 mb-3">Yutuqlar</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[
          { icon: '🔥', label: '7 kun streak', desc: "Ketma-ket 7 kun o'qildi", earned: true },
          { icon: '✅', label: 'Foundation', desc: 'Foundation kursi tugallandi', earned: true },
          { icon: '⚡', label: '10 quiz', desc: '10 ta quiz yechildi', earned: true },
          { icon: '🚀', label: 'React boshlanchi', desc: "Birinchi React darsi o'tildi", earned: true },
          { icon: '💯', label: 'Mukammal quiz', desc: '100% natija olindi', earned: false },
          { icon: '🏆', label: 'Frontend master', desc: 'Barcha darslar tugallandi', earned: false },
        ].map(({ icon, label, desc, earned }) => (
          <div key={label} className={`bg-white rounded-2xl p-4 ${!earned ? 'opacity-40' : ''}`}>
            <p className="text-2xl mb-2">{icon}</p>
            <p className="text-sm font-bold text-ios-label">{label}</p>
            <p className="text-xs text-ios-gray4 mt-0.5">{desc}</p>
            {earned && <p className="text-[10px] text-ios-green font-semibold mt-2">✓ Qo'lga kiritildi</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
