/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import Link from "next/link"

import ErrorAlert from "../components/alerts/ErrorAlert"
import SuccessAlert from "../components/alerts/SuccessAlert"
import AuthFooter from "../components/Footers/AuthFooter"

export default function Forgot() {

  const auth = getAuth();
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null)
    setSuccess(null)
    const email = event.target.email.value

    if (!validateEmail(email)) {
      setError('Invalid email!')
    } else {
      sendPasswordResetEmail(auth, email).then(() => {
        setSuccess('Password reset email sent!')
      }).catch(err => {
        const errorMessage = err.message || 'Invalid email.';
        setError(`Operation failed! ${errorMessage}`)
      })
    }
  }

  const validateEmail = (e) => {
    return String(e)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  return (
    <div
      className="flex flex-wrap min-h-screen w-full content-center justify-center dark:bg-slate-900 py-10"
    >
      <div className="flex shadow-md w-4/5 bg-blueGray-200">
        <div
          className="flex flex-wrap content-center justify-center rounded-l-md bg-gray-200 w-1/2"
          style={{height: '32rem'}}
        >
          <div className="w-9/12">
            <h1 className="text-xl font-semibold">Reset Password</h1>
            <small className="text-gray-400">Welcome back! Please enter your details to reset your password</small>

            { error &&
              <ErrorAlert>{error}</ErrorAlert>
            }
            { success &&
              <SuccessAlert>{success}</SuccessAlert>
            }

            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full rounded-md border border-gray-300 focus:border-blueGray-600 focus:outline-none focus:ring-1 focus:ring-blueGray-600 py-1 px-1.5 text-gray-500"
                  name="email"
                  id="email"
                  required
                  maxLength={100}
                />
              </div>

              <div className="mb-3 flex flex-wrap content-center">
                <p className="text-xs">
                  or you can just &nbsp;
                  <span className="font-semibold text-blueGray-600 underline">
                    <Link href={'/login'}>Login here</Link>
                  </span>
                </p>
              </div>

              <div className="mb-3">
                <button
                  type='submit'
                  className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          className="flex flex-wrap content-center justify-center rounded-r-md w-1/2 overflow-hidden"
          style={{height: '32rem'}}
        >
          <img
            className="w-full h-auto bg-center bg-no-repeat bg-cover rounded-r-md"
            src="https://source.unsplash.com/M8YKi58QKrM"
            alt="cover"
            width={'auto'}
          />
        </div>
      </div>
      <AuthFooter />
    </div>
  )
}