import React from 'react'
import Home from './home/Home'
import {Routes,Route } from 'react-router-dom'
import Cources from './cources/Cources'
import Signup from './components/Signup'
import Login from './components/Login'
import Contact from './components/Contact'


function App() {
  return (
    <div>
      {/* <Home/> */}
      <div className='dark:bg-slate-200 dark:text-black'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cource' element={<Cources/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
