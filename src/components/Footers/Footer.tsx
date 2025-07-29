import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white p-4 flex flex-col justify-evenly">
            <p className='text-sm text-gray-700'>Stand Digital © {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer