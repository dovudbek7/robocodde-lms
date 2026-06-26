export default function EmptyState({ icon = '📭', title = 'Hech narsa topilmadi', desc = '' }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-2 text-center">
      <span className="text-4xl">{icon}</span>
      <p className="text-sm font-semibold text-ios-label mt-1">{title}</p>
      {desc && <p className="text-xs text-ios-gray4">{desc}</p>}
    </div>
  )
}
