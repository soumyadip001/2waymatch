import ProfileNavbar from '../../components/Navbars/ProfileNavbar'
import ProfileSidebar from '../../components/Navbars/ProfileSidebar'
import ProfileFooter from '../../components/Footers/ProfileFooter'
import Card from '../../components/atoms/Card'
import AddressForm from '../../components/forms/AddressForm'
import CardHeader from '../../components/atoms/CardHeader'
import FamilyDetailsForm from '../../components/forms/FamilyDetailsForm'
import ReligionForm from '../../components/forms/ReligionForm'

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
              title={'Update Address'}
              description={'Please add a valid address of your current residence'}
              icon={'home'}
            />
            <div className='flex flex-col px-4 w-full'>
              <AddressForm />
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
              Blank Space Here
            </div>
          </Card>
          <Card>
            <CardHeader
              title={'Education Background'}
              description={'Please add valid details about you'}
              icon={'building'}
            />
            <div className='flex flex-col px-4 w-full'>
              Blank Space Here
            </div>
          </Card>
          <Card>
            <CardHeader
              title={'Employment Background'}
              description={'Please add valid details about you'}
              icon={'paper-plane'}
            />
            <div className='flex flex-col px-4 w-full'>
              Blank Space Here
            </div>
          </Card>
          <Card>
            <CardHeader
              title={'Update Hobbies'}
              description={'Please add valid details about you'}
              icon={'music'}
            />
            <div className='flex flex-col px-4 w-full'>
              Blank Space Here
            </div>
          </Card>
          <ProfileFooter />
        </div>
      </div>
    </div>
  )
}