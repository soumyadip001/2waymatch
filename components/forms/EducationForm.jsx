import { useState, useEffect } from "react"
import ErrorAlert from "../alerts/ErrorAlert"
import SuccessAlert from "../alerts/SuccessAlert"
import CardFooter from "../atoms/CardFooter"
import ButtonOutline from "../buttons/ButtonOutline"
import LoaderIcon from "../icons/LoaderIcon"
import useAuth from "../useAuth"
import FormControl from "./FormControl"
import InputText from "./InputText"
import PillList from "./PillList"

export default function EducationForm() {

  const local = true
  const defaultFormData = {
    degree: '', college: '', passingYear: '', courseType: 'full time',
    certificate: ''
  }

  const user = useAuth()
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [loader, setLoader] = useState(false)
  const [formData, setFormData] = useState(defaultFormData)

  useEffect(() => {
    async function fetchData() {
      setLoader(true)
      const url = !local ?
        process.env.NEXT_PUBLIC_AUTH_SERVICE_API_URL + '/auth/profile/education'
        : 'http://127.0.0.1:4002/auth/profile/education'
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
          process.env.NEXT_PUBLIC_AUTH_SERVICE_API_URL + '/auth/profile/education'
          : 'http://127.0.0.1:4002/auth/profile/education'
        const response = await fetch(url, options)
        const result = await response.json()
        console.log(result)
        setLoader(false)
        setSuccess('Education details updated successfully!')
      } catch (err) {
        setLoader(false)
        setError('Operation failed!')
        console.error(err)
      }
    }
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
      <FormControl title={'Highest education details'}>
        <InputText
          name={'degree'} required
          value={formData.degree}
          maxLength={50}
          onChange={(p) => updateFormData('degree', p)}
        />
      </FormControl>
      <FormControl title={'College/University details'}>
        <InputText
          name={'college'} required
          value={formData.college}
          maxLength={50}
          onChange={(p) => updateFormData('college', p)}
        />
      </FormControl>
      <FormControl title={'Passing year'}>
        <InputText
          name={'passingYear'} required
          value={formData.passingYear}
          maxLength={50}
          onChange={(p) => updateFormData('passingYear', p)}
        />
      </FormControl>
      <FormControl title={'Course Type'}>
        <PillList
          list={['part time', 'full time']} value={defaultFormData.courseType}
          onChange={(p) => updateFormData('courseType', p)}
        ></PillList>
      </FormControl>
      <FormControl title={'Upload Certificate'}>
        <InputText
          name={'certificate'}
          type="file"
          onChange={(p) => updateFormData('certificate', p)}
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
          Update Details
        </ButtonOutline>
        <ButtonOutline white>Cancel</ButtonOutline>
      </CardFooter>
    </form>
  )
}