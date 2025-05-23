import React from 'react'
import Welcome from './pages/Welcome'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Account from './pages/Account'
import { Route, Routes } from 'react-router'

function App() {
  return (

     <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/account" element={<Account />} />

    </Routes>
  
    
  )
}

export default App