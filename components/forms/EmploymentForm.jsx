import { useEffect, useState } from "react"
import useAuth from "../useAuth"

import ErrorAlert from "../alerts/ErrorAlert"
import SuccessAlert from "../alerts/SuccessAlert"
import FormControl from "./FormControl"
import InputText from "./InputText"
import PillList from "./PillList"
import CardFooter from "../atoms/CardFooter"
import ButtonOutline from "../buttons/ButtonOutline"
import LoaderIcon from "../icons/LoaderIcon"

export default function EmploymentForm() {

  const local = true
  const defaultFormData = {
    employmentName: '', jobRole: '', passingYear: '', employmentType: 'full time',
    payslip: '', incomeSlab: '0 - 1 lakh', employmentCategory: ''
  }
  const employmentTypesArr = [
    'Private', 'Govt', 'Defence', 'Business', 'Self', 'Not Working', 'Student'
  ]

  const user = useAuth()
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [loader, setLoader] = useState(false)
  const [formData, setFormData] = useState(defaultFormData)

  useEffect(() => {
    async function fetchData() {
      setLoader(true)
      const url = !local ?
        process.env.NEXT_PUBLIC_AUTH_SERVICE_API_URL + '/auth/profile/employment'
        : 'http://127.0.0.1:4002/auth/profile/employment'
      try {
        const response = await fetch(`${url}/${user.uid}`)
        const result = await response.json()
        if (result && result.success) {
          console.log('>>', result.data)
          setFormData({ ...result.data })
          setError(null)
        }
        setLoader(false)
      } catch (err) {
        setSuccess(null)
        setError('Unable to fetch details!')
        setLoader(false)
      }
    }
    if (user && user.uid) {
      fetchData()
    }
  }, [user, local])

  const updateFormData = (key, value) => {
    if (key) {
      setFormData({
        ...formData,
        [key]: value
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
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
      })
    }

    if (!formData.birthPlace || !formData.birthTime || !formData.dob || !formData.mangalik) {
      setError('Please fill all the mandatory details')
    } else {
      setLoader(true)
      try {
        const url = !local ?
          process.env.NEXT_PUBLIC_AUTH_SERVICE_API_URL + '/auth/profile/employment'
          : 'http://127.0.0.1:4002/auth/profile/employment'
        const response = await fetch(url, options)
        const result = await response.json()
        console.log(result)
        setLoader(false)
        setSuccess('Employment details updated successfully!')
      } catch (err) {
        setLoader(false)
        setError('Operation failed!')
        console.error(err)
      }
    }
  }

  const handleCancel = (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    setLoader(false)
  }

  return (
    <form>
      <div className='flex flex-col w-full h-auto my-4 gap-4'>
        { error &&
          <ErrorAlert>{ error }</ErrorAlert>
        }
        { success &&
          <SuccessAlert>{ success }</SuccessAlert>
        }
      </div>
      {user &&
        <input type={'hidden'} value={user.uid} />
      }
      <FormControl title={'Current employment details'}>
        <InputText
          name={'employmentName'} required
          value={formData.employmentName}
          maxLength={50}
          onChange={(p) => updateFormData('employmentName', p)}
        />
      </FormControl>
      <FormControl title={'Job Role'}>
        <InputText
          name={'jobRole'} required
          value={formData.jobRole}
          maxLength={50}
          onChange={(p) => updateFormData('jobRole', p)}
        />
      </FormControl>
      <FormControl title={'Years of exp'}>
        <InputText
          name={'passingYear'} required
          value={formData.passingYear}
          maxLength={50}
          onChange={(p) => updateFormData('passingYear', p)}
        />
      </FormControl>
      <FormControl title={'Course Type'}>
        <PillList
          list={['part time', 'full time']} value={defaultFormData.employmentType}
          onChange={(p) => updateFormData('employmentType', p)}
        ></PillList>
      </FormControl>
      <FormControl title={'Income Slab'}>
        <PillList
          list={['0 - 1 lakh', '1 - 5 lakh', '5 - 10 lakh', '10 - 20 lakh', '> 20 lakh']}
          value={defaultFormData.incomeSlab}
          onChange={(p) => updateFormData('incomeSlab', p)}
        ></PillList>
      </FormControl>
      <FormControl title={'Income Slab'}>
        <PillList
          list={employmentTypesArr}
          value={defaultFormData.employmentCategory}
          onChange={(p) => updateFormData('employmentCategory', p)}
        ></PillList>
      </FormControl>
      <FormControl title={'Upload Latest Payslip'}>
        <InputText
          name={'payslip'}
          type="file"
          onChange={(p) => updateFormData('payslip', p)}
        />
      </FormControl>
      <CardFooter>
        <ButtonOutline onClick={handleSubmit} type={'button'} disabled={loader}>
          { loader &&
            <LoaderIcon></LoaderIcon>
          }
          { !loader &&
            <i className='fa fa-save mr-4' aria-hidden={'true'}></i>
          }
          Update Employer
        </ButtonOutline>
        <ButtonOutline white onClick={handleCancel}>Cancel</ButtonOutline>
      </CardFooter>
    </form>
  )
}