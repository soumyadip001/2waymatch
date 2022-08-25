import { useState } from 'react'
import ErrorMessage from '../alerts/ErrorMessage'

export default function InputPassword({
  value = '', name, required = false,
  helpText = null,
  readOnly = false,
  onChange = null,
  error = ''
}) {

  const [val, setValue] = useState(value)
  const [type, setType] = useState('password')

  const setAndEmitValue = (updatedVal) => {
    setValue(updatedVal)
    onChange(updatedVal)
  }

  const togglePassword = () => {
    if (type === 'password') {
      setType('text')
    } else {
      setType('password')
    }
  }

  return (
    <div className="flex flex-col items-start justify-start h-auto w-full">
      <div className='flex flex-row items-center justify-start w-full'>
        <input
          type={type}
          className='block w-11/12 rounded-l-md border border-gray-300 focus:border-blueGray-600 focus:outline-none focus:ring-1 focus:ring-blueGray-600 py-1 px-1.5 text-gray-500'
          value={val}
          name={name}
          id={name}
          required={required}
          readOnly={readOnly}
          onChange={(e) => setAndEmitValue(e.target.value)}
        />
        <div className='w-1/12'>
          <button
            className='group inline-flex items-center justify-center rounded-r-md py-2 px-4 text-sm font-semibold border-2 bg-slate-900 border-slate-900 disabled:cursor-not-allowed text-gray-100 disabled:bg-slate-400'
            type='button'
            role={'button'}
            aria-label='toggle password visibility'
            onClick={togglePassword}
          >
            <i className='fa fa-eye'></i>
          </button>
        </div>
      </div>
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