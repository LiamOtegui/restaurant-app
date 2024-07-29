import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Products from '../components/Products'
import { Link } from 'react-router-dom'
import EditPopUp from '../components/EditPopUp'
import DeletePopUp from '../components/DeletePopUp'
import Loading from '../components/Loading'

const HomePage = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const [choosenForEdit, setChoosenForEdit] = useState(null)
    const [openEdit, setOpenEdit] = useState(false)
    const [choosenForDelete, setChoosenForDelete] = useState(null)
    const [openDelete, setOpenDelete] = useState(false)

    const getProducts = async () => {
        try {
            setLoading(true)
            const response = await axios.get('http://localhost:5000/products')
            setProducts(response.data)
            setTimeout(() => {
                setLoading(false)
            }, 2000)
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
                Create a new product
            </Link>
            <div className={!loading ? `grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4 ml-4` : `flex justify-center items-center mt-20`}>
                {
                    loading ? <Loading /> : (
                        products.map((product, index) => {
                            return (
                                <div key={index}>
                                    <div>
                                        <div>
                                            <Products product={product} />
                                        </div>
                                        <div className='flex justify-around bg-white shadow-md p-2'>
                                            <button
                                                onClick={() => {
                                                    setOpenEdit(true)
                                                    setChoosenForEdit(product)
                                                }}
                                                className='bg-orange-500 px-4 py-2 rounded text-white hover:bg-orange-400 font-semibold font-mono'>
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setOpenDelete(true)
                                                    setChoosenForDelete(product)
                                                }}
                                                className='bg-orange-500 px-4 py-2 rounded text-white hover:bg-orange-400 font-semibold font-mono'>
                                                Delete
                                            </button>
                                        </div>
                                    </div>

                                    <EditPopUp choosen={choosenForEdit} open={openEdit} onClose={() => setOpenEdit(false)}>
                                        Edit product:
                                    </EditPopUp>
                                    <DeletePopUp choosen={choosenForDelete} open={openDelete} onClose={() => setOpenDelete(false)}>
                                        Delete product?
                                    </DeletePopUp>
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