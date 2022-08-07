export default function ButtonWhite({ children, type }) {
  const _type = type ? type : 'button';

  return (
    <button
      type={_type}
      className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold tracking-tight shadow-sm focus:outline-none bg-white text-blue-600 hover:text-blue-700 focus-visible:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-50 active:text-blue-900/80 disabled:opacity-40 disabled:hover:text-blue-600 mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
    >{ children }</button>
  )
}
