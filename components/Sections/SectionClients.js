import { useEffect, useState } from 'react'
import UserQuoteSvg from '../atoms/UserQuoteSvg'
import FigCaption from '../atoms/FigCaption'
import styles from '../../styles/clients.module.css'

export default function SectionClients() {

  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState(null)
  const [para, setPara] = useState(null)
  const [clients, setClients] = useState([])

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_LANDING_SERVICE_API_URL
        ? process.env.NEXT_PUBLIC_LANDING_SERVICE_API_URL
        : 'http://localhost:3000'
    const fetchData = async () => {
      const res = await fetch(`${url}/clients`)
      const pageData = await res.json()
      if (pageData.success) {
        setLoading(true)
        setTitle(pageData.data?.title)
        setPara(pageData.data?.para)

        if (pageData.data?.clients?.length) {
          setClients(pageData.data?.clients)
        }
      }
    }

    fetchData()
  }, [])

  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      { !loading &&
        <p>Please wait... Page is getting loaded!</p>
      }
      { loading &&
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">{title || 'This is a demo title'}</h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              {para}
            </p>
          </div>
          <ul className="w-full flex flex-wrap gap-6 items-center justify-center mt-16">
            {clients.map(client =>
              <li
                key={client.id}
                className={`relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 mb-4 ${styles.ClientCard}`}
              >
                <UserQuoteSvg />
                <blockquote className="relative">
                  <p className="text-lg tracking-tight text-slate-900">
                    {client.feedback}
                  </p>
                </blockquote>
                <FigCaption
                  name={client.name}
                  role={client.role}
                  src={client.photo}
                />
              </li>
            )}
          </ul>
        </div>
      }
    </section>
  )
}