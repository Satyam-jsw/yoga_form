import { Route, Routes } from 'react-router-dom'
import React from 'react'
import ThankYou from './components/Thankyou'
import  EnrollmentForm from './components/Form'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={< EnrollmentForm/>} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </>
  )
}

export default App