import { useState } from 'react'
import { HiMenu, HiSearch } from 'react-icons/hi'
import { useLocation, Link } from 'react-router-dom'

const titles = {
  '/': 'Bosh sahifa',
  '/courses': 'Kurslar',
  '/progress': 'Progressim',
  '/profile': 'Profil',
}

function getTitle(pathname) {
  if (titles[pathname]) return titles[pathname]
  if (pathname.startsWith('/courses/')) return 'Kurs darslari'
  if (pathname.startsWith('/lessons/')) return 'Dars'
  return 'Robocodde'
}

export default function Topbar({ onMenuClick }) {
  const { pathname } = useLocation()

  return (
    <header className="bg-white/88 backdrop-blur-nav border-b border-ios-gray2 h-14 flex items-center justify-between px-5 lg:px-8 sticky top-0 z-[100]">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          aria-label="Menyu ochish"
          className="lg:hidden p-1.5 rounded-lg hover:bg-ios-gray1 transition-colors"
        >
          <HiMenu className="text-2xl text-ios-label" />
        </button>
        <h1 className="text-[17px] font-bold tracking-tight text-ios-label">{getTitle(pathname)}</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 bg-ios-gray1 rounded-xl px-3 py-2 w-52">
          <HiSearch className="text-ios-gray4 text-sm shrink-0" />
          <input
            type="text"
            placeholder="Dars yoki mavzu..."
            className="bg-transparent outline-none text-sm text-ios-label placeholder:text-ios-gray4 w-full"
          />
        </div>
        <Link to="/profile" aria-label="Profil" className="w-8 h-8 rounded-full bg-gradient-to-br from-ios-blue to-ios-purple flex items-center justify-center text-white text-xs font-bold shrink-0 hover:opacity-85 transition-opacity">D</Link>
      </div>
    </header>
  )
}
