import SidebarItem from './SidebarItem'

export default function ProfileSidebar({ active = 'Profile' }) {
  return (
    <aside className="flex items-start justify-start h-auto w-full">
      <ul className="flex flex-col list-none w-11/12">
        <SidebarItem active={active === 'Profile'} href='/profile'>Profile</SidebarItem>
        <SidebarItem active={active === 'Details'} href='/profile/details'>My Details</SidebarItem>
        <SidebarItem active={active === 'Partner'} href='/profile/partner'>Partner Profile</SidebarItem>
        <SidebarItem active={active === 'Password'} href='/profile/password'>Password</SidebarItem>
        <SidebarItem active={active === 'Plan'} href='/profile/plan'>Plan</SidebarItem>
        <SidebarItem active={active === 'Billing'} href='/profile/billing'>Billing</SidebarItem>
        <SidebarItem active={active === 'Email'} href='/profile/email'>Email</SidebarItem>
        <SidebarItem active={active === 'Notifications'} href='/profile/notifications'>Notifications</SidebarItem>
        <SidebarItem active={active === 'Integrations'} href='/profile/integrations'>Integrations</SidebarItem>
      </ul>
    </aside>
  )
}
