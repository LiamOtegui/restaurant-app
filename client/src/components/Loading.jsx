import React from 'react'
import { TbTruckLoading } from "react-icons/tb";

const Loading = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-3 bg-orange-400 pt-[3rem] pb-[2rem] px-[2rem] rounded-[1rem]'>
            <div className='text-[5rem] animate-bounce text-white'>
                <TbTruckLoading />
            </div>
            <div className='text-2xl text-white font-bold'>
                Products are Loading!
            </div>
        </div>
    )
}

export default Loading
