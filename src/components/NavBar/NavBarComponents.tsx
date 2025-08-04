
"use client"
import React from 'react'
import userStore from '@/guards/userstore'
import ListMenuSesion from './ListMenuSesion'
const NavBarComponents = () => {
    const [isClient, setIsClient] = React.useState(false)
    React.useEffect(() => {
        setIsClient(true)
    }, [])
    const user = userStore?.user
    return (
        <div className='fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-blue-950 z-50'>

            <span className='text-white font-bold'>{process.env.NEXT_PUBLIC_TITLE_PROJECT}</span>
            {isClient && user && <ListMenuSesion />}


        </div>
    )
}

export default NavBarComponents