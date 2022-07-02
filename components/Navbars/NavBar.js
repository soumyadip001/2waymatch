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
    <>
      <div className="flex max-w-100-px items-center justify-between">
        <div className="logo">
          LOGO
        </div>
        <div className="flex justify-between items-center">
          <ul className="list-none">
            {NavigationArray.map(nav =>
              <li key={nav.id}>
                <a href={nav.href}>{nav.name}</a>
              </li>
            )}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <Button primary>Buy now</Button>
        </div>
      </div>
    </>
  )
}

export default Navbar;