import { Link } from 'react-router-dom'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg shadow-brand-500/20">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L3 7v10l9 5 9-5V7l-9-5z"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M12 7v10M7.5 9.5L12 12l4.5-2.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span className="text-lg font-bold tracking-tight text-slate-900">GuideWire</span>
    </Link>
  )
}
