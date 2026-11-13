// Decorative ascending bars echoing the WeGroom logo mark.
export default function StairMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 160" className={className} aria-hidden fill="currentColor">
      <path d="M0 160 70 120v40zM90 110 150 70v90zM170 80 240 0v160z" />
    </svg>
  )
}
