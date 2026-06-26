import { useState } from 'react'
import { HiPencil, HiMail, HiPhone, HiCalendar, HiLocationMarker, HiLogout } from 'react-icons/hi'
import { useProgress } from '../hooks/useProgress'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function Profile() {
  useDocumentTitle('Profil')
  const { completedCount } = useProgress()
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState('Dovudbek Xabibullayev')
  const [email, setEmail] = useState('dovudbek@robocodde.uz')

  return (
    <div className="p-5 lg:p-8 max-w-[700px]">
      {/* Avatar & name */}
      <div className="bg-white rounded-2xl p-6 mb-4 flex flex-col sm:flex-row items-center sm:items-start gap-5">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-ios-blue to-ios-purple flex items-center justify-center text-white text-2xl font-extrabold shrink-0">D</div>
          <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-ios-blue rounded-full flex items-center justify-center">
            <HiPencil className="text-white text-xs" />
          </button>
        </div>
        <div className="flex-1 text-center sm:text-left">
          {editing ? (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-xl font-extrabold text-ios-label border-b-2 border-ios-blue outline-none w-full"
            />
          ) : (
            <h2 className="text-xl font-extrabold text-ios-label">{name}</h2>
          )}
          <p className="text-sm text-ios-gray4 mt-0.5">O'quvchi · Frontend yo'nalishi</p>
          <p className="text-xs text-ios-blue mt-1">@dovudbek7</p>
          <button
            onClick={() => setEditing(!editing)}
            className="mt-3 text-xs font-semibold text-ios-blue bg-blue-50 rounded-full px-4 py-1.5 hover:bg-blue-100 transition-colors"
          >
            {editing ? '✓ Saqlash' : '✏️ Tahrirlash'}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { val: completedCount || 12, lbl: 'Dars' },
          { val: 3, lbl: 'Quiz' },
          { val: 7, lbl: 'Streak 🔥' },
        ].map(({ val, lbl }) => (
          <div key={lbl} className="bg-white rounded-2xl p-4 text-center">
            <p className="text-2xl font-extrabold text-ios-blue">{val}</p>
            <p className="text-xs text-ios-gray4 mt-1">{lbl}</p>
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="bg-white rounded-2xl overflow-hidden mb-4">
        {[
          { icon: HiMail, label: 'Email', val: email },
          { icon: HiPhone, label: 'Telefon', val: '+998 90 123 45 67' },
          { icon: HiCalendar, label: "Qo'shilgan", val: '15 Yanvar, 2025' },
          { icon: HiLocationMarker, label: 'Shahar', val: "Toshkent, O'zbekiston" },
        ].map(({ icon: Icon, label, val }, i, arr) => (
          <div key={label} className={`flex items-center gap-4 px-5 py-4 ${i < arr.length - 1 ? 'border-b border-ios-gray2' : ''}`}>
            <div className="w-9 h-9 rounded-xl bg-ios-gray1 flex items-center justify-center shrink-0">
              <Icon className="text-ios-gray4 text-lg" />
            </div>
            <div>
              <p className="text-xs text-ios-gray4">{label}</p>
              <p className="text-sm font-semibold text-ios-label mt-0.5">{val}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Settings */}
      <div className="bg-white rounded-2xl overflow-hidden mb-4">
        {[
          { label: 'Bildirishnomalar', sublabel: 'Dars eslatmalari', toggle: true },
          { label: 'Til', sublabel: "O'zbek tili" },
          { label: "Parolni o'zgartirish", sublabel: "Oxirgi o'zgarish: 3 oy oldin" },
        ].map(({ label, sublabel, toggle }, i, arr) => (
          <div key={label} className={`flex items-center gap-4 px-5 py-4 ${i < arr.length - 1 ? 'border-b border-ios-gray2' : ''}`}>
            <div className="flex-1">
              <p className="text-sm font-semibold text-ios-label">{label}</p>
              <p className="text-xs text-ios-gray4 mt-0.5">{sublabel}</p>
            </div>
            {toggle ? (
              <div className="w-10 h-6 bg-ios-green rounded-full flex items-center justify-end pr-0.5 cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-full shadow" />
              </div>
            ) : (
              <span className="text-ios-gray3 text-lg">›</span>
            )}
          </div>
        ))}
      </div>

      {/* Logout */}
      <button className="w-full bg-white rounded-2xl px-5 py-4 flex items-center gap-3 text-ios-red hover:bg-red-50 transition-colors">
        <HiLogout className="text-xl" />
        <span className="text-sm font-semibold">Chiqish</span>
      </button>
    </div>
  )
}
