export default function ErrorAlert({ children }) {
  return (
    <div
      className="h-auto min-h-11 flex justify-start items-center p-4 w-full bg-red-200 text-red-600 font-bold rounded"
    >
      {children}
    </div>
  )
}