export default function FormControl({ title, children, hidden = false }) {
  return ( !hidden &&
    <div className='flex items-start justify-between w-full py-2'>
      <h4 className='text-md font-semibold'>{title}:</h4>
      <div className='flex w-3/4'>
        {children}
      </div>
    </div>
  )
}