import Link from 'next/link'

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
          <div className='flex flex-col w-full'>
            Blank Notifications Page
          </div>
          <div className='text-slate-400'>
            <p className='text-sm'>
              <i className='fa fa-lock text-slate-900'></i>&nbsp; Please check our <span className='text-slate-500 font-semibold'><Link href={'#'}>Privacy and Policy</Link></span> and <span className='text-slate-500 font-semibold'><Link href={'#'}>Terms of Service</Link></span> before you share your details with us.</p>
          </div>
        </div>
      </div>
    </div>
  )
}