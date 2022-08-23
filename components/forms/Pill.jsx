export default function Pill({ value, active, onClick }) {

  const derivedClass = active ?
    'bg-blueGray-900 text-slate-100 hover:bg-blueGray-700 active:bg-blueGray-900'
    : 'text-blueGray-900 bg-slate-200 hover:bg-blueGray-900 hover:text-slate-100 active:text-blueGray-900 active:bg-slate-200'

  return (
    <div
      className={`flex items-center justify-center min-h-12 min-w-28 w-auto px-4 py-2 rounded-md cursor-pointer transition-all ${derivedClass}`}
      onClick={() => onClick(value)}
    >
      {value}
    </div>
  )
}