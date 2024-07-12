import React from 'react'
import { Link } from 'react-router-dom'
import upperCase from '../utils/upperCase'

const Products = ({ product }) => {

    return (
        <div className='bg-white rounded shadow-lg'>
            <img src={product.image} className='w-full h-28 object-cover' />
            <div className='px-4 pt-2 pb-4'>
                <div className='text font-mono font-semibold'>{upperCase(product.name)}</div>
                <div className='text font-mono'>Quantity: {product.quantity}</div>
                <div className='text font-mono'>Price: ${product.price}</div>
            </div>
        </div>
    )
}

export default Products
