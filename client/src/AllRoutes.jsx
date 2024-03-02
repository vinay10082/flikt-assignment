import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home } from './Pages/Home'
import { Auth } from './Pages/Auth'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Auth' element={<Auth />} />
    </Routes>
  )
}
