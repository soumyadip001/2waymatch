/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import ErrorAlert from '../../components/alerts/ErrorAlert'
import SuccessAlert from '../../components/alerts/SuccessAlert'
import ProfileNavbar from '../../components/Navbars/ProfileNavbar'
import ProfileSidebar from '../../components/Navbars/ProfileSidebar'
import ButtonOutline from '../../components/buttons/ButtonOutline'
import IconButton from '../../components/buttons/IconButton'
import InputText from '../../components/forms/InputText'
import InputPhone from '../../components/forms/InputPhone'
import InputEmail from '../../components/forms/InputEmail'
import FormControl from '../../components/forms/FormControl'
import Select from '../../components/forms/Select'
import PillList from '../../components/forms/PillList'
import ButtonLogout from '../../components/buttons/ButtonLogout'

import useAuth from '../../components/useAuth'
import InputTextarea from '../../components/forms/InputTextarea'

export default function Profile() {

  const user = useAuth()
  const router = useRouter()
  const defaultFormData = {
    name: '', email: '', altEmail: '',
    bio: '', phone: '', gender: 'Male', dob: '',
    country: 'India', height: '', weight: '',
    maritalStatus: 'Single', diet: 'Non Veg',
    bloodGroup: '', disabled: false,
  }

  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [formData, setFormData] = useState(defaultFormData)
  const [loader, setLoader] = useState(false)

  const countries = [
    { key: 'IN', value: 'India' },
    { key: 'CA', value: 'Canada' },
    { key: 'USA', value: 'United States' },
  ]
  const BloodGroups = [
    { key: 'A+', value: 'A+' },
    { key: 'A-', value: 'A-' },
    { key: 'AB', value: 'AB' },
    { key: 'B+', value: 'B+' },
    { key: 'B-', value: 'B-' },
    { key: 'O-', value: 'O-' },
    { key: 'O+', value: 'O+' },
  ]

  const redirectToPassChange = () => {
    router.push('/profile/password/', )
  }

  const updateFormData = (key, value) => {
    if (key) {
      setFormData({
        ...formData,
        [key]: value
      })
    }
  }

  const handleProfileUpdate = async () => {
    setError(null)
    setSuccess(null)
    console.log(formData)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        firebaseUserId: user.uid,
        name: user.displayName,
        email: user.email,
      })
    }

    if (
      !formData.altEmail || !formData.phone || !formData.gender
      || !formData.dob || !formData.country
    ) {
      setError('Please fill alternate-email, phone, gender, date of birth and country')
    } else {
      setLoader(true)
      try {
        const url = process.env.NEXT_PUBLIC_AUTH_SERVICE_API_URL + '/auth/profile/basic'
        const response = await fetch(url, options)
        const result = await response.json()
        console.log(result)
        setLoader(false)
        setSuccess('Profile updated successfully!')
      } catch (err) {
        setLoader(false)
        setError('Operation failed!')
        console.error(err)
      }
    }
  }

  const transformDateFormat = (date) => {
    return date.split('T')[0]
  }

  useEffect(() => {
    async function fetchData() {
      const url = process.env.NEXT_PUBLIC_AUTH_SERVICE_API_URL + '/auth/profile/basic'
      try {
        const response = await fetch(`${url}/${user.uid}`)
        const result = await response.json()
        if (result && result.success) {
          console.log('>>', result.data)
          setFormData({
            ...result.data,
            dob: transformDateFormat(result.data.dob)
          })
          setError(null)
        }
      } catch (err) {
        setSuccess(null)
        setError('Operation failed!')
      }
    }
    if (user && user.uid) {
      fetchData()
    }
  }, [user])

  return (
    <div className="flex w-full h-full flex-col px-4 sm:px-6 lg:px-10">
      <ProfileNavbar />
      <div className='flex h-auto w-full justify-start items-center border-b border-gray-200 pb-4'>
        <h1 className='text-4xl font-bold'>Profile Page</h1>
      </div>
      <div className="flex flex-row w-full pt-4">
        <div className="flex flex-col w-1/5">
          <ProfileSidebar />
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
            <div className='flex items-center justify-center w-full h-48 bg-gradient-to-r from-purple-300 to-pink-300 rounded-md rounded-tl-3xl relative p-4'>
              <div className='absolute bottom-4 right-4'>
                <IconButton border={true} rouded={false}>
                  <i className='fa fa-camera-alt text-2xl'></i>
                </IconButton>
              </div>
            </div>
            <div className='flex items-center justify-between w-full h-32 p-4 -mt-8 z-10'>
              <div className='flex items-center justify-start gap-4'>
                <div className='flex items-center justify-center w-32 h-32 bg-gray-300 rounded-full border-white border-4 overflow-hidden'>
                  <img
                    alt="Profile"
                    src={`/img/avatar-1.png`}
                    decoding="async"
                    data-nimg="intrinsic"
                    className='h-32 w-32 object-cover'
                  />
                </div>
                <div>
                  <h2 className='text-2xl font-bold tracking-tight sm:text-3xl md:text-2xl'>Profile</h2>
                  <p className='text-lg'>Update your photo and personal details</p>
                </div>
              </div>
              <div className='flex flex-row gap-4'>
                <ButtonOutline
                  type={'button'}
                  onClick={handleProfileUpdate}
                  disabled={loader}
                >
                  { loader &&
                    <i className='fa fa-spinner fa-spin fa-fw mr-2' aria-hidden={'true'}></i>
                  }
                  { !loader &&
                    <i className='fa fa-save mr-2' aria-hidden={'true'}></i>
                  }
                  Save
                </ButtonOutline>
                <ButtonOutline white>Cancel</ButtonOutline>
              </div>
            </div>
          </div>
          { user &&
            <form className="flex flex-col p-4">
              <div className='h-0 w-0'>
                <input type={'hidden'} value={user.uid} />
              </div>
              <FormControl title={'Name'}>
                <InputText value={user.displayName} name='Username' readOnly={true} />
              </FormControl>
              <FormControl title={'Email'}>
                <InputEmail value={user.email} name='email' verified={user.emailVerified} readOnly={true} />
              </FormControl>
              <FormControl title={'Alternet Email'}>
                <InputEmail
                  value={formData.altEmail}
                  helpText={'This is your alternet email address. This can be used as a recovery email'}
                  name='alt-email'
                  verificationNeeded={false}
                  onChange={(p) => updateFormData('altEmail', p)}
                />
              </FormControl>
              <FormControl title={'Phone Number'}>
                <InputPhone
                  value={formData.phone} name='Phone'
                  onChange={(p) => updateFormData('phone', p)}
                />
              </FormControl>
              <FormControl title={'About Yourself'}>
                <InputTextarea
                  value={user.bio} name='Bio'
                  onChange={(p) => updateFormData('bio', p)}
                />
              </FormControl>
              <FormControl title={'Gender'}>
                <PillList
                  value={formData.gender}
                  list={['male', 'female', 'others']}
                  onChange={(p) => updateFormData('gender', p)}
                />
              </FormControl>
              <div className='flex flex-row w-full justify-between items-center'>
                <div className='flex w-7/12 items-center'>
                  <FormControl title={'Date Of Birth'}>
                    <InputText
                      type={'date'}
                      value={formData.dob}
                      name='dob'
                      onChange={(p) => updateFormData('dob', p)}
                    />
                  </FormControl>
                </div>
                <div className='flex w-4/12 items-center'>
                  <FormControl title={'Country'}>
                    <Select
                      name={'country'}
                      options={countries}
                      value={formData.country}
                      onChange={(p) => updateFormData('country', p)}
                    ></Select>
                  </FormControl>
                </div>
              </div>
              <div className='flex flex-row w-full justify-between items-center'>
                <div className='flex w-6/12 items-center'>
                  <FormControl title={'Height'}>
                    <InputText
                      value={formData.height} name='height' helpText={'Your height in cm'}
                      onChange={(p) => updateFormData('height', p)}
                    />
                  </FormControl>
                </div>
                <div className='flex w-5/12 items-center'>
                  <FormControl title={'Weight'}>
                    <InputText
                      value={formData.weight || ''} name='weight' helpText={'Your weight in kg'}
                      onChange={(p) => updateFormData('weight', p)}
                    />
                  </FormControl>
                </div>
              </div>
              <FormControl title={'Marital Status'}>
                <PillList
                  value={formData.maritalStatus}
                  list={['Single', 'Divorced', 'Others']}
                  onChange={(p) => updateFormData('maritalStatus', p)}
                />
              </FormControl>
              <FormControl title={'Diet'}>
                <PillList
                  value={formData.diet}
                  list={['Veg', 'Non Veg', 'Others']}
                  onChange={(p) => updateFormData('diet', p)}
                />
              </FormControl>
              <div className='flex flex-row w-full justify-between items-center'>
                <div className='flex w-6/12 items-center'>
                  <FormControl title={'Blood Group'}>
                    <Select
                      name={'blood'} options={BloodGroups} value={formData.bloodGroup}
                      onChange={(p) => updateFormData('bloodGroup', p)}
                    ></Select>
                  </FormControl>
                </div>
                <div className='flex w-5/12 items-center'>
                  <FormControl title={'Disabled'}>
                    <PillList
                      value={formData.disabled}
                      list={['Yes', 'No']}
                      onChange={(p) => updateFormData('disabled', p)}
                    />
                  </FormControl>
                </div>
              </div>
              <div className='flex flex-row w-full justify-start items-center gap-4 my-4'>
                <ButtonOutline onClick={redirectToPassChange}>Change Passsword</ButtonOutline>
                <ButtonLogout />
              </div>
            </form>
          }

          <div className='text-slate-400'>
            <p className='text-sm'>
              <i className='fa fa-lock text-slate-900'></i>&nbsp; Please check our <span className='text-slate-500 font-semibold'><Link href={'#'}>Privacy and Policy</Link></span> and <span className='text-slate-500 font-semibold'><Link href={'#'}>Terms of Service</Link></span> before you share your details with us.</p>
          </div>
        </div>
      </div>
    </div>
  )
}