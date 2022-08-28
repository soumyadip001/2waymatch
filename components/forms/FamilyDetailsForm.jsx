import { useEffect, useState } from "react";
import useAuth from "../useAuth";

import ErrorAlert from "../alerts/ErrorAlert";
import SuccessAlert from "../alerts/SuccessAlert";
import FormControl from "./FormControl";
import InputText from "./InputText";
import PillList from "./PillList";
import ButtonOutline from "../buttons/ButtonOutline";
import LoaderIcon from "../icons/LoaderIcon";

export default function FamilyDetailsForm() {

  const defaultFormData = {
    fatherName: '', motherName: '', siblingCount: 0,
    familyType: 'neuclear', familyValue: 'moderate'
  }
  const familyTypeList = ['neuclear', 'joint']
  const familyValuesList = ['liberal', 'moderate', 'conservative']
  const local = true

  const user = useAuth()
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [loader, setLoader] = useState(false)
  const [formData, setFormData] = useState(defaultFormData)

  useEffect(() => {
    async function fetchData() {
      setLoader(true)
      const url = process.env.NEXT_PUBLIC_AUTH_SERVICE_API_URL + '/auth/profile/details'
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
  }, [user])

  const updateFormData = (key, value) => {
    if (key) {
      setFormData({
        ...formData,
        [key]: value
      })
    }
  }

  const handleAddressSubmit = async (e) => {
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

    if (!formData.familyType || !formData.familyValue || !formData.fatherName || !formData.motherName) {
      setError('Please fill all the mandatory details')
    } else if (parseInt(formData.siblingCount) < 0) {
      setError('Invalid sibling count')
    } else {
      setLoader(true)
      try {
        const url = !local ?
          process.env.NEXT_PUBLIC_AUTH_SERVICE_API_URL + '/auth/profile/details'
          : '127.0.0.1:4002/auth/profile/details'
        const response = await fetch(url, options)
        const result = await response.json()
        console.log(result)
        setLoader(false)
        setSuccess('family details updated successfully!')
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
      { user &&
        <input type={'hidden'} value={user.uid} />
      }
      <FormControl title={'Father\'s Name'}>
        <InputText
          name={'fatherName'} required
          value={formData.fatherName}
          maxLength={50}
          onChange={(p) => updateFormData('fatherName', p)}
        />
      </FormControl>
      <FormControl title={'Mather\'s Name'}>
        <InputText
          name={'motherName'} required
          value={formData.motherName}
          maxLength={50}
          onChange={(p) => updateFormData('motherName', p)}
        />
      </FormControl>
      <FormControl title={'How many siblings you have'}>
        <InputText
          name={'siblingCount'} type={'number'}
          value={formData.siblingCount}
          maxLength={3}
          onChange={(p) => updateFormData('siblingCount', p)}
        />
      </FormControl>
      <FormControl title={'Family type'}>
        <PillList
          list={familyTypeList} value={defaultFormData.familyType}
          onChange={(p) => updateFormData('familyType', p)}
        ></PillList>
      </FormControl>
      <FormControl title={'Family values'}>
        <PillList
          list={familyValuesList} value={defaultFormData.familyValue}
          onChange={(p) => updateFormData('familyValue', p)}
        ></PillList>
      </FormControl>
      <div className='flex flex-row w-full justify-start items-center gap-4 mt-4'>
        <ButtonOutline onClick={handleAddressSubmit} type={'button'} disabled={loader}>
          { loader &&
            <LoaderIcon></LoaderIcon>
          }
          { !loader &&
            <i className='fa fa-save mr-4' aria-hidden={'true'}></i>
          }
          Save
        </ButtonOutline>
        <ButtonOutline white>Cancel</ButtonOutline>
      </div>
    </form>
  )
}