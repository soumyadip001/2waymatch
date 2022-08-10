import { useState } from "react"

export default function ContactForm() {

  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError(null)
    setSuccess(null)

    // get form data
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    }

    // minor validations
    if (!data.name || !data.email) {
      setError('You must enter valid name and email address')
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }

    const url = process.env.NEXT_PUBLIC_LANDING_SERVICE_API_URL
      ? process.env.NEXT_PUBLIC_LANDING_SERVICE_API_URL
      : 'http://localhost:3000'

    const response = await fetch(`${url}/contact/submit`, options)
    const result = await response.json()
    if (result && result.success) {
      setSuccess(result.message)
    } else {
      setError(result.message)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white lg:bg-white/10 w-full h-auto text-slate-400 rounded-3xl p-4 md:p-6 flex flex-col gap-4 text-sm"
    >
      { error &&
        <div
          className="h-11 flex justify-start items-center p-4 w-full bg-red-200 text-red-600 font-bold rounded"
        >{error}</div>
      }
      { success &&
        <div
          className="h-11 flex justify-start items-center p-4 w-full bg-green-200 text-green-600 font-bold rounded"
        >{success}</div>
      }

      <div className="flex flex-col md:flex-row items-center w-full h-auto gap-4 shadow-lg">
        <input
          type={'text'}
          className="w-full h-11 outline-none ring ring-offset-1 focus:ring-offset-2 font-normal px-4 rounded"
          placeholder="Your Name"
          id="name"
          name="name"
          required
          minLength={2}
          maxLength={50}
        />

        <input
          type={'email'}
          className="w-full h-11 outline-none ring focus:ring-offset-2 font-normal px-4 rounded"
          placeholder="Your Email"
          id="email"
          name="email"
          required
          minLength={2}
          maxLength={50}
        />
      </div>
      <div className="flex w-full">
        <input
          type={'text'}
          className="w-full h-11 outline-none ring ring-offset-1 focus:ring-offset-2 font-normal px-4 rounded"
          placeholder="Subject"
          id="subject"
          name="subject"
          required
          minLength={5}
          maxLength={200}
        />
      </div>
      <div className="flex w-full">
        <textarea
          className="w-full h-auto outline-none ring ring-offset-1 focus:ring-offset-2 font-normal px-4 rounded"
          rows={10}
          id="message"
          name="message"
          minLength={5}
          maxLength={1000}
        ></textarea>
      </div>
      <button
        type="submit"
        className="group inline-flex items-center justify-center rounded py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:bg-blue-400 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white"
      >Send A Message</button>
    </form>
  )
}