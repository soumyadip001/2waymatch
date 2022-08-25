/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import AuthFooter from "../components/Footers/AuthFooter"
import ErrorAlert from "../components/alerts/ErrorAlert"
import SuccessAlert from "../components/alerts/SuccessAlert"

function Login() {

  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [user, setUser] = useState(null)
  const router = useRouter()
  const auth = getAuth()

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null)
    setSuccess(null)

    // get the form data
    const formData = {
      email: event.target.email.value,
      password: event.target.password.value,
    }

    if (!formData.password || !formData.email) {
      setError('You must fill all the details')
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password)
        // const userCredential = await auth.signInWithEmailAndPassword(formData.email, formData.password)
        setUser(userCredential.user)
        setSuccess('Login Success!')
        console.log(user)
        router.push('/profile')
      } catch (err) {
        console.error(err)
        setError('Invalid Credentials!')
      }
    }
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
          <div className="w-72">
            <h1 className="text-xl font-semibold">Welcome back</h1>
            <small className="text-gray-400">Welcome back! Please enter your details</small>

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

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Password</label>
                <input
                  type="password"
                  placeholder="*****"
                  className="block w-full rounded-md border border-gray-300 focus:border-blueGray-600 focus:outline-none focus:ring-1 focus:ring-blueGray-600 py-1 px-1.5 text-gray-500"
                  name="password"
                  id="password"
                  required
                  maxLength={100}
                />
              </div>

              <div className="mb-3 flex flex-wrap content-center">
                <input id="remember" type="checkbox" className="mr-1 checked:bg-blueGray-600" /> <label htmlFor="remember" className="mr-auto text-xs font-semibold">Remember for 30 days</label>
                <a href="#" className="text-xs font-semibold text-blueGray-600">Forgot password?</a>
              </div>

              <div className="mb-3">
                <button
                  type='submit'
                  className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                >
                  Sign in
                </button>

                <button
                  type='button'
                  className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md bg-white mt-1"
                >
                  <img
                    className="w-5 mr-2"
                    src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                    alt="Google Sign In"
                  />
                  Sign in with Google
                </button>
              </div>
            </form>

            <div className="text-center text-xs">
              <span className="text-gray-400 font-semibold">Dont have account?</span> &nbsp;
              <span className="text-blueGray-800 font-bold underline">
                <Link href={"/register"}>Sign up</Link>
              </span>
            </div>
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

export default Login