import React from 'react'
import { Link } from 'react-router'

function Welcome() {
  return (
    <div className="bg-base-200 min-h-screen flex items-end justify-center p-6">
  

  <div className="w-full max-w-sm flex flex-col justify-end px-6 pb-10 min-h-screen">
    <div className="text-center mt-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to PopX</h1>
      <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>
    </div>

    <div className="space-y-3">
      <div>
        <Link to='/signup'>
      <button className="w-full bg-purple-600 text-white cursor-pointer font-semibold py-3 rounded-lg">Create Account</button>
      </Link>
      </div>
      

     <div>
       <Link to='/signin'>
       <button className="w-full bg-purple-300 text-purple-800 cursor-pointer font-semibold py-3 rounded-lg">
        Already Registered? Login
      </button>
      </Link>
     </div>
    </div>
  </div>
</div>
  )
}

export default Welcome