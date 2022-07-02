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
    <nav className="flex w-full items-center justify-between p-4">
      <div className="flex items-center logo">
        LOGO
      </div>
      <div className="flex justify-center items-center">
        <ul className="list-none flex justify-between items-center md:gap-4">
          {NavigationArray.map(nav =>
            <li key={nav.id} className="">
              <a href={nav.href}>{nav.name}</a>
            </li>
          )}
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <Button primary>Buy now</Button>
      </div>
    </nav>
  )
}

export default Navbar;