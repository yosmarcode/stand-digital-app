import React from 'react'
import ButtonComponent from './ui/ButtonComponent'

const Intro = () => {
    return (
        <div className='gap-4 flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold text-black'>Stand Digital</h1>
            <p className='text-gray-500 text-center'>Stand Digital es un sistema que permite registrar tu negocio en la plataforma digital, para que puedas vender tus productos y servicios en línea.</p>
            <ButtonComponent title="¿No tienes cuentas? " variant="outline" handClick={() => { console.log('Registro') }} />
        </div>
    )
}

export default Intro