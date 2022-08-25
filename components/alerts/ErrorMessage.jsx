export default function ErrorMessage({ children }) {
  return (
    <div
      className="h-auto flex justify-start items-center py-0 w-full text-red-600 font-normal rounded text-sm"
    >
      <i className="fa fa-times mr-2"></i>
      {children}
    </div>
  )
}