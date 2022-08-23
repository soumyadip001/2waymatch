import AgniSvg from '../atoms/AgniSvg'

import SocialFb from '../icons/SocialFb'
import SocialInsta from '../icons/SocialInsta'
import SocialTw from '../icons/SocialTw'
import SocialGithub from '../icons/SocialGithub'
import SocialDribble from '../icons/SocialDribble'

export default function FooterBig({ data = { desc: '', links: [] } }) {
  return (
    <footer className="bg-white">
      <div className="px-8 pt-16 mx-auto lg:px-12 xl:px-16 max-w-7xl">
        <div className="flex flex-wrap items-start justify-between pb-20">
          <div className="flex flex-col items-start w-auto text-lg md:w-1/6">
            <a href="#_" className="w-auto">
              <AgniSvg />
            </a>
            <p className="mt-4 text-md tracking-tight text-black">
              {data.desc}
            </p>
          </div>
          <div
            className="grid w-full grid-cols-2 pt-2 mt-20 sm:grid-cols-4 gap-y-16 lg:gap-x-8 md:w-5/6 md:mt-0 md:pr-6"
          >
            {
              data.links?.map((fl, index) =>
                <div
                  key={index}
                  className="md:justify-self-end"
                >
                  <h3 className="font-semibold text-black uppercase">
                    {fl.title}
                  </h3>
                  <ul className="mt-6 space-y-4 text-sm">
                    {
                      fl.links?.map(fl1 =>
                        <li key={fl1.title}>
                          <a
                            href={fl1.href}
                            className="relative inline-block text-black group"
                          >
                            <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-1"></span>
                            <span>{fl1.title}</span>
                          </a>
                        </li>
                      )
                    }
                  </ul>
                </div>
              )
            }
          </div>
        </div>

        <div className="flex flex-col items-center justify-between py-10 border-t border-solid lg:flex-row border-gray">
          <ul className="flex flex-wrap space-x-5 text-xs">
            <li className="mb-6 text-center flex-full lg:flex-none lg:mb-0">&copy;2022 <strong>{data.companyName}</strong> All rights reserved.</li>
            <li className="lg:ml-6">
              <a href="#_" className="relative inline-block text-black group">
                <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0"></span>
                <span>Privacy Policy</span>
              </a>
            </li>
            <li className="ml-auto mr-auto text-center lg:ml-6 lg:mr-0">
              <a href="#_" className="relative inline-block text-black group">
                <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0"></span>
                <span>Disclaimers</span>
              </a>
            </li>
            <li className="lg:ml-6">
              <a href="#_" className="relative inline-block text-black group">
                <span className="absolute bottom-0 w-full transition duration-150 ease-out transform -translate-y-1 border-b border-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0"></span>
                <span>Terms and Conditions</span>
              </a>
            </li>
          </ul>

          <ul className="flex items-center mt-10 space-x-5 lg:mt-0">
            <li>
              <SocialFb link={data.social?.facebook} />
            </li>
            <li>
              <SocialInsta link={data.social?.instagram} />
            </li>
            <li>
              <SocialTw link={data.social?.twitter} />
            </li>
            <li>
              <SocialGithub link={data.social?.github} />
            </li>
            <li>
              <SocialDribble link={data.social?.dribble} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}