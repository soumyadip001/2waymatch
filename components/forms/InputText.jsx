import { useEffect, useState } from "react"

export default function InputText({
  type = 'text', value, name, required = false,
  maxLength = 100,
  helpText = null,
  onChange = null,
  readOnly = false
}) {
  const [val, setValue] = useState(value)

  const setAndEmitValue = (updatedVal) => {
    setValue(updatedVal)
    onChange(updatedVal)
  }

  useEffect(() => {
    setValue(value)
  }, [value])

  return (
    <div className="flex flex-col items-start justify-start h-auto w-full">
      <input
        type={type}
        className='block w-full rounded-md border border-gray-300 focus:border-blueGray-600 focus:outline-none focus:ring-1 focus:ring-blueGray-600 py-1 px-1.5 text-gray-500'
        value={val}
        name={name}
        id={name}
        required={required}
        readOnly={readOnly}
        onChange={(e) => setAndEmitValue(e.target.value)}
        maxLength={maxLength}
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