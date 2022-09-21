import { useEffect, useState } from "react";
import useAuth from "../useAuth";

import ErrorAlert from "../alerts/ErrorAlert";
import SuccessAlert from "../alerts/SuccessAlert";
import CardFooter from "../atoms/CardFooter";
import ButtonOutline from "../buttons/ButtonOutline";
import LoaderIcon from "../icons/LoaderIcon";
import FormControl from "./FormControl";
import InputText from "./InputText";
import PillList from "./PillList";

export default function AstroForm() {

  const local = true
  const defaultFormData = { mangalik: 'no', dob: '', birthTime: '', birthPlace: '', horoscope: '' }

  const user = useAuth()
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [loader, setLoader] = useState(false)
  const [formData, setFormData] = useState(defaultFormData)

  useEffect(() => {
    async function fetchData() {
      setLoader(true)
      const url = !local ?
        process.env.NEXT_PUBLIC_AUTH_SERVICE_API_URL + '/auth/profile/astro'
        : 'http://127.0.0.1:4002/auth/profile/astro'
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
          process.env.NEXT_PUBLIC_AUTH_SERVICE_API_URL + '/auth/profile/astro'
          : 'http://127.0.0.1:4002/auth/profile/astro'
        const response = await fetch(url, options)
        const result = await response.json()
        console.log(result)
        setLoader(false)
        setSuccess('astro details updated successfully!')
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
      <FormControl title={'Are you mangalik'}>
        <PillList
          list={['yes', 'no']} value={defaultFormData.mangalik}
          onChange={(p) => updateFormData('mangalik', p)}
        ></PillList>
      </FormControl>
      <FormControl title={'Date of birth'}>
        <InputText
          name={'dob'} required
          type={'date'}
          value={formData.dob}
          onChange={(p) => updateFormData('dob', p)}
        />
      </FormControl>
      <FormControl title={'Time of birth'}>
        <InputText
          name={'birthTime'} required
          type={'time'}
          value={formData.birthTime}
          onChange={(p) => updateFormData('birthTime', p)}
        />
      </FormControl>
      <FormControl title={'Place of birth'}>
        <InputText
          name={'birthPlace'} required
          value={formData.birthPlace}
          maxLength={50}
          onChange={(p) => updateFormData('birthPlace', p)}
        />
      </FormControl>
      <FormControl title={'Upload Horoscope'}>
        <InputText
          name={'horoscope'}
          type="file"
          onChange={(p) => updateFormData('horoscope', p)}
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
          Save
        </ButtonOutline>
        <ButtonOutline white>Cancel</ButtonOutline>
      </CardFooter>
    </form>
  )
}