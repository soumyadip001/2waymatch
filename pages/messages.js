import ProfileNavbar from "../components/Navbars/ProfileNavbar";

export default function Messages() {
  return (
    <div className="flex w-full h-full flex-col px-4 sm:px-6 lg:px-10">
      <ProfileNavbar />
      <div className='flex h-auto w-full justify-start items-center border-b border-gray-200 pb-4'>
        <h1 className='text-4xl font-bold'>Welcome to the Messages!</h1>
      </div>
      <div className="flex flex-row w-full pt-4">
        This page is work in progress! Please check again later!
      </div>
    </div>
  )
}