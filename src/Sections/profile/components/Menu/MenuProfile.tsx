import React from 'react'
import userDefault from '@/assets/user-default.jpg'
import Image from 'next/image'
const MenuProfile = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex flex-col  mx-auto border-b-2 border-gray-200 p-2'>
                <div className='flex flex-col gap-x-2 items-center'>
                    <Image src={userDefault} alt="" width={200} height={200} className='rounded-full border-2 border-gray-200 w-32 h-32' />
                    <p className='text-xl text-black'>Yosmar Hinestroza</p>
                    <p className='text-gray-500 text-sm'>Desarrollador Web</p>
                </div>
            </div>
            <ul className='flex flex-col gap-2 pt-6'>
                <li className='bg-blue-50 hover:bg-blue-200 p-2 rounded-xl cursor-pointer transition-all duration-300 text-blue-500'>Añadir Negocio</li>
                <li className='bg-blue-50 hover:bg-blue-200 p-2 rounded-xl cursor-pointer transition-all duration-300 text-blue-500'>Añadir Producto</li>
            </ul>
        </div>
    )
}

export default MenuProfile