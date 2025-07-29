import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './page/LoginPage'
import RegisterPage from './page/RegisterPage'
import BerandaPage from './page/BerandaPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/beranda' element={<BerandaPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
