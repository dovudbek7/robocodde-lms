export default function VocabTable({ vocab = [] }) {
  if (!vocab.length) return <p className="text-ios-gray4 text-sm py-4 px-5">Vocabulary mavjud emas</p>

  return (
    <div className="bg-white rounded-2xl overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-ios-gray2">
            <th className="text-left px-5 py-3 text-xs font-bold text-ios-gray4 uppercase tracking-wider">🇺🇿 O'zbekcha</th>
            <th className="text-left px-5 py-3 text-xs font-bold text-ios-gray4 uppercase tracking-wider">🇬🇧 English</th>
            <th className="text-left px-5 py-3 text-xs font-bold text-ios-gray4 uppercase tracking-wider">🇷🇺 Ruscha</th>
          </tr>
        </thead>
        <tbody>
          {vocab.map(({ uz, en, ru }, i) => (
            <tr key={i} className="border-b border-ios-gray2 last:border-0 hover:bg-ios-gray1 transition-colors">
              <td className="px-5 py-3.5 text-[15px] font-semibold text-ios-label">{uz}</td>
              <td className="px-5 py-3.5 text-[15px] font-medium text-ios-blue">{en}</td>
              <td className="px-5 py-3.5 text-[15px] text-ios-gray4">{ru}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
