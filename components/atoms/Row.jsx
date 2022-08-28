export default function Row({ children, gap = 0 }) {
  const gapStyle = `gap-${gap}`
  return (
    <div className={`flex flex-row w-full justify-between items-center ${gapStyle}`}>
      {children}
    </div>
  )
}
