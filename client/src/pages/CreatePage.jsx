import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import upperCase from '../utils/upperCase'
import { toast } from 'react-toastify'

const CreatePage = () => {

  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  const [saveButton, setSaveButton] = useState(false)
  const navigate = useNavigate()

  const onSubmitForm = async (event) => {
    event.preventDefault()
    if (name === '' || quantity === '' || price === '' || image === '') {
      toast.warn('Please fill all the inputs')
      return
    }
    try {
      setSaveButton(true)
      const response = await axios.post('http://localhost:5000/products', {
        name: name,
        quantity: quantity,
        price: price,
        image: image
      })
      toast.success(`${upperCase(response.data.name)} was created with success!`)
      setSaveButton(false)
      navigate('/')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='flex justify-center mt-8'>
      <div className='inline-block'>
        <div className='flex flex-col items-center bg-white p-7 rounded-md'>
          <div className='mb-4 text-xl pb-3'>Create Product:</div>
          <div className='bg-white flex justify-center'>
            <form
              onSubmit={onSubmitForm}
              className='space-y-4'>
              <div className='flex flex-col space-y-5'>
                <input
                  type='text'
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder='Name'
                  className='border border-gray-400 rounded w-[18rem] p-2'
                />
                <input
                  type='number'
                  value={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                  placeholder='Quantity'
                  className='border border-gray-400 rounded w-[18rem] p-2'
                />
                <input
                  type='number'
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                  placeholder='Price'
                  className='border border-gray-400 rounded w-[18rem] p-2'
                />
                <input
                  type='text'
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                  placeholder='Image URL'
                  className='border border-gray-400 rounded w-[18rem] p-2'
                />
              </div>
              {
                !saveButton &&
                (<button className='bg-orange-500 text-white w-full rounded font-semibold hover:bg-orange-600 p-3'>
                  Save
                </button>)
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage
