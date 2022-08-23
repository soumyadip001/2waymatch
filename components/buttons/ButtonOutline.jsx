function ButtonOutline({ children, onClick, primary = false, white = false, type = 'button' }) {

  const tailWindClasses = 'group inline-flex items-center justify-center rounded-md py-2 px-4 text-sm font-semibold border-2 bg-slate-900 border-slate-900'

  const primaryClasses = primary ? 'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600' : null

  const whiteClasses = white ? 'bg-slate-100 text-gray-900 border-gray-900' : 'text-gray-100'

  return (
    <button
      className={`${tailWindClasses} ${primaryClasses} ${whiteClasses}`}
      onClick={onClick}
      type={type}
    >{children}</button>
  )
}

export default ButtonOutline;
