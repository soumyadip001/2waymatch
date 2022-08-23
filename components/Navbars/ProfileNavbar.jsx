import Link from 'next/link'

import AgniSvg from '../atoms/AgniSvg'
import Button from '../buttons/Button'
import IconButton from '../buttons/IconButton'

export default function ProfileNavbar() {
  return (
    <header
      className="flex w-full min-h-11 h-auto items-center justify-between py-10 mx-auto max-w-7xl"
    >
      <div className="flex flex-row h-auto items-center justify-start">
        <nav className="flex items-center md:gap-x-12">
          <div className="flex items-center logo text-blue-600 font-display text-3xl">
            <AgniSvg /> &nbsp;Agni
          </div>
          <ul className="list-none flex flex-row justify-between items-center md:gap-x-12">
            <li><Link href={'/dashboard'}>Dashboard</Link></li>
            <li><Link href={'/profile'}>Profile</Link></li>
            <li><Link href={'/matches'}>Matches</Link></li>
            <li><Link href={'/messages'}>Messages</Link></li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-row justify-between items-center md:gap-x-4">
        <Button>
          <i className='fa fa-bolt text-xl'></i>
          &nbsp; Upgrade now
        </Button>
        <IconButton>
          <i className="fa fa-cog text-xl text-gray-400"></i>
        </IconButton>
        <IconButton>
          <i className="fa fa-bell text-xl text-gray-400"></i>
        </IconButton>
        <div className="overflow-hidden rounded-full bg-slate-50 cursor-pointer">
          <img
            alt=""
            src={`/img/avatar-1.png`}
            decoding="async"
            data-nimg="intrinsic"
            className='h-10 w-10 object-cover'
          />
        </div>
      </div>
    </header>
  )
}