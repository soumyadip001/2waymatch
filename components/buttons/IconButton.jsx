import { useRouter } from "next/router";

export default function IconButton({
  href = '#', children, primary = false, border = false, rouded = true
}) {
  const tailWindClasses = 'group inline-flex items-center justify-center p-2 text-sm font-semibold focus:outline-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 text-white active:text-slate-100 active:text-gray-900'

  const derivedClasses = primary ?
    'btn bg-blue-600 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600'
    : null
  
  const derivedBorderClasses = border ? 'border-2 border-white' : null
  const derivedRoundedClasses = rouded ? 'rounded-full' : 'rounded-md'

  const router = useRouter()

  const handleClick = () => {
    if (href && href !== '#') {
      router.push(href)
    }
  }

  return (
    <button
      className={`${tailWindClasses} ${derivedClasses} ${derivedBorderClasses} ${derivedRoundedClasses}`}
      onClick={handleClick}
    >{children}</button>
  )
}
