import { useState } from "react"
import ErrorAlert from "../alerts/ErrorAlert"
import SuccessAlert from "../alerts/SuccessAlert"
import CardFooter from "../atoms/CardFooter"
import ButtonOutline from "../buttons/ButtonOutline"
import LoaderIcon from "../icons/LoaderIcon"
import useAuth from "../useAuth"
import FormControl from "./FormControl"
import PillList from "./PillList"
import Select from "./Select"

function OtherDetailsForm() {

  const local = true
  const defaultFormData = {
    diet: 'Non Veg',
    bloodGroup: '', desease: 'No'
  }
  const BloodGroups = [
    { key: 'A+', value: 'A+' },
    { key: 'A-', value: 'A-' },
    { key: 'AB', value: 'AB' },
    { key: 'B+', value: 'B+' },
    { key: 'B-', value: 'B-' },
    { key: 'O-', value: 'O-' },
    { key: 'O+', value: 'O+' },
  ]

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

  const handleSubmit = async (e) => {
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

    // general validation
    if (
      !formData.diet || !formData.bloodGroup
    ) {
      setSuccess(null)
      setError('Please fill all the details before you submit')
    } else {
      setLoader(true)
      try {
        const url = !local ?
          process.env.NEXT_PUBLIC_AUTH_SERVICE_API_URL + '/auth/profile/other'
          : '127.0.0.1:4002/auth/profile/other'
        const response = await fetch(url, options)
        const result = await response.json()
        console.log(result)
        setLoader(false)
        setSuccess('other details updated successfully!')
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
      <FormControl title={'Diet'}>
        <PillList
          value={formData.diet}
          list={['Veg', 'Non Veg', 'Others']}
          onChange={(p) => updateFormData('diet', p)}
        />
      </FormControl>
      <FormControl title={'Blood Group'}>
        <Select
          name={'blood'} options={BloodGroups} value={formData.bloodGroup}
          onChange={(p) => updateFormData('bloodGroup', p)}
        ></Select>
      </FormControl>
      <FormControl title={'Do you have any deseases (ex: HIV)'}>
        <PillList
          value={formData.desease}
          list={['Yes', 'No']}
          onChange={(p) => updateFormData('desease', p)}
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
          Update
        </ButtonOutline>
        <ButtonOutline white onClick={handleCancel}>Cancel</ButtonOutline>
      </CardFooter>
    </form>
  )
}

export default OtherDetailsForm