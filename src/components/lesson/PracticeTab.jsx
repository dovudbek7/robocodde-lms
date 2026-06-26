import { useState } from 'react'
import { HiLightBulb } from 'react-icons/hi'

const practices = [
  {
    level: 'OSON',
    color: 'text-ios-green',
    bg: 'bg-green-50',
    title: 'Counter ilovasi yarating',
    desc: "useState dan foydalanib, + va − tugmalari bilan son ko'rsatadigan counter yarating.",
    hint: "const [count, setCount] = useState(0) dan boshlang.",
  },
  {
    level: "O'RTA",
    color: 'text-ios-orange',
    bg: 'bg-orange-50',
    title: 'Todo List ilovasi',
    desc: "Foydalanuvchi vazifa qo'sha oladigan, o'chira oladigan va bajarilgan deb belgilay oladigan todo list yarating.",
    hint: 'Holatni massiv sifatida saqlang: useState([]).',
  },
  {
    level: 'QIYIN',
    color: 'text-ios-red',
    bg: 'bg-red-50',
    title: "API dan ma'lumot olish",
    desc: "useEffect va fetch yordamida ochiq API dan foydalanuvchilar ro'yxatini olib, ekranda chiqaring.",
    hint: 'jsonplaceholder.typicode.com/users dan foydalaning.',
  },
]

export default function PracticeTab() {
  const [openHint, setOpenHint] = useState(null)
  const [started, setStarted] = useState({})

  return (
    <div className="space-y-3">
      {practices.map(({ level, color, bg, title, desc, hint }, i) => (
        <div key={i} className="bg-white rounded-2xl p-5">
          <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${color}`}>
            {level === 'OSON' ? '🟢' : level === "O'RTA" ? '🟡' : '🔴'} {level}
          </p>
          <p className="text-base font-bold text-ios-label mb-1.5">{title}</p>
          <p className="text-sm text-ios-gray4 leading-relaxed mb-4">{desc}</p>

          {openHint === i && (
            <div className={`${bg} rounded-xl px-4 py-3 mb-4 flex items-start gap-2`}>
              <HiLightBulb className={`${color} text-lg shrink-0 mt-0.5`} />
              <p className="text-sm text-ios-label2">{hint}</p>
            </div>
          )}

          <div className="flex gap-2.5">
            <button
              onClick={() => setStarted((s) => ({ ...s, [i]: true }))}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${started[i] ? 'bg-ios-green text-white' : 'bg-ios-blue text-white hover:opacity-85'}`}
            >
              {started[i] ? '✓ Boshlandi' : 'Boshlash →'}
            </button>
            <button
              onClick={() => setOpenHint(openHint === i ? null : i)}
              className="bg-ios-gray1 text-ios-label2 rounded-full px-5 py-2 text-sm font-semibold hover:bg-ios-gray2 transition-colors"
            >
              {openHint === i ? 'Yopish' : "Maslahat ko'rish"}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
