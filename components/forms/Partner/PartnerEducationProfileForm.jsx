import { useState } from "react"
import ErrorAlert from "../../alerts/ErrorAlert"
import SuccessAlert from "../../alerts/SuccessAlert"
import CardFooter from "../../atoms/CardFooter"
import ButtonOutline from "../../buttons/ButtonOutline"
import LoaderIcon from "../../icons/LoaderIcon"
import useAuth from "../../useAuth"
import FormControl from "../FormControl"
import InputText from "../InputText"
import MultiCheck from "../MultiCheck"
import PillList from "../PillList"

function PartnerEducationProfileForm() {

  const EducationList = [
    { id: 1, title: 'All', selected: false },
    { id: 2, title: 'Graduation', selected: false },
    { id: 3, title: 'PG', selected: false },
    { id: 4, title: 'Higher Secondary', selected: false },
  ]
  const ProfessionList = [
    { id: 1, title: 'All', selected: false },
    { id: 2, title: 'Private', selected: false },
    { id: 3, title: 'Govt', selected: false },
    { id: 4, title: 'Defence', selected: false },
    { id: 5, title: 'Business', selected: false },
    { id: 6, title: 'Self', selected: false },
    { id: 7, title: 'Not Working', selected: false },
    { id: 8, title: 'Student', selected: false },
  ]
  const defaultFormData = {
    professions: [], educations: [], incomeSlab: '0 - 1 lakh',
    state: ''
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

  const updateList = (key, value) => {
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
      <FormControl title={'Preferred Educations'}>
        <MultiCheck
          list={EducationList}
          onChange={(p) => updateList('educations', p)}
        ></MultiCheck>
      </FormControl>
      <FormControl title={'Preferred Professions'}>
        <MultiCheck
          list={ProfessionList}
          onChange={(p) => updateList('professions', p)}
        ></MultiCheck>
      </FormControl>
      <FormControl title={'Income Slab'}>
        <PillList
          list={['0 - 1 lakh', '1 - 5 lakh', '5 - 10 lakh', '10 - 20 lakh', '> 20 lakh']}
          value={defaultFormData.incomeSlab}
          onChange={(p) => updateFormData('incomeSlab', p)}
        ></PillList>
      </FormControl>
      <FormControl title={'State'}>
        <InputText
          value={formData.state} name='state'
          onChange={(p) => updateFormData('state', p)}
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
export default PartnerEducationProfileForm