import { useEffect, useState } from "react";
import useAuth from "../useAuth";

import ErrorAlert from "../alerts/ErrorAlert";
import SuccessAlert from "../alerts/SuccessAlert";
import ColHalf from "../atoms/ColHalf";
import Row from "../atoms/Row";
import ButtonOutline from "../buttons/ButtonOutline";
import LoaderIcon from "../icons/LoaderIcon";
import FormControl from "./FormControl";
import InputText from "./InputText";
import Select from "./Select";

export default function AddressForm() {

  const local = true
  const defaultFormData = {
    building: '', area: '', country: 'India', pincode: '',
    landmark: '', city: '', state: 'West Bengal'
  }
  const countries = [
    { key: 'IN', value: 'India' },
    { key: 'CA', value: 'Canada' },
    { key: 'USA', value: 'United States' },
  ]

  const user = useAuth()
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [loader, setLoader] = useState(false)
  const [formData, setFormData] = useState(defaultFormData)

  useEffect(() => {
    async function fetchData() {
      setLoader(true)
      const url = process.env.NEXT_PUBLIC_AUTH_SERVICE_API_URL + '/auth/profile/address'
      try {
        const response = await fetch(`${url}/${user.uid}`)
        const result = await response.json()
        if (result && result.success) {
          console.log('>>', result.data)
          setFormData({
            ...result.data,
          })
          setError(null)
        }
        setLoader(false)
      } catch (err) {
        setSuccess(null)
        setError('Operation failed!')
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

    // general validation
    if (
      !formData.area || !formData.building || !formData.city || !formData.country
      || !formData.landmark || !formData.pincode
    ) {
      setSuccess(null)
      setError('Please fill all the details before you submit')
    } else if (!isValidPincode(formData.pincode)) {
      setError('Invalid Pincode')
    } else {
      setLoader(true)
      try {
        const url = !local ?
          process.env.NEXT_PUBLIC_AUTH_SERVICE_API_URL + '/auth/profile/address'
          : '127.0.0.1:4002/auth/profile/address'
        const response = await fetch(url, options)
        const result = await response.json()
        console.log(result)
        setLoader(false)
        setSuccess('address updated successfully!')
      } catch (err) {
        setLoader(false)
        setError('Operation failed!')
        console.error(err)
      }
    }
  }

  const isValidPincode = (pincode) => {
    return String(pincode).length === 6;
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
      <FormControl title={'Country'}>
        <Select
          name={'country'}
          options={countries}
          value={formData.country}
          readOnly={true}
          disabled={true}
        ></Select>
      </FormControl>
      <FormControl title={'Pincode'}>
        <InputText
          name={'pincode'} required type={'number'}
          value={formData.pincode}
          maxLength={6}
          onChange={(p) => updateFormData('pincode', p)}
        />
      </FormControl>
      <FormControl title={'Flat, House no., Building, Apartment'}>
        <InputText
          name={'building'} maxLength={50}
          value={formData.building}
          onChange={(p) => updateFormData('building', p)}
        />
      </FormControl>
      <FormControl title={'Area, Street, Sector, Village'}>
        <InputText
          name={'area'} maxLength={70}
          value={formData.area}
          onChange={(p) => updateFormData('area', p)}
        />
      </FormControl>
      <FormControl title={'Landmark'}>
        <InputText
          name={'landmark'} maxLength={50}
          value={formData.landmark}
          onChange={(p) => updateFormData('landmark', p)}
        />
      </FormControl>
      <Row gap={4}>
        <ColHalf>
          <FormControl title={'Town/City'}>
            <InputText
              name={'city'}
              value={formData.city}
              onChange={(p) => updateFormData('city', p)}
            />
          </FormControl>
        </ColHalf>
        <ColHalf>
          <FormControl title={'State'}>
            <InputText
              name={'state'}
              value={formData.state}
              onChange={(p) => updateFormData('state', p)}
            />
          </FormControl>
        </ColHalf>
      </Row>
      <div className='flex flex-row w-full justify-start items-center gap-4 mt-4'>
        <ButtonOutline onClick={handleAddressSubmit} type={'button'} disabled={loader}>
          {loader &&
            <LoaderIcon></LoaderIcon>
          }
          {!loader &&
            <i className='fa fa-save mr-4' aria-hidden={'true'}></i>
          }
          Save Address
        </ButtonOutline>
        <ButtonOutline white>Cancel</ButtonOutline>
      </div>
    </form>
  )
}