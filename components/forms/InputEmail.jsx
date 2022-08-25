import { useEffect, useState } from 'react'
import { getAuth, sendEmailVerification } from 'firebase/auth'
import ButtonOutline from '../buttons/ButtonOutline';
import ErrorMessage from '../alerts/ErrorMessage';
import SuccessMessage from '../alerts/SuccessMessage';

export default function InputEmail({
  value, name, required = false,
  helpText = null,
  verified = false, verificationNeeded = true,
  readOnly = false,
  onChange = null,
  validateOnType = false
}) {
  const auth = getAuth()

  const [val, setValue] = useState(value)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

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

  const setAndEmitValue = (updatedVal) => {
    setValue(updatedVal)
    onChange(updatedVal)
    if (validateOnType) {
      setSuccess(null)
      setError(null)
      validateEmail(updatedVal) ? setSuccess('email is valid') : setError('Invalid email')
    }
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  useEffect(() => {
    setValue(value)
  }, [value])

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
          readOnly={readOnly}
          onChange={(e) => setAndEmitValue(e.target.value)}
        />
        {helpText &&
          <span className="font-light text-sm text-gray-400">
            <i className="fa fa-info-circle text-slate-900"></i>
            &nbsp;{helpText}
          </span>
        }
        {error &&
          <ErrorMessage>{ error }</ErrorMessage>
        }
        {success &&
          <SuccessMessage>{ success }</SuccessMessage>
        }
      </div>
      {verificationNeeded &&
        <div className="flex flex-row w-2/12">
          {verified &&
            <span className="text-green-500 text-sm">
              <i className="fa fa-check mr-1"></i>
              Email Verified
            </span>
          }
          {!verified &&
            <ButtonOutline onClick={sendVerificationEmail}>Verify</ButtonOutline>
          }
        </div>
      }
    </div>
  )
}