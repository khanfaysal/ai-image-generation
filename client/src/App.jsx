import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home, CreatePost } from './pages';
import { logo } from './assets'

const App = () => {
  return (
    <BrowserRouter>
      <header className='sm:flex flex-col gap-4 md:w-full flex md:flex-row justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] fixed top-0 left-0 right-0 z-10'>
        <Link to='/'>
          <img src={logo} alt="logo" className='w-28 object-contain' />
        </Link>

        <div className='flex flex-row gap-4'>
          <Link to='/create-post' className='text-white font-inter font-medium bg-[#032074] px-4 py-2 rounded-md'>
            Generate Image
          </Link>
          <Link to='/' className='text-white font-inter font-medium bg-[#032074] px-4 py-2 rounded-md'>
            Go Community
          </Link>
        </div>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App