export default function LoadingSpinner({ text = 'Yuklanmoqda...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-ios-gray2 border-t-ios-blue animate-spin" />
      <p className="text-sm text-ios-gray4">{text}</p>
    </div>
  )
}
