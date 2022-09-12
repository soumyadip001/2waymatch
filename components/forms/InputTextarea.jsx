import { useEffect, useState } from "react"

function InputTextarea({
  type = 'text', value, name,
  rows = 5,
  required = false,
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
      <textarea
        className='block w-full rounded-md border border-gray-300 focus:border-blueGray-600 focus:outline-none focus:ring-1 focus:ring-blueGray-600 py-1 px-1.5 text-gray-500'
        name={name}
        id={name}
        required={required}
        readOnly={readOnly}
        onChange={(e) => setAndEmitValue(e.target.value)}
        maxLength={maxLength}
        rows={rows}
      >{val}</textarea>
      {helpText &&
        <span className="font-light text-sm text-gray-400">
          <i className="fa fa-info-circle text-slate-900"></i>
          &nbsp;{helpText}
        </span>
      }
    </div>
  )
}
    
export default InputTextarea