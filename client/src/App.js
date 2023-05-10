import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import SearchUsers from './component/SearchUsers'
import Cart from './component/Cart'

const App = () => {
  return (
    <>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/usersearch' element={<SearchUsers />} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
    </>
  )
}

export default App
