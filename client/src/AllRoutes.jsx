import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Auth } from './Pages/Auth'
import { AddData } from './Pages/AddData'
import { UpdateData } from './Pages/UpdateData'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/add' element={<AddData />} />
      <Route path='/edit/:id' element={<UpdateData />} />
    </Routes>
  )
}
