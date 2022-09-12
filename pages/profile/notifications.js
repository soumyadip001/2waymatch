import Card from '../../components/atoms/Card'
import CardHeader from '../../components/atoms/CardHeader'
import ProfileFooter from '../../components/Footers/ProfileFooter'
import ChatSettingsForm from '../../components/forms/ChatSettingsForm'
import SystemSettingsForm from '../../components/forms/SystemSettingsForm'

import ProfileNavbar from '../../components/Navbars/ProfileNavbar'
import ProfileSidebar from '../../components/Navbars/ProfileSidebar'

export default function Notifications() {
  return (
    <div className="flex w-full h-full flex-col px-4 sm:px-6 lg:px-10">
      <ProfileNavbar />
      <div className='flex h-auto w-full justify-start items-center border-b border-gray-200 pb-4'>
        <h1 className='text-4xl font-bold'>Notifications</h1>
      </div>
      <div className="flex flex-row w-full pt-4">
        <div className="flex flex-col w-1/5">
          <ProfileSidebar active='Notifications' />
        </div>
        <div className="flex flex-col w-4/5">
          <Card>
            <CardHeader
              title={'Update system notifications'}
              description={'Here you can update your notification preferences'}
              icon={'bell'}
            />
            <div className='flex flex-col px-4 w-full'>
              <SystemSettingsForm />
            </div>
          </Card>
          <Card>
            <CardHeader
              title={'Update chat settings'}
              description={'Here you can update your notification preferences'}
              icon={'message'}
            />
            <div className='flex flex-col px-4 w-full'>
              <ChatSettingsForm />
            </div>
          </Card>
          <ProfileFooter />
        </div>
      </div>
    </div>
  )
}