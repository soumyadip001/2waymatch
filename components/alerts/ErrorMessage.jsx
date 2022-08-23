export default function ErrorMessage({ children }) {
  return (
    <div
      className="h-auto flex justify-start items-center py-2 w-full text-red-600 font-normal rounded text-sm"
    >
      {children}
    </div>
  )
}