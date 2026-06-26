import { HiExternalLink, HiBookOpen, HiVideoCamera, HiDocumentText } from 'react-icons/hi'

function getIcon(url) {
  if (url.includes('youtube') || url.includes('youtu')) return HiVideoCamera
  if (url.includes('mdn') || url.includes('mozilla')) return HiDocumentText
  return HiBookOpen
}

export default function ResourcesTab({ resources = [] }) {
  if (!resources.length) return <p className="text-ios-gray4 text-sm py-4 px-5">Resurslar mavjud emas</p>

  return (
    <div className="bg-white rounded-2xl overflow-hidden">
      {resources.map(({ title, url }, i) => {
        const Icon = getIcon(url)
        return (
          <a
            key={i}
            href={`https://${url}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3.5 px-5 py-4 hover:bg-ios-gray1 transition-colors cursor-pointer ${i < resources.length - 1 ? 'border-b border-ios-gray2' : ''}`}
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
              <Icon className="text-ios-blue text-xl" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[15px] font-semibold text-ios-label">{title}</p>
              <p className="text-xs text-ios-blue mt-0.5 truncate">{url}</p>
            </div>
            <HiExternalLink className="text-ios-gray3 text-lg shrink-0" />
          </a>
        )
      })}
    </div>
  )
}
