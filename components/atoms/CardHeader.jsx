export default function CardHeader({ title, description, icon = null }) {

  const iconHtml = icon ?
    <i className={`fa fa-${icon} mr-4`}></i>
    : null

  return (
    <div className='flex flex-col w-full gap-4 justify-start'>
      <h2 className='text-2xl font-bold tracking-tight sm:text-3xl md:text-2xl'>
        {iconHtml}
        {title}
      </h2>
      <p className='text-lg'>{description}</p>
      <hr className='border-blueGray-300' />
    </div>
  )
}
