export default function CodeBlock({ code = '', filename = 'App.jsx' }) {
  const highlighted = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/(import|export|default|function|const|let|var|return|from|if|else|for|while)\b/g, '<span class="text-pink-400">$1</span>')
    .replace(/('.*?'|".*?")/g, '<span class="text-yellow-300">$1</span>')
    .replace(/(\/\/.*)/g, '<span class="text-zinc-500">$1</span>')
    .replace(/\b(useState|useEffect|useQuery)\b/g, '<span class="text-cyan-300">$1</span>')

  return (
    <div className="bg-[#1C1C1E] rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.07]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <span className="text-[11px] text-zinc-500 font-mono">{filename}</span>
      </div>
      <pre className="px-4 py-4 overflow-x-auto text-[13px] leading-7 text-zinc-200 font-mono">
        <code dangerouslySetInnerHTML={{ __html: highlighted }} />
      </pre>
    </div>
  )
}
