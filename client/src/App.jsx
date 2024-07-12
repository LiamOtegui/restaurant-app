import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'

const App = () => {

  return (
    <div>

      <nav className='bg-gray-800'>
        <div className='container p-2'>
          <Link href='/'>
            <h2 className='text-2xl font-bold text-white'>
              React CRUD
            </h2>
          </Link>
        </div>
      </nav>

      <div className='container mx-auto h-full'>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/create' element={<CreatePage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
