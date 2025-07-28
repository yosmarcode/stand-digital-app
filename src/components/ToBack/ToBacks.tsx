'use client'
import React from 'react'
import Image from 'next/image'
import ArrowLeft from '@/assets/icons/ArrowLeft.svg'

const ToBacks = () => {
    const handClick = () => {
        window.history.back();
    }
    return (
        <div className='flex items-center gap-2 cursor-pointer transition-all duration-300 hover:bg-blue-200 p-2 rounded-xl w-36 h-12' onClick={handClick}>
            <Image src={ArrowLeft} alt="" width={200} height={200} className='w-6 h-6' />
            <span className='text-black'>Regresar</span>
        </div>
    )
}

export default ToBacks