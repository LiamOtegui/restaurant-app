import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <div>

      <nav className='bg-orange-600 p-4'>
        <div className='container p-2'>
          <Link to='/'>
            <h2 className='text-2xl font-bold text-white'>
              Supermarket app
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

      <ToastContainer />

    </div>
  )
}

export default App
