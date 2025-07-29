'use client'
import { LoadingComponents } from '@/components/loading/LoadingComponent'
import { validateEmail } from '@/helpers/ValidateEmail/validateEmail'
import { webApiServices } from '@/services/webApiServices'
import { enqueueSnackbar } from 'notistack'
import React from 'react'
import { Form } from 'react-bootstrap'

const FormLogin = () => {

    const [formValue, setFormValue] = React.useState({
        email: '',
        password: ''
    })

    const [isLoading, setIsLoading] = React.useState(false)
    const [isError, setIsError] = React.useState(false)
    const [messageError, setMessageError] = React.useState('')

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setIsError(false)
        const { error } = await webApiServices.getLoginServices(formValue.email, formValue.password)
        if (error) {
            console.log(error)
            enqueueSnackbar('Error: ' + error.message, { variant: 'error' })
            setIsError(true)
            setMessageError(error.message)
            setIsLoading(false)
        }
        if (!error) {
            setIsLoading(false)
            handleResetForm()
            setTimeout(() => {
                window.location.href = '/'
            }, 1000)
        }
    }

    const handleResetForm = () => {
        setFormValue({
            email: '',
            password: ''
        })
    }

    return (
        <div className='w-full bg-gray-50 rounded-4 p-2'>

            {isLoading && <LoadingComponents />}
            {isError && <div className='text-red-500 text-center'>
                {messageError}
            </div>}
            <form action="" className='flex flex-col gap-4 bg-white p-2 rounded-2' onSubmit={handleLogin}>
                <Form.Floating className="mb-1">
                    <Form.Control
                        id="floatingInputCustom"
                        type="email"
                        placeholder="name@example.com"
                        value={formValue.email}
                        onChange={(e) => setFormValue({ ...formValue, email: e.target.value })}
                        isInvalid={(isError && (formValue.email.length < 1) || (formValue.email.length > 2 && !validateEmail(formValue.email)))}
                    />
                    {(isError && (formValue.email.length < 1) || (formValue.email.length > 2 && !validateEmail(formValue.email))) && <Form.Control.Feedback type="invalid">
                        <p>Correo electrónico es obligatorio o correo electrónico es inválido</p>
                    </Form.Control.Feedback>}
                    <label htmlFor="floatingInputCustom">Correo Eléctronico</label>
                </Form.Floating>
                <Form.Floating>
                    <Form.Control
                        id="floatingPasswordCustom"
                        type="password"
                        placeholder="Password"
                        value={formValue.password}
                        onChange={(e) => setFormValue({ ...formValue, password: e.target.value })}
                    />
                    <label htmlFor="floatingPasswordCustom">Contraseña</label>

                </Form.Floating>
                <div className='flex flex-col gap-2'>
                    <button type="submit" className='bg-blue-500 text-white p-2 rounded-2'>Iniciar Sesión</button>
                    <button type="submit" className='text-blue-500 hover:text-blue-600 hover:cursor-pointer rounded-md p-1 '>¿Olvidaste tu contraseña?</button>
                </div>
            </form >
        </div>

    )
}

export default FormLogin