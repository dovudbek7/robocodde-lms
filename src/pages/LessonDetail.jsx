import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { HiArrowLeft, HiLockClosed, HiCheckCircle, HiClock, HiAcademicCap } from 'react-icons/hi'
import { useLesson, useQuiz } from '../hooks/useLessons'
import { useProgress } from '../hooks/useProgress'
import VocabTable from '../components/lesson/VocabTable'
import ResourcesTab from '../components/lesson/ResourcesTab'
import QuizTab from '../components/lesson/QuizTab'
import PracticeTab from '../components/lesson/PracticeTab'
import CodeBlock from '../components/ui/CodeBlock'

const TABS = [
  { id: 'content', label: '📖 Dars' },
  { id: 'vocab', label: '🔤 Vocabulary' },
  { id: 'resources', label: '🔗 Resources' },
  { id: 'quiz', label: '🎯 Quiz' },
  { id: 'practice', label: '🛠 Mashqlar' },
]

const chipColors = [
  'bg-blue-50 text-ios-blue',
  'bg-purple-50 text-ios-purple',
  'bg-green-50 text-ios-green',
  'bg-orange-50 text-ios-orange',
]

export default function LessonDetail() {
  const { lessonId } = useParams()
  const [activeTab, setActiveTab] = useState('content')
  const { data: lesson, isLoading } = useLesson(lessonId)
  const { data: quiz = [] } = useQuiz(lessonId)
  const { completeLesson, isCompleted } = useProgress()

  if (isLoading) return (
    <div className="p-5 lg:p-8 space-y-4">
      <div className="bg-white rounded-2xl h-40 animate-pulse" />
      <div className="bg-white rounded-2xl h-64 animate-pulse" />
    </div>
  )

  if (!lesson) return (
    <div className="p-8 text-center text-ios-gray4">Dars topilmadi</div>
  )

  const completed = isCompleted(lessonId)

  return (
    <div className="p-5 lg:p-8 max-w-[1100px]">
      <Link to={`/courses/${lesson.courseId}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-ios-label2 bg-ios-gray1 rounded-full px-4 py-2 mb-5 hover:bg-ios-gray2 transition-colors">
        <HiArrowLeft /> Darslar ro'yxati
      </Link>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_268px] gap-5">
        {/* MAIN */}
        <div>
          {/* Header */}
          <div className="bg-white rounded-2xl p-6 mb-4">
            <span className="inline-block bg-blue-50 text-ios-blue text-xs font-bold px-3 py-1 rounded-full mb-3">
              {lesson.courseId.charAt(0).toUpperCase() + lesson.courseId.slice(1)} · Dars #{lesson.num}
            </span>
            <h1 className="text-2xl font-extrabold tracking-tight text-ios-label mb-2">{lesson.title}</h1>
            <p className="text-sm text-ios-gray4">React nima, nima uchun kerak va qanday o'rnatiladi — barchasi shu darsda.</p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="flex items-center gap-1 bg-ios-gray1 text-ios-gray4 text-xs rounded-full px-3 py-1.5">
                <HiClock className="text-xs" /> {lesson.duration}
              </span>
              <span className="bg-ios-gray1 text-ios-gray4 text-xs rounded-full px-3 py-1.5">📝 {quiz.length} savol</span>
              <span className="bg-ios-gray1 text-ios-gray4 text-xs rounded-full px-3 py-1.5">🛠 3 mashq</span>
              <span className="bg-ios-gray1 text-ios-gray4 text-xs rounded-full px-3 py-1.5">🔤 {lesson.vocabulary?.length ?? 0} so'z</span>
              {completed && (
                <span className="bg-green-50 text-ios-green text-xs rounded-full px-3 py-1.5 font-semibold">✓ Tugallandi</span>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-4 overflow-x-auto pb-1 scrollbar-hide">
            {TABS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`shrink-0 px-4 py-2 rounded-full text-[13px] font-semibold transition-all ${
                  activeTab === id ? 'bg-ios-label text-white' : 'bg-white text-ios-gray4 hover:bg-ios-gray2'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          {activeTab === 'content' && (
            <div className="space-y-4">
              {/* Strategies */}
              {lesson.strategies?.length > 0 && (
                <div className="bg-white rounded-2xl p-5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-ios-gray4 mb-3">Strategies & Ideas</p>
                  <div className="flex flex-wrap gap-2">
                    {lesson.strategies.map((s, i) => (
                      <span key={s} className={`px-4 py-1.5 rounded-full text-sm font-semibold ${chipColors[i % chipColors.length]}`}>{s}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Content blocks */}
              {lesson.content?.length > 0 && (
                <div className="bg-white rounded-2xl p-5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-ios-gray4 mb-4">Things to cover</p>
                  {lesson.content.map(({ heading, bullets }, i) => (
                    <div key={i} className={i > 0 ? 'mt-5' : ''}>
                      <p className="text-[15px] font-bold text-ios-label mb-2.5">{heading}</p>
                      <ul className="space-y-2">
                        {bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-ios-blue mt-[7px] shrink-0" />
                            <span className="text-[15px] text-ios-label2 leading-relaxed" dangerouslySetInnerHTML={{ __html: b }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Code block */}
              {lesson.code && (
                <div className="bg-white rounded-2xl p-5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-ios-gray4 mb-4">Kod misoli</p>
                  <CodeBlock code={lesson.code} />
                </div>
              )}

              <div className="flex gap-2.5 pt-1">
                <button className="bg-ios-gray1 text-ios-label rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-ios-gray2 transition-colors">← Oldingi dars</button>
                <button
                  onClick={() => setActiveTab('quiz')}
                  className="ml-auto bg-ios-blue text-white rounded-full px-5 py-2.5 text-sm font-semibold hover:opacity-85 transition-opacity"
                >
                  🎯 Quizga o'tish →
                </button>
              </div>
            </div>
          )}

          {activeTab === 'vocab' && <VocabTable vocab={lesson.vocabulary} />}
          {activeTab === 'resources' && <ResourcesTab resources={lesson.resources} />}
          {activeTab === 'quiz' && <QuizTab questions={quiz} lessonId={lessonId} />}
          {activeTab === 'practice' && <PracticeTab />}
        </div>

        {/* STICKY RIGHT */}
        <div className="hidden xl:flex flex-col gap-4 sticky top-20 self-start">
          {/* Next lesson */}
          <div className="bg-white rounded-2xl p-5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-ios-gray4 mb-2.5">Keyingi dars</p>
            <p className="text-sm font-bold text-ios-label mb-1">Components & Props</p>
            <p className="text-xs text-ios-gray4 mb-3">{lesson.courseId} · ~30 daqiqa</p>
            <button disabled className="w-full bg-ios-gray2 text-ios-gray4 rounded-full py-2 text-xs font-semibold opacity-70 cursor-not-allowed flex items-center justify-center gap-1.5">
              <HiLockClosed className="text-xs" /> Qulflangan
            </button>
          </div>

          {/* TOC */}
          <div className="bg-white rounded-2xl p-5">
            <p className="text-sm font-bold text-ios-label mb-3">Dars tarkibi</p>
            {TABS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`w-full flex items-center gap-2 py-2 border-b border-ios-gray2 last:border-0 text-sm text-left transition-colors hover:text-ios-blue ${activeTab === id ? 'text-ios-blue font-semibold' : 'text-ios-label2'}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${activeTab === id ? 'bg-ios-blue' : 'bg-ios-gray3'}`} />
                {label}
              </button>
            ))}
          </div>

          {/* Progress tracker */}
          <div className="bg-white rounded-2xl p-5">
            <p className="text-sm font-bold text-ios-label mb-3">Dars progressi</p>
            <div className="space-y-2">
              {[
                { label: 'Dars matni', done: true },
                { label: 'Vocabulary', done: lesson.vocabulary?.length > 0 },
                { label: 'Quiz', done: quiz.length > 0 },
                { label: 'Mashqlar', done: false },
              ].map(({ label, done }) => (
                <div key={label} className="flex justify-between text-sm">
                  <span className="text-ios-label2">{label}</span>
                  <span className={done ? 'text-ios-green font-semibold' : 'text-ios-gray4'}>
                    {done ? '✓' : '—'}
                  </span>
                </div>
              ))}
            </div>
            {!completed && (
              <button
                onClick={() => completeLesson(lessonId)}
                className="w-full mt-4 bg-ios-green text-white rounded-full py-2 text-sm font-semibold hover:opacity-85 transition-opacity"
              >
                ✓ Darsni tugatdim
              </button>
            )}
            {completed && (
              <div className="mt-4 bg-green-50 rounded-xl py-2 text-center text-xs font-semibold text-ios-green">
                ✓ Dars tugallandi
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
