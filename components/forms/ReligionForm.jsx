import { useState } from "react";
import useAuth from "../useAuth";

import ErrorAlert from "../alerts/ErrorAlert";
import SuccessAlert from "../alerts/SuccessAlert";
import FormControl from "./FormControl";
import InputText from "./InputText";
import ButtonOutline from "../buttons/ButtonOutline";
import LoaderIcon from "../icons/LoaderIcon";

export default function ReligionForm() {

  const defaultFormData = {
    religion: '', community: '', subCommunity: '',
    gothra: '', motherTongue: ''
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

  const handleAddressSubmit = () => {
    e.preventDefault();
    setError(null)
    setSuccess(null)
    console.log(formData)
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
      <FormControl title={'Religion'}>
        <InputText
          name={'religion'} required
          value={formData.religion}
          maxLength={50}
          onChange={(p) => updateFormData('religion', p)}
        />
      </FormControl>
      <FormControl title={'Community'}>
        <InputText
          name={'community'} required
          value={formData.community}
          maxLength={50}
          onChange={(p) => updateFormData('community', p)}
        />
      </FormControl>
      <FormControl title={'Sub Community'}>
        <InputText
          name={'subCommunity'} required
          value={formData.subCommunity}
          maxLength={50}
          onChange={(p) => updateFormData('subCommunity', p)}
        />
      </FormControl>
      <FormControl title={'Gothra'}>
        <InputText
          name={'gothra'} required
          value={formData.gothra}
          maxLength={50}
          onChange={(p) => updateFormData('gothra', p)}
        />
      </FormControl>
      <FormControl title={'Mother Tougue'}>
        <InputText
          name={'motherTongue'} required
          value={formData.motherTongue}
          maxLength={50}
          onChange={(p) => updateFormData('motherTongue', p)}
        />
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