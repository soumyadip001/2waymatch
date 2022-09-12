import { useState } from "react"
import useAuth from "../useAuth"

import ErrorAlert from "../alerts/ErrorAlert"
import SuccessAlert from "../alerts/SuccessAlert"
import CardFooter from "../atoms/CardFooter"
import ButtonOutline from "../buttons/ButtonOutline"
import LoaderIcon from "../icons/LoaderIcon"
import FormControl from "./FormControl"
import PillList from "./PillList"

export default function ChatSettingsForm() {
  const local = true
  const defaultFormData = {
    emailAlerts: false, pushNotifications: true,
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
        [key]: value === 'yes' ? true : false
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
        type: 'chat',
      })
    }
    
    setLoader(true)
    try {
      const url = !local ?
        process.env.NEXT_PUBLIC_AUTH_SERVICE_API_URL + '/auth/profile/notifications'
        : 'http://127.0.0.1:4002/auth/profile/notifications'
      const response = await fetch(url, options)
      const result = await response.json()
      console.log(result)
      setLoader(false)
      setSuccess('Notification details updated successfully!')
    } catch (err) {
      setLoader(false)
      setError('Operation failed!')
      console.error(err)
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
      <FormControl title={'E-mail alerts'}>
        <PillList
          list={['yes', 'no']} value={defaultFormData.emailAlerts ? 'yes' : 'no'}
          onChange={(p) => updateFormData('emailAlerts', p)}
        ></PillList>
      </FormControl>
      <FormControl title={'Push Notifications'}>
        <PillList
          list={['yes', 'no']} value={defaultFormData.pushNotifications ? 'yes' : 'no'}
          onChange={(p) => updateFormData('pushNotifications', p)}
        ></PillList>
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
        <ButtonOutline white onClick={handleCancel}>Cancel</ButtonOutline>
      </CardFooter>
    </form>
  )
}