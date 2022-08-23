import { useState } from "react"

export default function InputText({
  type = 'text', value, name, required = false,
  helpText = null
}) {
  const [val, setValue] = useState(value)

  return (
    <div className="flex flex-col items-start justify-start h-auto w-full">
      <input
        type={type}
        className='block w-full rounded-md border border-gray-300 focus:border-blueGray-600 focus:outline-none focus:ring-1 focus:ring-blueGray-600 py-1 px-1.5 text-gray-500'
        value={val}
        name={name}
        id={name}
        required={required}
        onChange={(e) => setValue(e.target.value)}
      />
      {helpText &&
        <span className="font-light text-sm text-gray-400">
          <i className="fa fa-info-circle text-slate-900"></i>
          &nbsp;{helpText}
        </span>
      }
    </div>
  )
}