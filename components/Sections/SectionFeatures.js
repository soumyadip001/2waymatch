/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'

export default function SectionFeatures() {

  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState(null)
  const [para, setPara] = useState(null)
  const [phaseOne, setPhaseOne] = useState(null)
  const [phaseTwo, setPhaseTwo] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const url = process.env.NEXT_PUBLIC_LANDING_SERVICE_API_URL
        ? process.env.NEXT_PUBLIC_LANDING_SERVICE_API_URL
        : 'http://localhost:3000'
      const res = await fetch(`${url}/services`)
      const pageData = await res.json()
      if (pageData.success) {
        setLoading(true)
        setTitle(pageData.data?.title)
        setPara(pageData.data?.para)

        if (pageData.data?.phaseOne) {
          setPhaseOne(pageData.data?.phaseOne)
        }
        if (pageData.data?.phaseTwo) {
          setPhaseTwo(pageData.data?.phaseTwo)
        }
      }
    }

    fetchData()
  }, [])

  return (
    <section
      className="dark:bg-slate-900 dark:text-gray-100"
    >
      { !loading &&
        <p>Please wait... Page is getting loaded!</p>
      }
      { loading &&
        <div className="container max-w-xl p-6 py-20 sm:py-32 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
              {title}
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-lg text-center dark:text-slate-400">
              {para}
            </p>
          </div>

          { phaseOne &&
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center px-6 sm:px-8">
              <div>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                  { phaseOne.title }
                </h3>
                <p className="mt-3 text-lg dark:text-slate-400">
                  { phaseOne.para }
                </p>
                <div className="mt-12 space-y-12">
                  {
                    phaseOne.services.map((service, index) =>
                      <div className="flex" key={index}>
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-blue-600 dark:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                            {service.title}
                          </h4>
                          <p className="mt-2 dark:text-slate-400">
                            {service.desc}
                          </p>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
              <div aria-hidden="true" className="mt-10 lg:mt-0">
                <img src={phaseOne.cover} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
              </div>
            </div>
          }

          { phaseTwo &&
            <div>
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center px-6 sm:px-8">
                <div className="lg:col-start-2">
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                    {phaseTwo.title}
                  </h3>
                  <p className="mt-3 text-lg dark:text-slate-400">
                    {phaseTwo.para}
                  </p>
                  <div className="mt-12 space-y-12">
                    {
                      phaseTwo.services.map((service, index) =>
                        <div className="flex" key={index}>
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-blue-600 dark:text-gray-900">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                              {service.title}
                            </h4>
                            <p className="mt-2 dark:text-slate-400">
                              {service.desc}
                            </p>
                          </div>
                        </div>
                      )
                    }
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                  <img src={phaseTwo.cover} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                </div>
              </div>
            </div>
          }
        </div>
      }
    </section>
  )
}
