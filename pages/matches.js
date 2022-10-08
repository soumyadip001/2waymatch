import ProfileCard from "../components/atoms/ProfileCard";
import ProfileNavbar from "../components/Navbars/ProfileNavbar";

export default function Matches() {
  return (
    <div className="flex w-full h-full flex-col px-4 sm:px-6 lg:px-10">
      <ProfileNavbar />
      <div className='flex h-auto w-full justify-start items-center border-b border-gray-200 pb-4'>
        <h1 className='text-4xl font-bold'>Welcome to the Matches!</h1>
      </div>
      <div className="flex flex-row w-full pt-4">
        <div className="flex items-start justify-start flex-wrap gap-4">
          <ProfileCard name="Lilly Adams" place={'Lajpat Nagar, Delhi'} age={'30'} />
          <ProfileCard img="profile-img-male.jpg" />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
    </div>
  )
}