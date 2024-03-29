function Button({ children, onClick, primary = false }) {

  const tailWindClasses = 'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600';
  const derivedClasses = primary ? 'btn btn--primary' : 'btn'

  return (
    <button
      className={`${tailWindClasses} ${derivedClasses}`}
      onClick={onClick}
    >{children}</button>
  )
}

export default Button;
