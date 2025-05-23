import React from 'react'
import { Link } from 'react-router'

function Signup() {
  return (
    <div className="bg-white min-h-screen">

  <div className="w-full max-w-sm mx-auto px-6 pt-10">
    <h1 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
      Create your<br />PopX account
    </h1>

    <form className="space-y-4">

      {/* <!-- Full Name --> */}
      <fieldset className="border border-gray-300 rounded-md px-4 pt-1 pb-2">
        <legend className="text-sm text-purple-600 px-1">Full Name<span className="text-red-500">*</span></legend>
        <input type="text" placeholder="Marry Doe"
               className="w-full mt-1 border-none focus:outline-none focus:ring-0 text-sm text-gray-700" />
      </fieldset>

      {/* <!-- Phone Number --> */}
      <fieldset className="border border-gray-300 rounded-md px-4 pt-1 pb-2">
        <legend className="text-sm text-purple-600 px-1">Phone number<span className="text-red-500">*</span></legend>
        <input type="tel" placeholder="Marry Doe"
               className="w-full mt-1 border-none focus:outline-none focus:ring-0 text-sm text-gray-700" />
      </fieldset>

      {/* <!-- Email --> */}
      <fieldset className="border border-gray-300 rounded-md px-4 pt-1 pb-2">
        <legend className="text-sm text-purple-600 px-1">Email address<span className="text-red-500">*</span></legend>
        <input type="email" placeholder="Marry Doe"
               className="w-full mt-1 border-none focus:outline-none focus:ring-0 text-sm text-gray-700" />
      </fieldset>

      {/* <!-- Password --> */}
      <fieldset className="border border-gray-300 rounded-md px-4 pt-1 pb-2">
        <legend className="text-sm text-purple-600 px-1">Password <span className="text-red-500">*</span></legend>
        <input type="password" placeholder="Marry Doe"
               className="w-full mt-1 border-none focus:outline-none focus:ring-0 text-sm text-gray-700" />
      </fieldset>

      {/* <!-- Company Name --> */}
      <fieldset className="border border-gray-300 rounded-md px-4 pt-1 pb-2">
        <legend className="text-sm text-purple-600 px-1">Company name</legend>
        <input type="text" placeholder="Marry Doe"
               className="w-full mt-1 border-none focus:outline-none focus:ring-0 text-sm text-gray-700" />
      </fieldset>

      {/* <!-- Are you an agency --> */}
      <div>
        <p className="text-sm text-gray-700 mb-2">Are you an Agency?<span className="text-red-500">*</span></p>
        <div className="flex items-center space-x-6">
          <label className="flex items-center space-x-2">
            <input type="radio" name="agency" value="yes" className="accent-purple-600" checked />
            <span className="text-sm text-gray-900">Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="agency" value="no" className="accent-gray-400" />
            <span className="text-sm text-gray-900">No</span>
          </label>
        </div>
      </div>

      {/* <!-- Submit Button --> */}
      <Link to='/account'><button type="submit"
              className="w-full bg-purple-600 cursor-pointer text-white font-semibold py-3 rounded-lg mt-4">
        Create Account
      </button></Link>
      
    </form>
  </div>

</div>
  )
}

export default Signup