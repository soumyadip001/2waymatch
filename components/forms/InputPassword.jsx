import { useState } from 'react'
import ErrorMessage from '../alerts/ErrorMessage'

export default function InputPassword({
  value = '', name, required = false,
  helpText = null,
  readonly = false,
  onChange = null,
  error = ''
}) {

  const [val, setValue] = useState(value)

  const setAndEmitValue = (updatedVal) => {
    setValue(updatedVal)
    onChange(updatedVal)
  }

  return (
    <div className="flex flex-col items-start justify-start h-auto w-full">
      <input
        type={'password'}
        className='block w-full rounded-md border border-gray-300 focus:border-blueGray-600 focus:outline-none focus:ring-1 focus:ring-blueGray-600 py-1 px-1.5 text-gray-500'
        value={val}
        name={name}
        id={name}
        required={required}
        readOnly={readonly}
        onChange={(e) => setAndEmitValue(e.target.value)}
      />
      {error &&
        <ErrorMessage>{ error }</ErrorMessage>
      }
      {helpText &&
        <span className="font-light text-sm text-gray-400">
          <i className="fa fa-info-circle text-slate-900"></i>
          &nbsp;{helpText}
        </span>
      }
    </div>
  )
}