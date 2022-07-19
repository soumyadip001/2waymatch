import Image from 'next/image'

export default function ContactCard({ src, alt, name, role, tel, email }) {
  return (
    <div className="flex basis-full md:basis-1/2 flex-col items-center md:items-start">
      <img
        src={src}
        alt={alt}
        className="h-full h-full md:h-20 md:w-20 overflow-hidden rounded"
      />
      <h5 className="mt-4">{ name }</h5>
      <p className="text-slate-400">{ role }</p>
      <div className="border-t-2 border-blue-600 pt-2 md:pt-6 mt-2 md:mt-6 flex flex-col w-9/12">
        <p>{ tel }</p>
        <a href="mailto:noreply@gmail.com" className="text-blue-400 underline">{ email }</a>
      </div>
    </div>
  )
}