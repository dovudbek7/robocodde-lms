import { Link } from 'react-router-dom'
import { HiArrowRight, HiFire, HiLightningBolt, HiCheckCircle } from 'react-icons/hi'
import { useCourses } from '../hooks/useCourses'
import { useProgress } from '../hooks/useProgress'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import ProgressBar from '../components/ui/ProgressBar'
import Badge from '../components/ui/Badge'

const colorVariant = { blue: 'blue', green: 'green', purple: 'purple' }
const badgeLabel = { blue: 'Davom etmoqda', green: 'Boshlandi', purple: 'Tugallandi ✓' }
const badgeVariant = { blue: 'blue', green: 'green', purple: 'purple' }

const activity = [
  { color: 'bg-ios-green', text: 'JS Functions — Quiz 88%', time: '2 soat' },
  { color: 'bg-ios-blue', text: 'React #1 dars boshlandi', time: 'Kecha' },
  { color: 'bg-ios-purple', text: 'Foundation tugallandi', time: '3 kun' },
  { color: 'bg-ios-orange', text: 'CSS Grid mashq bajarildi', time: '5 kun' },
]

function getGreeting() {
  const h = new Date().getHours()
  if (h < 6) return "Yaxshi tun 🌙"
  if (h < 12) return "Xayrli tong ☀️"
  if (h < 18) return "Xayrli kun 👋"
  return "Xayrli oqshom 🌆"
}

export default function Home() {
  useDocumentTitle('Bosh sahifa')
  const { data: courses = [], isLoading } = useCourses()
  const { completedCount } = useProgress()

  const totalLessons = courses.reduce((s, c) => s + c.totalLessons, 0)
  const totalCompleted = courses.reduce((s, c) => s + c.completedLessons, 0)
  const overallPct = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0

  return (
    <div className="p-5 lg:p-8 max-w-[1100px]">
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-6">
        {/* LEFT */}
        <div>
          {/* Hero */}
          <div className="relative bg-ios-label rounded-2xl p-7 text-white mb-6 overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-ios-blue/20" />
            <div className="absolute -bottom-16 left-5 w-40 h-40 rounded-full bg-ios-purple/15" />
            <p className="text-sm text-white/55 mb-1 relative">{getGreeting()}</p>
            <h2 className="text-2xl font-extrabold tracking-tight mb-6 relative">Dovudbek Xabibullayev</h2>
            <div className="flex gap-8 relative">
              {[
                { val: completedCount || totalCompleted || 12, lbl: "Dars o'tildi" },
                { val: 3, lbl: 'Quiz yechildi' },
                { val: `${overallPct || 68}%`, lbl: 'Umumiy progress' },
              ].map(({ val, lbl }) => (
                <div key={lbl}>
                  <p className="text-2xl font-extrabold">{val}</p>
                  <p className="text-xs text-white/50 mt-0.5">{lbl}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Courses */}
          <p className="text-xs font-bold uppercase tracking-wider text-ios-gray4 mb-4">Kurslar</p>
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[1,2,3].map(i => <div key={i} className="bg-white rounded-2xl h-36 animate-pulse" />)}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {courses.map((course) => {
                const pct = Math.round((course.completedLessons / course.totalLessons) * 100)
                return (
                  <Link
                    key={course.id}
                    to={`/courses/${course.id}`}
                    className="bg-white rounded-2xl p-5 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-150"
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-3 ${
                      course.color === 'blue' ? 'bg-blue-50' : course.color === 'green' ? 'bg-green-50' : 'bg-purple-50'
                    }`}>
                      {course.icon}
                    </div>
                    <p className="text-[15px] font-bold text-ios-label mb-0.5">{course.title}</p>
                    <p className="text-xs text-ios-gray4 mb-3">{course.description}</p>
                    <ProgressBar value={pct} color={colorVariant[course.color]} />
                    <div className="flex justify-between items-center mt-2.5">
                      <span className="text-xs text-ios-gray4">{course.completedLessons} / {course.totalLessons} dars</span>
                      <Badge variant={badgeVariant[course.color]}>{badgeLabel[course.color]}</Badge>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}

          <hr className="border-ios-gray2 my-8" />

          {/* Continue */}
          <p className="text-xs font-bold uppercase tracking-wider text-ios-gray4 mb-4">Davom ettirish</p>
          <div className="bg-white rounded-2xl overflow-hidden">
            <Link
              to="/lessons/react-intro"
              className="flex items-center gap-4 px-5 py-4 hover:bg-ios-gray1 transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-ios-blue flex items-center justify-center text-white text-sm font-bold shrink-0">19</div>
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-semibold text-ios-label">React — Introduction & Installation</p>
                <p className="text-xs text-ios-gray4 mt-0.5">Frontend · Oxirgi marta kecha ko'rilgan</p>
              </div>
              <span className="text-xs font-semibold text-white bg-ios-blue rounded-full px-4 py-2 shrink-0">
                Davom etish →
              </span>
            </Link>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="hidden xl:flex flex-col gap-4">
          <div className="bg-white rounded-2xl p-5">
            <p className="text-sm font-bold text-ios-label mb-4">Haftalik statistika</p>
            <div className="flex justify-around text-center">
              {[{ val: 5, lbl: 'Dars' }, { val: 2, lbl: 'Quiz' }, { val: '87%', lbl: "O'rtacha" }].map(({ val, lbl }) => (
                <div key={lbl}>
                  <p className="text-2xl font-extrabold text-ios-blue">{val}</p>
                  <p className="text-xs text-ios-gray4 mt-0.5">{lbl}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5">
            <p className="text-sm font-bold text-ios-label mb-3">So'nggi faoliyat</p>
            <div className="space-y-0">
              {activity.map(({ color, text, time }) => (
                <div key={text} className="flex items-center gap-2.5 py-2 border-b border-ios-gray2 last:border-0">
                  <div className={`w-2 h-2 rounded-full ${color} shrink-0`} />
                  <p className="text-xs text-ios-label2 flex-1">{text}</p>
                  <p className="text-xs text-ios-gray4 shrink-0">{time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5">
            <p className="text-sm font-bold text-ios-label mb-3">🏆 Yutuqlar</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-orange-50 text-ios-orange rounded-full text-xs font-semibold">🔥 7 kun streak</span>
              <span className="px-3 py-1.5 bg-green-50 text-ios-green rounded-full text-xs font-semibold">✓ Foundation</span>
              <span className="px-3 py-1.5 bg-blue-50 text-ios-blue rounded-full text-xs font-semibold">⚡ 10 quiz</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
