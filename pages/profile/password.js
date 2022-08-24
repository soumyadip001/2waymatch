import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getAuth, signInWithEmailAndPassword, updatePassword } from 'firebase/auth'

import ProfileNavbar from '../../components/Navbars/ProfileNavbar'
import ProfileSidebar from '../../components/Navbars/ProfileSidebar'
import ErrorAlert from '../../components/alerts/ErrorMessgae'
import SuccessAlert from '../../components/alerts/SuccessMessage'
import FormControl from '../../components/forms/FormControl'
import InputPassword from '../../components/forms/InputPassword'
import ButtonOutline from '../../components/buttons/ButtonOutline'
import Button from '../../components/buttons/Button'
import useAuth from '../../components/useAuth'

export default function Password() {

  const auth = getAuth()
  const router = useRouter()
  const user = useAuth()
  const passMatch = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [existingPass, setExistingPass] = useState('')
  const [newPass, setNewPass] = useState('')
  const [retypePass, setRetypePass] = useState('')
  const [newPassError, setNewPassError] = useState('')


  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null)
    setSuccess(null)
    setNewPassError(null)

    // add validation
    if (newPass.length < 8 || retypePass.length < 8) {
      setNewPassError('Password must contain at least 8 characters')
    }
    if (!passMatch.test(newPass)) {
      setNewPassError('Password must contain at least one special character')
    }
    if (!existingPass || !newPass || !retypePass) {
      setError('All the fields are mandatory')
    }
    if (newPass !== retypePass) {
      setError('Password mismatch!')
    }

    if (!error && !newPassError) {
      try {
        await signInWithEmailAndPassword(auth, user.email, existingPass)
        const updatedUser = await updatePassword(auth.currentUser, newPass)
        if (updatedUser) {
          setSuccess('Password updated successfully!')
        }
      } catch (err) {
        console.error(err)
        setError('Invalid credentials')
      }
    }
  }

  const handleGoBack = () => {
    router.push('/profile')
  }

  return (
    <div className="flex w-full h-full flex-col px-4 sm:px-6 lg:px-10">
      <ProfileNavbar />
      <div className='flex h-auto w-full justify-start items-center border-b border-gray-200 pb-4'>
        <h1 className='text-4xl font-bold'>Change Password</h1>
      </div>
      <div className="flex flex-row w-full pt-4">
        <div className="flex flex-col w-1/5">
          <ProfileSidebar active='Password' />
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
          <div className='flex flex-col w-full'>
            <form className="flex flex-col p-4" onSubmit={handleSubmit}>
              <div className='h-0 w-0'>
                <input type={'hidden'} value={''} />
              </div>
              { user &&
                <input type={'hidden'} value={user.uid} />
              }
              <FormControl title={'Existing Password'}>
                <InputPassword
                  name={'ExistingPassword'}
                  required
                  value={existingPass}
                  onChange={(p) => setExistingPass(p)}
                />
              </FormControl>
              <FormControl title={'New Password'}>
                <InputPassword
                  name={'NewPassword'}
                  required
                  helpText={'Password length must be at least 8 characters. Password must have one uppercase letter, one number, one special character.'}
                  value={newPass}
                  onChange={(p) => setNewPass(p)}
                  error={newPassError}
                />
              </FormControl>
              <FormControl title={'Retype Password'}>
                <InputPassword
                  name={'RetypePassword'}
                  required
                  value={retypePass}
                  onChange={(p) => setRetypePass(p)}
                />
              </FormControl>
              <div className='flex flex-row w-full justify-start items-center gap-4 my-4'>
                <Button Outline onClick={handleGoBack} type={'button'} white>Go Back</Button>
                <ButtonOutline onClick={handleSubmit} type={'submit'}>Change Passsword</ButtonOutline>
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