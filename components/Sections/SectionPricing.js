/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect, useState } from 'react'
import ScribbleSvg3 from '../atoms/ScribbleSvg3'

function SectionPricing() {

  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState(null)
  const [para, setPara] = useState(null)
  const [pricing, setPricing] = useState([])

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_LANDING_SERVICE_API_URL
    const fetchData = async () => {
      const res = await fetch(`${url}/pricing`)
      const pageData = await res.json()
      if (pageData.success) {
        setLoading(true)
        setTitle(pageData.data?.title)
        setPara(pageData.data?.para)

        if (pageData.data?.pricing.length) {
          setPricing(pageData.data?.pricing)
        }
      }
    }

    fetchData()
  }, [])
  
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-slate-900 py-20 sm:py-32"
    >
      { !loading &&
        <p>Please wait... Page is getting loaded!</p>
      }

      { loading &&
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="md:text-center">
            <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
              <span className="relative whitespace-nowrap">
                <ScribbleSvg3 />
                <span className="relative">{title}</span>
              </span>
              for everyone.
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              {para}
            </p>
          </div>
          { pricing.length &&
            <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
              {
                pricing.map((price, index) => 
                  <section
                    className={`
                      flex flex-col rounded-3xl px-6 sm:px-8 
                      ${price.primary ? 'order-first bg-blue-600 py-8 lg:order-none' : 'lg:py-8'}
                    `}
                    key={index}
                  >
                    <h3 className="mt-5 font-display text-lg text-white">{price.title}</h3>
                    <p
                      className={`
                        mt-2 text-base 
                        ${price.primary ? 'text-white' : 'text-slate-400'}
                      `}
                    >
                      {price.desc}
                    </p>
                    <p className="order-first font-display text-5xl font-light tracking-tight text-white">
                      {price.price}
                    </p>
                    <ul className="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-200">
                      {
                        price.services.map((service, index2) => 
                          <li className="flex" key={`${index}-${index2}`}>
                            <svg
                              aria-hidden="true"
                              className={`
                                h-6 w-6 flex-none fill-current stroke-current 
                                ${price.primary ? 'text-white' : 'text-slate-400'}
                              `}
                            >
                              <path d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z" strokeWidth="0"></path>
                              <circle cx="12" cy="12" r="8.25" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                            </svg>
                            <span className="ml-4">{service}</span>
                          </li>
                        )
                      }
                    </ul>
                    {
                      price.primary ?
                        <a
                          className={`group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-8`}
                          aria-label="Get started with Small business plan for $15"
                          href="/register"
                        >
                          Get started
                        </a>
                      :
                        <a className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white mt-8" aria-label="Get started with Starter plan for $9" href="/register">Get started</a>
                    }
                  </section>
                )
              }
            </div>
          }
        </div>
      }
    </section>
  )
}

export default SectionPricing;