

function Account() {
  return (
    
 <div className="bg-white min-h-screen">


<div class="w-full max-w-sm mx-auto px-6 pt-10">
    <div className="border-b px-6 py-4">
      <h2 className="text-sm font-semibold text-gray-700">Account Settings</h2>
    </div>
    <div className="p-6 flex items-start space-x-4">
      <div className="relative">
     
         {/* <!-- Profile Image --> */}
        <img src="https://fahimalifportfolio-lake.vercel.app/_next/static/media/hero.0a915c3b.png" alt="Profile" className="w-12 h-12 rounded-full object-cover" />

        {/* <!-- Small camera icon overlay at bottom right --> */}
        <div className="absolute -bottom-0.5 -right-0.5 bg-white rounded-full p-[2px] shadow-sm">
          <div className="bg-purple-600 rounded-full p-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-.707-.707A1 1 0 0012.586 4H7.414a1 1 0 00-.707.293l-.707.707A1 1 0 015.586 5H4zm6 3a3 3 0 110 6 3 3 0 010-6z"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-gray-800">Marry Doe</h3>
        <p className="text-sm text-gray-500">Marry@Gmail.Com</p>
        <p className="mt-2 text-xs text-gray-600 leading-snug">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
     
    </div>
  </div>

</div>
  )
}

export default Account