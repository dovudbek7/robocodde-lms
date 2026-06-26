import { Link } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-6">
      <div className="w-20 h-20 bg-ios-gray1 rounded-3xl flex items-center justify-center mb-2">
        <span className="text-4xl">🔍</span>
      </div>
      <h2 className="text-2xl font-extrabold text-ios-label tracking-tight">Sahifa topilmadi</h2>
      <p className="text-sm text-ios-gray4 max-w-xs">
        Siz qidirgan sahifa mavjud emas yoki ko'chirilgan bo'lishi mumkin.
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 bg-ios-blue text-white px-5 py-2.5 rounded-xl font-semibold text-sm mt-2 hover:bg-blue-600 transition-colors"
      >
        <HiHome />
        Bosh sahifaga qaytish
      </Link>
    </div>
  )
}
