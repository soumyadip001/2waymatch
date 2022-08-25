export default function SuccessMessage({ children }) {
  return (
    <div
      className="h-auto flex justify-start items-center py-0 w-full text-green-600 font-normal rounded text-sm"
    >
      <i className="fa fa-check mr-1"></i>
      {children}
    </div>
  )
}