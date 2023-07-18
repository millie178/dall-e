import React from 'react';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {logo} from './assets';

import {Home, CreatePost} from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-[#79A5DA] sm:px-8 px-4 py-4 border-b border-b-[#79A5DA]'>
        <Link to="/">
          <img src={logo} alt="logo" className='w-28 object-contain'/>
        </Link>
        <Link to="/create-post" className='font-inter font-medium bg-[#3a087b] text-[#79A5DA] px-6 py-2 rounded-md'>Create</Link>
      </header>
      <main className='sm:p-x px-4 py-8 w-full bg-[#3a087b] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/create-post' element={<CreatePost />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App