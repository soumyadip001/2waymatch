export default function CardFooter({children}) {
  return (
    <div className='flex flex-row w-full justify-start items-center gap-4 mt-4'>
      {children}
    </div>
  )
}