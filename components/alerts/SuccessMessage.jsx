export default function SuccessAlert({ children }) {
  return (
    <div
      className="h-auto min-h-11 flex justify-start items-center p-4 w-full bg-green-200 text-green-600 font-bold rounded"
    >
      {children}
    </div>
  )
}