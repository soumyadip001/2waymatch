import Link from 'next/link'

import Button from '../buttons/Button';
import AgniSvg from '../atoms/AgniSvg';

function Navbar({ menu, showLogin = true, showRegister = true }) {
  const registerBtn = showRegister ?
    <Button primary>
      <Link href={'/register'}>Register</Link>
    </Button>
    : null;

  return (
    <header className='py-10'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-10'>
        <nav className="relative z-50 flex justify-between">
          <div className='flex items-center md:gap-x-12'>
            <div className="flex items-center logo text-blue-600 font-display text-3xl">
              <AgniSvg />
            </div>
            <div className="hidden md:flex md:gap-x-6">
              {menu?.map(nav =>
                <a
                  href={nav.href}
                  key={nav.name}
                  className='inline-block rounded-lg py-1 px-2 text-md text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                >
                  {nav.name}
                </a>
              )}
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            { showLogin &&
              <div className='hidden md:block'>
                <Link 
                  className='inline-block rounded-lg py-1 px-2 text-md text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  href='/login'
                >Sign In</Link>
              </div>
            }
            { registerBtn }
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;