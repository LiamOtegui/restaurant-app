import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import upperCase from '../utils/upperCase'

const CreatePage = () => {

  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmitForm = async () => {
    if (name === '' || quantity === '' || price === '' || image === '') {
      alert('Please fill all the inputs')
      return
    }
    try {
      setLoading(true)
      const response = await axios.post("http://localhost:5000/products", {
        name: name,
        quantity: quantity,
        price: price,
        image: image
      })
      alert(`${upperCase(response.data.name)} created with success!`)
      setLoading(false)
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className='max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6'>
      <h2 className='font-semibold text-center text-2xl mb-4'>
        Create Page
      </h2>
      <form onSubmit={onSubmitForm}>
        <div className='space-y-2'>
          <div>
            <input type='text' value={name} onChange={(event) => setName(event.target.value)} className='w-full border p-3 rounded' placeholder='Name of the product' />
          </div>
          <div>
            <input type='number' value={quantity} onChange={(event) => setQuantity(event.target.value)} className='w-full p-3 rounded border' placeholder='Quantity' />
          </div>
          <div>
            <input type='number' value={price} onChange={(event) => setPrice(event.target.value)} className='w-full p-3 rounded border' placeholder='Price' />
          </div>
          <div>
            <input type='text' value={image} onChange={(event) => setImage(event.target.value)} className='w-full p-3 rounded border' placeholder='Image URL' />
          </div>
          {
            !loading &&
            (<div className='flex justify-around pt-5'>
              <button className='bg-blue-500 py-3 px-12 rounded-md hover:bg-blue-400 text-white font-bold'>
                Save
              </button>
              <Link to='/' className='bg-blue-500 py-3 px-11 rounded-md hover:bg-blue-400 text-white font-bold'>
                Cancel
              </Link>
            </div>)
          }
        </div>
      </form>
    </div>
  )
}

export default CreatePage
