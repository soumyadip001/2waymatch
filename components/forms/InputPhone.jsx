import { useEffect, useState } from "react"

export default function InputPhone({
  type = 'number', value, name, required = false,
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
      <div className="flex flex-row w-full justify-start items-center gap-4">
        <input
          type={'text'}
          className='w-1/12 rounded-md border border-gray-300 py-1 px-1.5 text-gray-500'
          value={'+91'}
          readOnly
        />
        <input
          type={type}
          className='block w-11/12 rounded-md border border-gray-300 focus:border-blueGray-600 focus:outline-none focus:ring-1 focus:ring-blueGray-600 py-1 px-1.5 text-gray-500'
          value={val}
          name={name}
          id={name}
          required={required}
          readOnly={readOnly}
          onChange={(e) => setAndEmitValue(e.target.value)}
        />
      </div>
      {helpText &&
        <span className="font-light text-sm text-gray-400">
          <i className="fa fa-info-circle text-slate-900"></i>
          &nbsp;{helpText}
        </span>
      }
    </div>
  )
}