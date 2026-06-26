const variants = {
  blue:   'bg-blue-50 text-ios-blue',
  green:  'bg-green-50 text-ios-green',
  purple: 'bg-purple-50 text-ios-purple',
  orange: 'bg-orange-50 text-ios-orange',
  gray:   'bg-ios-gray2 text-ios-gray4',
}

export default function Badge({ children, variant = 'blue', className = '' }) {
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold ${variants[variant] ?? variants.blue} ${className}`}>
      {children}
    </span>
  )
}
