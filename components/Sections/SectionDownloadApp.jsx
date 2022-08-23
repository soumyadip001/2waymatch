/* eslint-disable @next/next/no-img-element */
import Button from '../buttons/Button';
import ButtonWhite from '../buttons/ButtonWhite';

export default function SectionDownloadApp() {
	return (
  <div
    className="dark:bg-slate-900 dark:text-gray-100"
    id="download-app"
    aria-label="Download Our App"
	>
    <div className="overflow-hidden lg:relative">
      <div
        className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-5xl lg:px-8 relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
			>
        <div className="flex flex-col justify-between align-middle items-start gap-4">
          <h2 className="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">Get support through our application</h2>
          <p className="mt-4 text-lg tracking-tight text-blue-200">
            Download our app now!
          </p>
          <div className="flex flex-row gap-4">
            <ButtonWhite type="submit" textColor="text-black">
              <img
                src={'https://www.pinpng.com/pngs/m/683-6835555_apple-app-store-icon-free-png-and-svg.png'} height={'auto'}
                width={'22px'}
                alt={'download from app store'}
							/>
              &nbsp; App Store
            </ButtonWhite>
            <Button primary>
              <img
                src={'/img/Google_Play-Icon-Logo.wine.svg'}
                height={'auto'}
                width={'24px'}
                alt={'download from play store'}
							/>
              Play Store
            </Button>
          </div>
        </div>
        <div className='rounded-lg overflow-hidden'>
          <img
            src={'https://source.unsplash.com/HQSEvyN56K0'}
            alt={'App UI'}
            height={'500'}
            width={'auto'}
					/>
        </div>
      </div>
    </div>
  </div>
	)
}