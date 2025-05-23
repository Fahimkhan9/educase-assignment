import React from 'react'
import { Link } from 'react-router'

function Signin() {
  return (
    <div className="bg-white min-h-screen">


<div class="w-full max-w-sm mx-auto px-6 pt-10">
    <h1 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
      Signin to your<br />PopX account
    </h1>
    <p className="text-gray-500 mb-6 leading-relaxed">
      Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
    </p>

    <form className="space-y-4">
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
      <Link to='/account'>
      <button type="submit"
              className="w-full bg-gray-300 cursor-pointer text-white font-semibold py-3 rounded-lg">
        Login
      </button></Link>
      
    </form>
  </div>

</div>
  )
}

export default Signin