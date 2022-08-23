import Link from "next/link";

export default function SidebarItem({ children, active = false, icon = null, href = '#' }) {

  const activeClass = active ? 'bg-slate-900 text-gray-100' : 'bg-white'

  return (
    <li className={`flex flex-row w-full h-auto p-2 gap-2 rounded-lg hover:bg-slate-900 hover:text-gray-100 hover:border-gray-300 mb-2 hover:shadow-xl cursor-pointer ${activeClass}`}>
      {icon &&
        <i className={icon}></i>
      }
      <Link href={href}>{children}</Link>
    </li>
  )
}
