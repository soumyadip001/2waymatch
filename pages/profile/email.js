import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { getAuth, updateEmail, sendEmailVerification } from 'firebase/auth'

import ErrorAlert from '../../components/alerts/ErrorAlert'
import SuccessAlert from '../../components/alerts/SuccessAlert'
import ButtonOutline from '../../components/buttons/ButtonOutline'
import FormControl from '../../components/forms/FormControl'
import InputEmail from '../../components/forms/InputEmail'
import ProfileNavbar from '../../components/Navbars/ProfileNavbar'
import ProfileSidebar from '../../components/Navbars/ProfileSidebar'

import useAuth from '../../components/useAuth'
import LoaderIcon from '../../components/icons/LoaderIcon'

export default function Email() {

  const auth = getAuth()
  const router = useRouter()
  const user = useAuth()

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [email, setEmail] = useState('')
  const [loader, setLoader] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null)
    setSuccess(null)

    if (!validateEmail(email)) {
      setError('Please enter a valid email')
    } else if (email === user.email) { 
      setError('Email address is same as previously used email. Please enter another email.')
    } else {
      setLoader(true)
      try {
        const result = await updateEmail(auth.currentUser, String(email).trim().toLowerCase())
        console.log(result)
        setError(null)
        setSuccess('Email address updated! Please check your email for verification.')

        // send verification email now
        await sendEmailVerification(auth.currentUser)
        setLoader(false)
      } catch (err) {
        setLoader(false)
        setSuccess(null)
        console.error(err)
        if (err.message) {
          setError(err.message)
        } else {
          setError('Operation failed')
        }
      }
    }
  }

  const handleGoBack = () => {
    router.push('/profile')
  }

  const validateEmail = (e) => {
    return String(e)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  return (
    <div className="flex w-full h-full flex-col px-4 sm:px-6 lg:px-10">
      <ProfileNavbar />
      <div className='flex h-auto w-full justify-start items-center border-b border-gray-200 pb-4'>
        <h1 className='text-4xl font-bold'>Email</h1>
      </div>
      <div className="flex flex-row w-full pt-4">
        <div className="flex flex-col w-1/5">
          <ProfileSidebar active='Email' />
        </div>
        <div className="flex flex-col w-4/5">
          <div className='flex flex-col w-full h-auto my-4 gap-4'>
            { error &&
              <ErrorAlert>{ error }</ErrorAlert>
            }
            { success &&
              <SuccessAlert>{ success }</SuccessAlert>
            }
          </div>
          <div className='flex flex-col w-9/12'>
            <form className="flex flex-col p-4" onSubmit={handleSubmit}>
              { user &&
                <input type={'hidden'} value={user.uid} />
              }
              <FormControl title={'Enter new email'}>
                <InputEmail
                  name={'email'}
                  value={email}
                  required
                  verificationNeeded={false}
                  onChange={(e) => setEmail(e)}
                  validateOnType={true}
                />
              </FormControl>
              <div className='flex flex-row w-full justify-start items-center gap-4 my-4'>
                <ButtonOutline onClick={handleGoBack} type={'button'} white>Go Back</ButtonOutline>
                <ButtonOutline
                  onClick={handleSubmit}
                  type={'submit'}
                >
                  { loader &&
                    <LoaderIcon />
                  }
                  Update & Verify Email
                </ButtonOutline>
              </div>
            </form>
          </div>
          <div className='text-slate-400'>
            <p className='text-sm'>
              <i className='fa fa-lock text-slate-900'></i>&nbsp; Please check our <span className='text-slate-500 font-semibold'><Link href={'#'}>Privacy and Policy</Link></span> and <span className='text-slate-500 font-semibold'><Link href={'#'}>Terms of Service</Link></span> before you share your details with us.</p>
          </div>
        </div>
      </div>
    </div>
  )
}