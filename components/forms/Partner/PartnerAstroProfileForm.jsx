import { useState } from "react"
import ErrorAlert from "../../alerts/ErrorAlert"
import SuccessAlert from "../../alerts/SuccessAlert"
import CardFooter from "../../atoms/CardFooter"
import ButtonOutline from "../../buttons/ButtonOutline"
import LoaderIcon from "../../icons/LoaderIcon"
import useAuth from "../../useAuth"
import FormControl from "../FormControl"
import MultiCheck from "../MultiCheck"
import PillList from "../PillList"

function PartnerAstroProfileForm() {

  const defaultFormData = {
    horoscope: ['All'], manglik: '',
  }
  const horoscopeList = [
    { id: 13, title: 'All', selected: false },
    { id: 1, title: 'Aries', selected: false },
    { id: 2, title: 'Taurus', selected: false },
    { id: 3, title: 'Gemini', selected: false },
    { id: 4, title: 'Cancer', selected: false },
    { id: 5, title: 'Leo', selected: false },
    { id: 6, title: 'Virgo', selected: false },
    { id: 7, title: 'Libra', selected: false },
    { id: 8, title: 'Scorpio', selected: false },
    { id: 9, title: 'Sagittarius', selected: false },
    { id: 10, title: 'Capricornus', selected: false },
    { id: 11, title: 'Aquarius', selected: false },
    { id: 12, title: 'Pisces', selected: false },
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

    if (!formData.age || !formData.height || !formData.motherTongue || !formData.religion) {
      setError('Please fill all the mandatory details')
    } else if (parseInt(formData.childCount) < 0) {
      setError('Invalid sibling count')
    } else {
      setLoader(true)
      try {
        const url = !local ?
          process.env.NEXT_PUBLIC_AUTH_SERVICE_API_URL + '/auth/profile/partner/astro'
          : 'http://127.0.0.1:4002/auth/profile/partner/astro'
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

  const updateHoroscope = (key, value) => {
    const newInrests = []
    value.forEach(v => {
      if (v.selected) {
        newInrests.push(v.title)
      }
    })
    if (key) {
      setFormData({
        ...formData,
        interests: [ ...newInrests ]
      })
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
      <FormControl title={'Preferred Horoscope'}>
        <MultiCheck
          list={horoscopeList}
          onChange={(p) => updateHoroscope('horoscope', p)}
        ></MultiCheck>
      </FormControl>
      <FormControl title={'Mangalik'}>
        <PillList
          value={formData.manglik}
          list={['Yes', 'No', 'Does not matter']}
          onChange={(p) => updateFormData('manglik', p)}
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
export default PartnerAstroProfileForm