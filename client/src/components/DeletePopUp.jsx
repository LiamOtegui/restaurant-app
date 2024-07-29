import React from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { MdDeleteForever } from "react-icons/md";

const DeletePopUp = ({ choosen, open, onClose, children }) => {

    const deleteProduct = async () => {
        try {
            const response = await axios.delete(`http://localhost:5000/products/${choosen._id}`)
            toast.success(`${choosen.name} was deleted with success!`)
            setTimeout(() => {
                window.location = '/'
            }, 2000)
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div
            onClick={onClose}
            className={`flex fixed inset-0 justify-center items-center transition-colors ${open ? 'visible bg-black/20' : 'invisible'}`}>
            <div
            onClick={(event) => event.stopPropagation()}
            className={`bg-white rounded px-5 py-3 space-y-3 transition-all ${open ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}>
                <button
                onClick={onClose}
                className='absolute top-0 right-2 text-xl'>x</button>
                <div className='text-xl font-semibold'>
                    {children}
                </div>
                <div className='flex justify-center text-orange-500'>
                    <MdDeleteForever className='text-[5rem]' />
                </div>
                <button
                    onClick={() => deleteProduct()}
                    className='w-full bg-orange-500 hover:bg-orange-400 text-white rounded py-2 font-mono'>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default DeletePopUp
