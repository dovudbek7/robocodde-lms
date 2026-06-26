const colorMap = {
  blue: 'bg-ios-blue',
  green: 'bg-ios-green',
  purple: 'bg-ios-purple',
  orange: 'bg-ios-orange',
}

export default function ProgressBar({ value = 0, color = 'blue', className = '' }) {
  return (
    <div className={`h-1.5 bg-ios-gray2 rounded-full overflow-hidden ${className}`}>
      <div
        className={`h-full rounded-full transition-all duration-500 ${colorMap[color] ?? colorMap.blue}`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  )
}
