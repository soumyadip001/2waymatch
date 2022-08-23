import { useState } from 'react'
import { getAuth, sendEmailVerification } from 'firebase/auth'
import ButtonOutline from '../buttons/ButtonOutline';

export default function InputEmail({
  value, name, required = false, verified = false, helpText = null,
  verificationNeeded = true,
  readonly = false
}) {
  const auth = getAuth()

  const [val, setValue] = useState(value)
  const [error, setError] = useState('This is an error message')
  const [success, setSuccess] = useState('This is an success message')

  const flexWidthClass = verificationNeeded ? 'w-9/12' : 'w-full'

  const sendVerificationEmail = async () => {
    try {
      const result = await sendEmailVerification(auth.currentUser)
      setSuccess('Email has been triggered')
      console.log(result)
    } catch (err) {
      setError('Unable to send verification email')
      console.error(err)
    }
  }

  return (
    <div className="flex items-center justify-between h-auto w-full">
      <div className={`flex flex-col gap-2 ${flexWidthClass}`}>
        <input
          type={'email'}
          className='block w-full rounded-md border border-gray-300 focus:border-blueGray-600 focus:outline-none focus:ring-1 focus:ring-blueGray-600 py-1 px-1.5 text-gray-500'
          value={val}
          name={name}
          id={name}
          required={required}
          readOnly={readonly}
          onChange={(e) => setValue(e.target.value)}
        />
        {helpText &&
          <span className="font-light text-sm text-gray-400">
            <i className="fa fa-info-circle text-slate-900"></i>
            &nbsp;{helpText}
          </span>
        }
      </div>
      {verificationNeeded &&
        <div className="flex flex-row w-2/12">
          {verified &&
            <span className="text-green-500 text-sm">Email Verified</span>
          }
          {!verified &&
            <ButtonOutline onClick={sendVerificationEmail}>Verify</ButtonOutline>
          }
        </div>
      }
    </div>
  )
}