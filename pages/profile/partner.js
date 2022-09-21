/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import useAuth from '../../components/useAuth'

import Card from '../../components/atoms/Card'
import CardHeader from '../../components/atoms/CardHeader'
import ButtonOutline from '../../components/buttons/ButtonOutline'
import ProfileFooter from '../../components/Footers/ProfileFooter'
import FormControl from '../../components/forms/FormControl'
import InputText from '../../components/forms/InputText'
import ProfileNavbar from '../../components/Navbars/ProfileNavbar'
import ProfileSidebar from '../../components/Navbars/ProfileSidebar'
import PillList from '../../components/forms/PillList'
import CardFooter from '../../components/atoms/CardFooter'
import LoaderIcon from '../../components/icons/LoaderIcon'
import ErrorAlert from '../../components/alerts/ErrorAlert'
import SuccessAlert from '../../components/alerts/SuccessAlert'
import PartnerAstroProfileForm from '../../components/forms/Partner/PartnerAstroProfileForm'
import PartnerEducationProfileForm from '../../components/forms/Partner/PartnerEducationProfileForm'

export default function Partner() {

  const defaultFormData = {
    age: '', height: '', motherTongue: '', religion: '',
    caste: '', maritalStatus: 'Both', childCount: 0, physicalStatus: 'Both',
    yearsTillMarry: 'Within 1 year'
  }

  const user = useAuth()
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [loader, setLoader] = useState(false)
  const [formData, setFormData] = useState(defaultFormData)

  const updateFormData = (key, value) => {
    if (key) {
      setFormData({
        ...formData,
        [key]: value
      })
    }
  }

  const handleBasicProfileSubmit = async (e) => {
    e.preventDefault();
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

    if (!formData.age || !formData.height || !formData.motherTongue || !formData.religion) {
      setError('Please fill all the mandatory details')
    } else if (parseInt(formData.childCount) < 0) {
      setError('Invalid sibling count')
    } else {
      setLoader(true)
      try {
        const url = !local ?
          process.env.NEXT_PUBLIC_AUTH_SERVICE_API_URL + '/auth/profile/partner/basic'
          : 'http://127.0.0.1:4002/auth/profile/partner/basic'
        const response = await fetch(url, options)
        const result = await response.json()
        console.log(result)
        setLoader(false)
        setSuccess('Partner profile details updated successfully!')
      } catch (err) {
        setLoader(false)
        setError('Operation failed!')
        console.error(err)
      }
    }
  }

  return (
    <div className="flex w-full h-full flex-col px-4 sm:px-6 lg:px-10">
      <ProfileNavbar />
      <div className='flex h-auto w-full justify-start items-center border-b border-gray-200 pb-4'>
        <h1 className='text-4xl font-bold'>Partner Profile</h1>
      </div>
      <div className="flex flex-row w-full pt-4">
        <div className="flex flex-col w-1/5">
          <ProfileSidebar active='Partner' />
        </div>
        <div className="flex flex-col w-4/5">
          <div className='flex flex-col w-full'>
            <Card>
              <CardHeader
                title={'Partner Basic details'}
                description={'Please add basic details here'}
                icon={'home'}
              />
              <form className='flex flex-col px-4 w-full mt-4'>
                <div className='flex flex-col w-full h-auto my-4 gap-4'>
                  { error &&
                    <ErrorAlert>{ error }</ErrorAlert>
                  }
                  { success &&
                    <SuccessAlert>{ success }</SuccessAlert>
                  }
                </div>
                { user &&
                  <input type={'hidden'} value={user.uid} />
                }
                <FormControl title={'How many years till marriage'}>
                  <PillList
                    value={formData.yearsTillMarry}
                    list={['Within 1 year', '1 - 2 years', '> 2 years']}
                    onChange={(p) => updateFormData('yearsTillMarry', p)}
                  />
                </FormControl>
                <FormControl title={'Age'}>
                  <InputText
                    value={formData.age} name='age'
                    onChange={(p) => updateFormData('age', p)}
                  />
                </FormControl>
                <FormControl title={'Height'}>
                  <InputText
                    value={formData.height} name='height' helpText={'Your height in cm'}
                    onChange={(p) => updateFormData('height', p)}
                  />
                </FormControl>
                <FormControl title={'Mother Tongue'}>
                  <InputText
                    value={formData.motherTongue} name='motherTongue'
                    onChange={(p) => updateFormData('motherTongue', p)}
                  />
                </FormControl>
                <FormControl title={'Religion'}>
                  <InputText
                    value={formData.religion} name='religion'
                    onChange={(p) => updateFormData('religion', p)}
                  />
                </FormControl>
                <FormControl title={'Caste'}>
                  <InputText
                    value={formData.caste} name='caste'
                    onChange={(p) => updateFormData('caste', p)}
                  />
                </FormControl>
                <FormControl title={'Marital Status'}>
                  <PillList
                    value={formData.maritalStatus}
                    list={['Un-married', 'Divorced', 'Both']}
                    onChange={(p) => updateFormData('maritalStatus', p)}
                  />
                </FormControl>
                <FormControl title={'Child Count'}>
                  <InputText
                    value={formData.childCount} name='childCount'
                    onChange={(p) => updateFormData('childCount', p)}
                  />
                </FormControl>
                <FormControl title={'Physical Status'}>
                  <PillList
                    value={formData.physicalStatus}
                    list={['Normal', 'Disabled', 'Both']}
                    onChange={(p) => updateFormData('physicalStatus', p)}
                  />
                </FormControl>
                <CardFooter>
                  <ButtonOutline onClick={handleBasicProfileSubmit} type={'button'} disabled={loader}>
                    { loader &&
                      <LoaderIcon></LoaderIcon>
                    }
                    { !loader &&
                      <i className='fa fa-save mr-4' aria-hidden={'true'}></i>
                    }
                    Save
                  </ButtonOutline>
                  <ButtonOutline white>Cancel</ButtonOutline>
                </CardFooter>
              </form>
            </Card>
          </div>

          <div className='flex flex-col w-full'>
            <Card>
              <CardHeader
                title={'Astro details'}
                description={'Please add astro details here'}
                icon={'cog'}
              />
              <div className='flex flex-col px-4 w-full'>
                <PartnerAstroProfileForm />
              </div>
            </Card>
          </div>

          <div className='flex flex-col w-full'>
            <Card>
              <CardHeader
                title={'Education and Employment details'}
                description={'Please add details here'}
                icon={'cog'}
              />
              <div className='flex flex-col px-4 w-full'>
                <PartnerEducationProfileForm />
              </div>
            </Card>
          </div>
          <ProfileFooter />
        </div>
      </div>
    </div>
  )
}