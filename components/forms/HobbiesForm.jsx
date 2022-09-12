import { useState } from "react"
import ErrorAlert from "../alerts/ErrorAlert"
import SuccessAlert from "../alerts/SuccessAlert"
import ButtonOutline from "../buttons/ButtonOutline"
import LoaderIcon from "../icons/LoaderIcon"
import useAuth from "../useAuth"
import FormControl from "./FormControl"
import MultiCheck from "./MultiCheck"
import PillList from "./PillList"

function HobbiesForm() {

  const local = true
  const interestList = [
    { id: 1, title: 'travel', selected: false },
    { id: 2, title: 'dance', selected: false },
    { id: 3, title: 'fitness', selected: false },
    { id: 4, title: 'reading', selected: false },
    { id: 5, title: 'photography', selected: false },
    { id: 6, title: 'music', selected: false },
    { id: 7, title: 'movie', selected: false },
    { id: 8, title: 'swimming', selected: false },
    { id: 9, title: 'theater', selected: false },
    { id: 10, title: 'cooking', selected: false },
    { id: 11, title: 'baking', selected: false },
    { id: 12, title: 'romcom', selected: false },
    { id: 13, title: 'yoga', selected: false },
    { id: 14, title: 'religious', selected: false },
    { id: 15, title: 'foodie', selected: false },
  ]
  const defaultFormData = {
    smokingHabbit: 'occasionally', drinkingHabbit: 'occasionally',
    interests: ['reading', 'foodie'], religiousHabbit: 'may be'
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

  const updateInterests = (key, value) => {
    const newInrests = []
    value.forEach(v => {
      if (v.selected) {
        newInrests.push(v.title)
      }
    })
    // console.log(newInrests)
    if (key) {
      setFormData({
        ...formData,
        interests: [ ...newInrests ]
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    console.log(formData)
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
      <FormControl title={'Smoking Habbit'}>
        <PillList
          list={['frequent', 'less frequent', 'occasionally']}
          value={defaultFormData.smokingHabbit}
          onChange={(p) => updateFormData('smokingHabbit', p)}
        ></PillList>
      </FormControl>
      <FormControl title={'Driking Habbit'}>
        <PillList
          list={['frequent', 'less frequent', 'occasionally']}
          value={defaultFormData.drinkingHabbit}
          onChange={(p) => updateFormData('drinkingHabbit', p)}
        ></PillList>
      </FormControl>
      <FormControl title={'Interests'}>
        <MultiCheck
          list={interestList}
          onChange={(p) => updateInterests('interests', p)}
        ></MultiCheck>
      </FormControl>
      <FormControl title={'Are you religious person'}>
        <PillList
          list={['yes', 'no', 'may be']}
          value={defaultFormData.religiousHabbit}
          onChange={(p) => updateFormData('religiousHabbit', p)}
        ></PillList>
      </FormControl>
      <div className='flex flex-row w-full justify-start items-center gap-4 mt-4'>
        <ButtonOutline onClick={handleSubmit} type={'button'} disabled={loader}>
          {loader &&
            <LoaderIcon></LoaderIcon>
          }
          {!loader &&
            <i className='fa fa-save mr-4' aria-hidden={'true'}></i>
          }
          Save
        </ButtonOutline>
        <ButtonOutline white onClick={handleCancel}>Cancel</ButtonOutline>
      </div>
    </form>
  )
}

export default HobbiesForm