import Link from "next/link";

export default function ProfileFooter() {
  return (
    <div className='text-slate-400'>
      <p className='text-sm'>
        <i className='fa fa-lock text-slate-900'></i>
        &nbsp; Please check our <span className='text-slate-500 font-semibold'><Link href={'/'}>Privacy and Policy</Link></span> and <span className='text-slate-500 font-semibold'><Link href={'/'}>Terms of Service</Link></span> before you share your details with us.</p>
    </div>
  )
}