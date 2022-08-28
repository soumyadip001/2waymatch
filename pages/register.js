/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

import AuthFooter from "../components/Footers/AuthFooter"
import RegisterPageSvg from "../components/icons/RegisterPageSvg"
import ErrorAlert from "../components/alerts/ErrorAlert"
import SuccessAlert from "../components/alerts/SuccessAlert"
import SocialFb from '../components/icons/SocialFb'

function Register() {

  const passMatch = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  const router = useRouter()
  const auth = getAuth()

  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loader, setLoader] = useState(false)

  const handleSubmit = async (event) => { 
    event.preventDefault();
    setError(null)
    setSuccess(null)

    // get form data
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
    }

    // minor validations
    if (!data.password || !data.email || !data.firstName || !data.lastName) {
      setError('You must fill all the details')
    } else if (!passMatch.test(data.password)) {
      setError('Password crieteria mismatch!')
    } else {
      setLoader(true)
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }

      try {
        const url = process.env.NEXT_PUBLIC_AUTH_SERVICE_API_URL || 'http://localhost:4002'
        const response = await fetch(`${url}/auth/register`, options)
        const result = await response.json()
        setLoader(false)

        if (result && result.success) {
          setSuccess(result.message)
          router.push('/login')
        } else {
          setError(result.message)
        }
      } catch (err) {
        setError('Operation failed! Please try again later!')
        setLoader(false)
      }
    }
  }

  const handleGoogleSignIn = async () => {
    setSuccess(false)
    setError(false)

    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const credential = GoogleAuthProvider.credentialFromResult(result)
      setToken(credential.accessToken)
      setUser(result.user)
      setSuccess('Sign In Successfull!')
      router.push('/profile')
    } catch (err) {
      const errorMessage = err.message
      const email = err.customData.email
      const credential = GoogleAuthProvider.credentialFromError(error)
      setError(`Unable to signup with ${email || 'email'}. ${err.code} - ${errorMessage}`)
      console.error(credential)
    }
  }

  const handleFacebookSignIn = async () => {
    setError(null)
    setSuccess('This feature is coming soon')
  }

  return (
    <div className="min-w-screen min-h-screen bg-gray-900 flex flex-col items-center justify-center px-5 py-5">
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" 
          rel="stylesheet" />
      </Head>
      <div
        className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
        style={{ maxWidth: '1000px' }}
      >
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-blueGray-600 py-10 px-10">
            <RegisterPageSvg />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
              <p>Enter your information to register</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <label
                    htmlFor=""
                    className="text-xs font-semibold px-1"
                  >First name</label>
                  <div className="flex">
                    <div
                      className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                    >
                      <i className="fa fa-user text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blueGray-600"
                      placeholder="John"
                      name="firstName"
                      id="firstName"
                      required
                      maxLength={50}
                    />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <label htmlFor="" className="text-xs font-semibold px-1">Last name</label>
                  <div className="flex">
                    <div
                      className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                    >
                      <i className="fa fa-user text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blueGray-600"
                      placeholder="Smith"
                      name="lastName"
                      id="lastName"
                      required
                      maxLength={50}
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="" className="text-xs font-semibold px-1">Email</label>
                  <div className="flex">
                    <div
                      className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                    >
                      <i className="fa fa-envelope text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="email"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blueGray-600"
                      placeholder="johnsmith@example.com"
                      name="email"
                      id="email"
                      required
                      maxLength={100}
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-12">
                  <label htmlFor="" className="text-xs font-semibold px-1">Password</label>
                  <div className='flex flex-col w-full items-start'>
                    <div className="flex w-full">
                      <div
                        className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                      >
                        <i className="fa fa-lock text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blueGray-600"
                        placeholder="************"
                        name="password"
                        id="password"
                        required
                        maxLength={50}
                        minLength={6}
                      />
                    </div>
                    <div className='font-light text-sm text-gray-400'>
                      <span>Password length must be at least 8 characters. Password must have one uppercase letter, one number, one special character.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button
                    type='submit'
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 disabled:cursor-not-allowed disabled:bg-blueGray-400"
                    disabled={loader}
                  >
                    { loader &&
                      <i className='fa fa-spinner fa-spin fa-fw mr-2' aria-hidden={'true'}></i>
                    }
                    REGISTER NOW
                  </button>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <button
                    type='button'
                    className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md bg-white mt-1"
                    onClick={handleGoogleSignIn}
                  >
                    <img
                      className="w-5 mr-2"
                      src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                      alt="Google Sign In"
                    />
                    Sign in with Google
                  </button>
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <button
                    type='button'
                    className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md bg-white mt-1"
                    onClick={handleFacebookSignIn}
                  >
                    <SocialFb />
                    &nbsp; Sign in with FB
                  </button>
                </div>
              </div>
              <div className="flex text-xs">
                <p>
                  Already registered? &nbsp;
                  <span className="text-blueGray-800 font-bold underline">
                    <Link href={'/login'}>Login here</Link>
                  </span>
                </p>
              </div>
              { error &&
                <div className="flex text-xs"><ErrorAlert>{error}</ErrorAlert></div>
              }
              { success &&
                <div className='flex text-xs'><SuccessAlert>{success}</SuccessAlert></div>
              }
            </form>
          </div>
        </div>
      </div>

      <AuthFooter />
    </div>
  )
}

export default Register
