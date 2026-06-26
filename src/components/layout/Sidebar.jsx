import { NavLink } from 'react-router-dom'
import { HiHome, HiChartBar, HiGlobeAlt, HiCog, HiCube, HiUser } from 'react-icons/hi'

const navItems = [
  { label: 'Bosh sahifa', to: '/', icon: HiHome, exact: true },
  { label: 'Progressim', to: '/progress', icon: HiChartBar },
  { label: 'Profil', to: '/profile', icon: HiUser },
]

const courses = [
  { label: 'Frontend', to: '/courses/frontend', icon: HiGlobeAlt, color: 'text-ios-blue' },
  { label: 'Backend', to: '/courses/backend', icon: HiCog, color: 'text-ios-green' },
  { label: 'Foundation', to: '/courses/foundation', icon: HiCube, color: 'text-ios-purple' },
]

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <aside className={`fixed top-0 left-0 bottom-0 w-[240px] bg-white border-r border-ios-gray2 flex flex-col z-[200] transition-transform duration-250 ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="px-5 py-6 border-b border-ios-gray2">
          <span className="text-lg font-extrabold tracking-tight text-ios-label">
            Robo<span className="text-ios-blue">codde</span>
          </span>
        </div>

        <nav className="flex-1 px-3 py-4 overflow-y-auto space-y-0.5">
          <p className="px-2.5 pt-3 pb-1.5 text-[11px] font-bold uppercase tracking-wider text-ios-gray4">Asosiy</p>
          {navItems.map(({ label, to, icon: Icon, exact }) => (
            <NavLink
              key={to}
              to={to}
              end={exact}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-blue-50 text-ios-blue font-semibold'
                    : 'text-ios-label2 hover:bg-ios-gray1'
                }`
              }
            >
              <Icon className="text-[17px] w-5 shrink-0" />
              {label}
            </NavLink>
          ))}

          <p className="px-2.5 pt-5 pb-1.5 text-[11px] font-bold uppercase tracking-wider text-ios-gray4">Kurslar</p>
          {courses.map(({ label, to, icon: Icon, color }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-blue-50 text-ios-blue font-semibold'
                    : 'text-ios-label2 hover:bg-ios-gray1'
                }`
              }
            >
              <Icon className={`text-[17px] w-5 shrink-0 ${color}`} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="px-4 py-4 border-t border-ios-gray2 flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-ios-blue to-ios-purple flex items-center justify-center text-white text-sm font-bold shrink-0">D</div>
          <div>
            <p className="text-sm font-semibold text-ios-label">Dovudbek X.</p>
            <p className="text-xs text-ios-gray4">O'quvchi</p>
          </div>
        </div>
      </aside>
    </>
  )
}
