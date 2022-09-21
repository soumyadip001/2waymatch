import ProfileNavbar from '../../components/Navbars/ProfileNavbar'
import ProfileSidebar from '../../components/Navbars/ProfileSidebar'
import ProfileFooter from '../../components/Footers/ProfileFooter'
import Card from '../../components/atoms/Card'
import AddressForm from '../../components/forms/AddressForm'
import CardHeader from '../../components/atoms/CardHeader'
import FamilyDetailsForm from '../../components/forms/FamilyDetailsForm'
import ReligionForm from '../../components/forms/ReligionForm'
import AstroForm from '../../components/forms/AstroForm'
import EducationForm from '../../components/forms/EducationForm'
import EmploymentForm from '../../components/forms/EmploymentForm'
import HobbiesForm from '../../components/forms/HobbiesForm'
import OtherDetailsForm from '../../components/forms/OtherDetailsForm'

export default function Details() {
  return (
    <div className="flex w-full h-full flex-col px-4 sm:px-6 lg:px-10">
      <ProfileNavbar />
      <div className='flex h-auto w-full justify-start items-center border-b border-gray-200 pb-4'>
        <h1 className='text-4xl font-bold'>Profile Details</h1>
      </div>
      <div className="flex flex-row w-full pt-4">
        <div className="flex flex-col w-1/5">
          <ProfileSidebar active='Details' />
        </div>
        <div className="flex flex-col w-4/5">
          <Card>
            <CardHeader
              title={'Other details'}
              description={'Please add other details here'}
              icon={'home'}
            />
            <div className='flex flex-col px-4 w-full'>
              <OtherDetailsForm />
            </div>
          </Card>
          <Card>
            <CardHeader
              title={'Update Current Address'}
              description={'Please add a valid address of your current residence'}
              icon={'home'}
            />
            <div className='flex flex-col px-4 w-full'>
              <AddressForm type={'C'} />
            </div>
          </Card>
          <Card>
            <CardHeader
              title={'Update Permanent Address'}
              description={'Please add a valid address of your Permanent residence'}
              icon={'home'}
            />
            <div className='flex flex-col px-4 w-full'>
              <AddressForm type={'P'} />
            </div>
          </Card>
          <Card>
            <CardHeader
              title={'Update Family Details'}
              description={'Please add valid details about your family members'}
              icon={'users'}
            />
            <div className='flex flex-col px-4 w-full'>
              <FamilyDetailsForm />
            </div>
          </Card>
          <Card>
            <CardHeader
              title={'Religious Background'}
              description={'Please add valid details about you'}
              icon={'certificate'}
            />
            <div className='flex flex-col px-4 w-full'>
              <ReligionForm />
            </div>
          </Card>
          <Card>
            <CardHeader
              title={'Astro Details'}
              description={'Please add valid details about you'}
              icon={'cog'}
            />
            <div className='flex flex-col px-4 w-full'>
              <AstroForm />
            </div>
          </Card>
          <Card>
            <CardHeader
              title={'Education Background'}
              description={'Please add valid details about you'}
              icon={'building'}
            />
            <div className='flex flex-col px-4 w-full'>
              <EducationForm />
            </div>
          </Card>
          <Card>
            <CardHeader
              title={'Employment Background'}
              description={'Please add valid details about you'}
              icon={'paper-plane'}
            />
            <div className='flex flex-col px-4 w-full'>
              <EmploymentForm />
            </div>
          </Card>
          <Card>
            <CardHeader
              title={'Update Hobbies'}
              description={'Please add valid details about you'}
              icon={'music'}
            />
            <div className='flex flex-col px-4 w-full'>
              <HobbiesForm />
            </div>
          </Card>
          <ProfileFooter />
        </div>
      </div>
    </div>
  )
}