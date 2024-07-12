import React from 'react'

const EditPopUp = ({ product, open, onClose, children }) => {
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? 'visible bg-black/20' : 'invisible'}`}>
      <div onClick={event => event.stopPropagation()} className={`bg-white py-5 px-8 rounded-md transition-all ${open ? 'scale-125 opacity-100' : 'scale-100 opacity-0'}`}>
        <button onClick={onClose} className='absolute top-0 right-2'>
          x
        </button>
        <div className='text-xl font-mono mb-3'>
          {children}
        </div>
        <form className='grid font-mono space-y-3'>
          <div>
            <input className='border border-gray-300 rounded h-7' placeholder='Name' />
          </div>
          <div>
            <input className='border border-gray-300 rounded h-7' placeholder='Quantity' />
          </div>
          <div>
            <input className='border border-gray-300 rounded h-7' placeholder='Price' />
          </div>
          <div>
            <input className='border border-gray-300 rounded h-7' placeholder='Image' />
          </div>
        </form>
        <div className='flex justify-end mt-3'>
          <button className='mr-3 bg-orange-300 px-2 py-1 rounded font-mono'>Edit</button>
          <button onClick={onClose} className='bg-orange-300 px-2 py-1 rounded font-mono'>Close</button>
        </div>
      </div>
    </div>
  )
}

export default EditPopUp
