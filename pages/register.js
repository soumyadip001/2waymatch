/* eslint-disable @next/next/no-img-element */
import AuthFooter from "../components/Footers/AuthFooter"
import RegisterPageSvg from "../components/icons/RegisterPageSvg"
import Head from 'next/head'

function Register() {
  return (
    <div className="min-w-screen min-h-screen bg-gray-900 flex flex-col items-center justify-center px-5 py-5">
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" 
          rel="stylesheet" />
      </Head>
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{maxWidth:'1000px'}}>
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-blueGray-600 py-10 px-10">
            <RegisterPageSvg />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
              <p>Enter your information to register</p>
            </div>
            <div>
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
                    <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blueGray-600" placeholder="John" />
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
                    <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blueGray-600" placeholder="Smith" />
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
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-12">
                  <label htmlFor="" className="text-xs font-semibold px-1">Password</label>
                  <div className="flex">
                    <div
                      className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                    >
                      <i className="fa fa-lock text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="password"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blueGray-600"
                      placeholder="************"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">REGISTER NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AuthFooter />
    </div>
  )
}

export default Register
