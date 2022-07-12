import Button from '../atoms/Button'

function Navbar() {
  const NavigationArray = [
    { id: 'start', name: 'Start', href: '#' },
    { id: 'how-it-works', name: 'How it works', href: '#' },
    { id: 'rules', name: 'Rules', href: '#' },
    { id: 'pricing', name: 'Pricing', href: '#' },
    { id: 'clients', name: 'Clients', href: '#' },
    { id: 'contact', name: 'Contact', href: '#' },
  ]

  return (
    <header className='py-10'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <nav className="relative z-50 flex justify-between">
          <div className='flex items-center md:gap-x-12'>
            <div className="flex items-center logo">
              LOGO
            </div>
            <div className="hidden md:flex md:gap-x-6">
              {NavigationArray.map(nav =>
                <a
                  href={nav.href}
                  key={nav.name}
                  className='inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                >
                  {nav.name}
                </a>
              )}
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className='hidden md:block'>
              <a className='inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900' href='/login'>Sign In</a>
            </div>
            <Button primary>Buy now</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;