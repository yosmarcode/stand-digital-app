import React from 'react'

const MenuProfile = () => {
    return (
        <div>
            <ul className='flex flex-col gap-2'>
                <li className='hover:bg-gray-200 p-2 rounded-xl cursor-pointer transition-all duration-300 text-black'>Perfil</li>
                <li className='hover:bg-gray-200 p-2 rounded-xl cursor-pointer transition-all duration-300 text-black'>Configuración</li>
                <li className='hover:bg-gray-200 p-2 rounded-xl cursor-pointer transition-all duration-300 text-black'>Historial</li>
            </ul>
        </div>
    )
}

export default MenuProfile