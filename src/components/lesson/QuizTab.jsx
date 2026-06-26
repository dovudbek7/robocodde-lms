import { useState } from 'react'
import { HiCheckCircle, HiXCircle } from 'react-icons/hi'

export default function QuizTab({ questions = [], lessonId }) {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [done, setDone] = useState(false)

  if (!questions.length) return <p className="text-ios-gray4 text-sm py-4 px-5">Quiz mavjud emas</p>

  const q = questions[current]
  const answered = answers[current] !== undefined
  const isCorrect = (i) => answered && answers[current] === i && i === q.correct
  const isWrong = (i) => answered && answers[current] === i && i !== q.correct
  const isShowCorrect = (i) => answered && i === q.correct && answers[current] !== i

  function handleAnswer(i) {
    if (answered) return
    setAnswers((prev) => ({ ...prev, [current]: i }))
  }

  function handleNext() {
    if (current < questions.length - 1) setCurrent((c) => c + 1)
    else setDone(true)
  }

  if (done) {
    const score = questions.reduce((acc, q, i) => acc + (answers[i] === q.correct ? 1 : 0), 0)
    const pct = Math.round((score / questions.length) * 100)
    return (
      <div className="bg-white rounded-2xl p-6 text-center">
        <p className="text-5xl font-extrabold text-ios-blue mb-2">{pct}%</p>
        <p className="text-lg font-bold text-ios-label mb-1">{score} / {questions.length} to'g'ri</p>
        <p className="text-sm text-ios-gray4 mb-6">
          {pct >= 80 ? '🎉 Ajoyib natija!' : pct >= 60 ? '👍 Yaxshi!' : '💪 Qayta urinib ko\'ring'}
        </p>
        <button
          onClick={() => { setCurrent(0); setAnswers({}); setDone(false) }}
          className="bg-ios-blue text-white rounded-full px-6 py-2.5 text-sm font-semibold hover:opacity-85 transition-opacity"
        >
          Qayta boshlash
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-ios-gray4">Savol {current + 1} / {questions.length}</span>
        <span className="text-xs font-semibold text-ios-blue">{25} ball</span>
      </div>
      <div className="h-1.5 bg-ios-gray2 rounded-full overflow-hidden mb-6">
        <div className="h-full bg-ios-blue rounded-full transition-all" style={{ width: `${((current + 1) / questions.length) * 100}%` }} />
      </div>

      <p className="text-[17px] font-bold text-ios-label tracking-tight mb-5">{q.question}</p>

      <div className="space-y-2.5 mb-5">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 text-[15px] text-left transition-all ${
              isCorrect(i) ? 'border-ios-green bg-green-50 text-ios-label' :
              isWrong(i) ? 'border-ios-red bg-red-50 text-ios-label' :
              isShowCorrect(i) ? 'border-ios-green bg-green-50' :
              answered ? 'border-ios-gray2 text-ios-label2 opacity-60' :
              'border-ios-gray2 text-ios-label hover:border-ios-blue hover:bg-blue-50 cursor-pointer'
            }`}
          >
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 text-xs font-bold ${
              isCorrect(i) ? 'border-ios-green bg-ios-green text-white' :
              isWrong(i) ? 'border-ios-red bg-ios-red text-white' :
              isShowCorrect(i) ? 'border-ios-green bg-ios-green text-white' :
              'border-ios-gray3'
            }`}>
              {isCorrect(i) ? '✓' : isWrong(i) ? '✗' : isShowCorrect(i) ? '✓' : ''}
            </div>
            {opt}
          </button>
        ))}
      </div>

      {answered && (
        <div className="bg-green-50 rounded-xl px-4 py-3.5 mb-5">
          <p className="text-xs font-bold text-ios-green mb-1">
            {answers[current] === q.correct ? "✓ To'g'ri javob!" : "✗ Noto'g'ri. To'g'ri javob:"}
          </p>
          <p className="text-sm text-ios-label2">{q.explanation}</p>
        </div>
      )}

      {answered && (
        <button
          onClick={handleNext}
          className="w-full bg-ios-blue text-white rounded-full py-3 text-sm font-semibold hover:opacity-85 transition-opacity"
        >
          {current < questions.length - 1 ? 'Keyingi savol →' : 'Natijani ko\'rish'}
        </button>
      )}
    </div>
  )
}
