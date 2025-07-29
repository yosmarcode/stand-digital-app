'use client'
import React from 'react'
import { Form } from 'react-bootstrap'

const FormChangePassword = () => {
    return (
        <div className='bg-blue-50 rounded-xl p-3 mt-2'>
            <div className='pt-2'>
                <p className='text-xl text-black'>Cambio Contraseña</p>
            </div>
            <Form.Floating className="mb-1">
                <Form.Control
                    id="floatingInputCustom-password"
                    type="password"
                    placeholder="Password"
                />
                <label htmlFor="floatingInputCustom-password">Contraseña</label>
            </Form.Floating>
            <Form.Floating className="mb-1">
                <Form.Control
                    id="floatingInputCustom-password"
                    type="password"
                    placeholder="Password"
                />
                <label htmlFor="floatingInputCustom-password">Confirmar Contraseña</label>
            </Form.Floating>
        </div>
    )
}

export default FormChangePassword