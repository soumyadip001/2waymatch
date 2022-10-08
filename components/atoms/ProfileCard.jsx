/* eslint-disable @next/next/no-img-element */
function ProfileCard({
  name = 'Soumyadip Hazra', img = 'Dp-Profile.jpg',
  place = 'Kolkata, India', age = '29'
}) {
  return (
    <div className="h-auto bg-white border-blueGray-700 border p-0 flex flex-col items-center justify-center rounded-md" style={{width: '290px'}}>
      <div className='flex items-center justify-center w-full h-auto bg-black rounded-sm border-white border-0 overflow-hidden'>
        <img
          alt="Profile"
          src={`/img/${img}`}
          decoding="async"
          data-nimg="intrinsic"
          className='object-cover'
          style={{width: '288px', height: '370px'}}
        />
      </div>
      <div className="flex flex-col w-full items-start justify-start mt-4 px-4 text-slate-900 gap-1">
        <h1 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
          {name}
        </h1>
        <h4 className="text-lg">
          <i className="fa fa-location-dot mr-2"></i>
          {place}
        </h4>
        <h4 className="text-lg">
          <i className="fa fa-calendar mr-2"></i>
          {`${age} years old`}
        </h4>
      </div>
      <div className="flex flex-row gap-2 justify-start items-start w-full mt-0 p-4">
        <button className="border border-blueGray-700 rounded-md px-4 py-2 active:bg-blueGray-700 active:text-white hover:bg-blueGray-300">
          <i className="fa fa-user-plus mr-2"></i>
          Add User
        </button>
        <button className="border border-blueGray-700 rounded-md px-4 py-2 active:bg-blueGray-700 active:text-white hover:bg-blueGray-300">
          <i className="fa fa-eye mr-2"></i>
          Profile
        </button>
      </div>
    </div>
  )
}

export default ProfileCard;