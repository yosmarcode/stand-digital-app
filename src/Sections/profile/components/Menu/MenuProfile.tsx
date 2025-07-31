import React from 'react'

const MenuProfile = () => {
    return (
        <div className='flex flex-col'>
            <div className='text-xl font-bold'>Menu</div>
            <ul className='flex flex-col gap-y-2 pt-6 p-2'>
                <li className='bg-blue-50 hover:bg-blue-200 p-2 rounded-xl cursor-pointer transition-all duration-300 text-blue-500 hover:text-blue-600'>Añadir Negocio</li>
                <li className='bg-blue-50 hover:bg-blue-200 p-2 rounded-xl cursor-pointer transition-all duration-300 text-blue-500 hover:text-blue-600'>Añadir Producto</li>
            </ul>
        </div>
    )
}

export default MenuProfile