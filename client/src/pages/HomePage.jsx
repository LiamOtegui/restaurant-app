import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Products from '../components/Products'
import EditPopUp from '../components/EditPopUp'
import { Link } from 'react-router-dom'

const HomePage = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)

    const getProducts = async () => {
        try {
            setLoading(true)
            const response = await axios.get('http://localhost:5000/products')
            setProducts(response.data)
            setLoading(false)
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <Link to='/create' className='inline-block bg-orange-500 px-3.5 py-2 font-bold mt-5 mb-2 ml-4 text-lg rounded text-white hover:bg-orange-400 font'>
                Create a product
            </Link>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4 ml-4'>
                {
                    loading ? "Loading" : (
                        products.map((product, index) => {
                            return (
                                <div key={index}>
                                    <div>
                                        <div>
                                            <Products product={product} />
                                        </div>
                                        <div className='flex justify-around bg-white shadow-md p-2'>
                                            <button onClick={() => setOpen(true)} className='bg-orange-500 px-4 py-2 rounded text-white hover:bg-orange-400 font-semibold font-mono'>
                                                Edit
                                            </button>
                                            <button className='bg-orange-500 px-4 py-2 rounded text-white hover:bg-orange-400 font-semibold font-mono'>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                    <EditPopUp product={product} open={open} onClose={() => setOpen(false)} className=''>
                                        Edit the product:
                                    </EditPopUp>
                                </div>
                            )
                        }
                        )
                    )
                }
            </div>
        </div>
    )
}

export default HomePage