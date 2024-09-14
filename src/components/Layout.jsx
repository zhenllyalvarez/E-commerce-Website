import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'

const Layout = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Layout