import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import ErrorAlert from '../../components/alerts/ErrorMessgae'
import SuccessAlert from '../../components/alerts/SuccessMessage'
import ProfileNavbar from '../../components/Navbars/ProfileNavbar'
import ProfileSidebar from '../../components/Navbars/ProfileSidebar'
import ButtonOutline from '../../components/buttons/ButtonOutline'
import IconButton from '../../components/buttons/IconButton'
import InputText from '../../components/forms/InputText'
import FormControl from '../../components/forms/FormControl'
import InputEmail from '../../components/forms/InputEmail'
import Select from '../../components/forms/Select'
import PillList from '../../components/forms/PillList'
import ButtonLogout from '../../components/buttons/ButtonLogout'


export default function Profile() {

  const auth = getAuth()
  const router = useRouter()

  const [user, setUser] = useState(null)
  const [error, setError] = useState('This is an error message')
  const [success, setSuccess] = useState('This is an success message')
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

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      setUser(firebaseUser)
      console.log('firebase user >', firebaseUser)
    } else {
      setUser(null)
    }
  })

  const redirectToPassChange = () => {
    router.push('/profile/password/', )
  }

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
                    alt=""
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
                <ButtonOutline>
                  <i className='fa fa-save'></i>
                  &nbsp; Save
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
                <InputText value={user.displayName} name='Username' />
              </FormControl>
              <FormControl title={'Email'}>
                <InputEmail value={user.email} name='email' verified={user.emailVerified} />
              </FormControl>
              <FormControl title={'Alternet Email'}>
                <InputEmail
                  value={''}
                  helpText={'This is your alternet email address. This can be used as a recovery email'}
                  name='alt-email'
                  verificationNeeded={false}
                />
              </FormControl>
              <FormControl title={'Phone Number'}>
                <InputText value={''} name='Phone' />
              </FormControl>
              <FormControl title={'Gender'}>
                <PillList
                  value={'Male'}
                  list={['Male', 'Female', 'Others']}
                />
              </FormControl>
              <div className='flex flex-row w-full justify-between items-center'>
                <div className='flex w-7/12 items-center'>
                  <FormControl title={'Date Of Birth'}>
                    <InputText type={'date'} value={''} name='dob' />
                  </FormControl>
                </div>
                <div className='flex w-4/12 items-center'>
                  <FormControl title={'Country'}>
                    <Select name={'country'} options={countries} value={'IN'}></Select>
                  </FormControl>
                </div>
              </div>
              <div className='flex flex-row w-full justify-between items-center'>
                <div className='flex w-6/12 items-center'>
                  <FormControl title={'Height'}>
                    <InputText value={''} name='height' helpText={'Your height in cm'} />
                  </FormControl>
                </div>
                <div className='flex w-5/12 items-center'>
                  <FormControl title={'Weight'}>
                    <InputText value={''} name='weight' helpText={'Your weight in kg'} />
                  </FormControl>
                </div>
              </div>
              <FormControl title={'Marital Status'}>
                <PillList
                  value={'Single'}
                  list={['Single', 'Divorced', 'Others']}
                />
              </FormControl>
              <FormControl title={'Diet'}>
                <PillList
                  value={'Non Veg'}
                  list={['Veg', 'Non Veg', 'Others']}
                />
              </FormControl>
              <div className='flex flex-row w-full justify-between items-center'>
                <div className='flex w-6/12 items-center'>
                  <FormControl title={'Blood Group'}>
                    <Select name={'blood'} options={BloodGroups} value={'B'}></Select>
                  </FormControl>
                </div>
                <div className='flex w-5/12 items-center'>
                  <FormControl title={'Disabled'}>
                    <PillList
                      value={'No'}
                      list={['Yes', 'No']}
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