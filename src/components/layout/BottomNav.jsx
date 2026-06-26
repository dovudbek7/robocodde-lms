import { NavLink } from 'react-router-dom'
import { HiHome, HiBookOpen, HiChartBar, HiUser } from 'react-icons/hi'

const items = [
  { label: 'Bosh sahifa', to: '/', icon: HiHome, exact: true },
  { label: 'Kurslar', to: '/courses', icon: HiBookOpen },
  { label: 'Progress', to: '/progress', icon: HiChartBar },
  { label: 'Profil', to: '/profile', icon: HiUser },
]

export default function BottomNav() {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-[70px] bg-white/92 backdrop-blur-nav border-t border-ios-gray2 flex items-start pt-2.5 z-[150]">
      {items.map(({ label, to, icon: Icon, exact }) => (
        <NavLink
          key={to}
          to={to}
          end={exact}
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center gap-1 cursor-pointer ${isActive ? '' : ''}`
          }
        >
          {({ isActive }) => (
            <>
              <Icon className={`text-[22px] ${isActive ? 'text-ios-blue' : 'text-ios-gray4'}`} />
              <span className={`text-[10px] font-medium ${isActive ? 'text-ios-blue' : 'text-ios-gray4'}`}>{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
