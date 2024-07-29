import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import upperCase from '../utils/upperCase'

const EditPopUp = ({ choosen, open, onClose, children }) => {

  const [product, setProduct] = useState({
    name: '',
    quantity: '',
    price: '',
    image: ''
  })

  useEffect(() => {
    if (choosen !== null) {
      setProduct({
        name: choosen.name,
        quantity: choosen.quantity,
        price: choosen.price,
        image: choosen.image
      })
    }
  }, [choosen])

  const updateProduct = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.put(`http://localhost:5000/products/${choosen._id}`, product)
      toast.success(`${upperCase(choosen.name)} was updated with success!`)
      onClose()
      setTimeout(() => {
        window.location = '/'
      }, 2000)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value
    })
  }

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? 'visible bg-black/20' : 'invisible'}`}>
      <div
        onClick={event => event.stopPropagation()}
        className={`bg-white py-5 px-6 rounded-md transition-all ${open ? 'scale-125 opacity-100' : 'scale-100 opacity-0'}`}>
        <button
          onClick={onClose}
          className='absolute top-0 right-2'>
          x
        </button>
        <div className='text-xl font-mono font-semibold mb-3 flex justify-center'>
          {children}
        </div>

        <form onSubmit={updateProduct} className='grid font-mono space-y-3'>
          <div>
            <input type='text' name='name' value={product.name} onChange={handleChange} className='pl-1 border border-gray-300 rounded h-7' placeholder='Name' />
          </div>
          <div>
            <input type='number' name='quantity' value={product.quantity} onChange={handleChange} className='pl-1 border border-gray-300 rounded h-7' placeholder='Quantity' />
          </div>
          <div>
            <input type='number' name='price' value={product.price} onChange={handleChange} className='pl-1 border border-gray-300 rounded h-7' placeholder='Price' />
          </div>
          <div>
            <input type='text' name='image' value={product.image} onChange={handleChange} className='pl-1 border border-gray-300 rounded h-7' placeholder='Image' />
          </div>

          <div className='flex justify-end mt-3'>
            <button className='w-full bg-orange-500 px-2 py-1 rounded font-mono text-white'>Edit</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default EditPopUp