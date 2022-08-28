export default function Card({ children }) {
  return (
    <div className="flex flex-col w-full border border-blueGray-900 border-opacity-20 rounded-md py-8 px-16 mb-4 shadow-md">
      {children}
    </div>
  )
}