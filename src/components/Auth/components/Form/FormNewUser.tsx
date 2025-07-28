
'use client'
import { LoadingComponents } from '@/components/loading/LoadingComponent'
import { validateEmail } from '@/helpers/ValidateEmail/validateEmail'
import { supabase } from '@/instegrations/supabase'
import { enqueueSnackbar } from 'notistack'
import React from 'react'
import { Form } from 'react-bootstrap'

const FormNewUser = () => {

    const [formValue, setFormValue] = React.useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [isLoading, setIsLoading] = React.useState(false)
    const [isError, setIsError] = React.useState(false)
    const [messageError, setMessageError] = React.useState('')



    const validateForm = (e: React.FormEvent) => {
        e.preventDefault()

        if (!formValue.name || !formValue.lastName || !formValue.email || !formValue.password || !formValue.confirmPassword) {
            enqueueSnackbar('Todos los campos son obligatorios', { variant: 'error' })
            setIsError(true)
            setMessageError('Todos los campos son obligatorios')
            setIsLoading(false)
            return false;
        }

        if (formValue.password !== formValue.confirmPassword) {
            enqueueSnackbar('Las contraseñas no coinciden', { variant: 'error' })
            setIsError(true)
            setMessageError('Las contraseñas no coinciden')
            setIsLoading(false)
            return false;
        }

        return true;
    }

    const handleRegisterProfile = async (user_id: string) => {
        const { error } = await supabase.from('account').insert({
            id_user: user_id,
            names: formValue.name + ' ' + formValue.lastName,
            email: formValue.email,
            active: true
        })
        if (error) {
            console.log(error)
            enqueueSnackbar('Error: ' + error.message, { variant: 'error' })
            setIsError(true)
            setMessageError(error.message)
            setIsLoading(false)
        }
        if (!error) {
            // enqueueSnackbar('Perfil registrado correctamente', { variant: 'success' })
            setIsLoading(false)
            handleResetForm()
        }
    }



    const handleRegisterByUser = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setIsError(false)

        const isValid = validateForm(e)
        if (!isValid) return;

        try {
            const { data, error } = await supabase.auth.signUp({
                email: formValue.email,
                password: formValue.password,
                options: {
                    data: {
                        full_name: formValue.name + ' ' + formValue.lastName
                    }
                }
            })
            console.log('data ==>', data, error)
            if (error) {
                console.log(error)
                enqueueSnackbar('Error: ' + error.message, { variant: 'error' })
                setIsError(true)
                setMessageError(error.message)
                setIsLoading(false)
                return;
            }

            if (data) {
                enqueueSnackbar('Usuario registrado correctamente', { variant: 'success' })
                if (data.user?.id) {
                    handleRegisterProfile(data.user?.id as string)
                }
                setTimeout(() => {
                    handleResetForm()
                    setIsLoading(false)
                }, 1000)
                return;
            }
        } catch (error: Error | unknown) {
            if (error instanceof Error) {
                console.log(error)
                enqueueSnackbar('Error: ' + error.message, { variant: 'error' })
                setIsError(true)
                setMessageError(error.message)
                setIsLoading(false)
            }
        }

    }

    const handleResetForm = () => {
        setFormValue({
            name: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    return (
        <div className='w-full bg-gray-50 rounded-4'>
            {isLoading && <LoadingComponents />}
            {isError && <div className='text-red-500 text-center'>
                {messageError}
            </div>}
            <div className='flex flex-col gap-2 text-start p-4'>
                <h1 className='text-2xl font-bold text-black'>Registro</h1>
                <p className='text-gray-500 text-md'>Registrate para poder iniciar sesión</p>
            </div>
            <form onSubmit={handleRegisterByUser} className='flex flex-col gap-4 bg-white p-4 rounded-xl' >
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
                <Form.Floating className="mb-1">
                    <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        placeholder="name@example.com"
                        value={formValue.name}
                        onChange={(e) => setFormValue({ ...formValue, name: e.target.value })}
                        isInvalid={(isError && formValue.name.length < 1)}
                    />
                    {(isError && formValue.name.length < 1) && <Form.Control.Feedback type="invalid">
                        <p>Nombre es obligatorio</p>
                    </Form.Control.Feedback>}
                    <label htmlFor="floatingInputCustom">Nombres</label>
                </Form.Floating>
                <Form.Floating className="mb-1">
                    <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        placeholder="name@example.com"
                        value={formValue.lastName}
                        onChange={(e) => setFormValue({ ...formValue, lastName: e.target.value })}
                        isInvalid={(isError && formValue.lastName.length < 1)}
                    />
                    {(isError && formValue.lastName.length < 1) && <Form.Control.Feedback type="invalid">
                        <p>Apellido es obligatorio</p>
                    </Form.Control.Feedback>}
                    <label htmlFor="floatingInputCustom">Apellidos</label>
                </Form.Floating>




                <div className='flex flex-row gap-2 w-full'>
                    <Form.Floating className="mb-1 w-full">
                        <Form.Control
                            id="floatingInputCustom"
                            type="password"
                            placeholder="****"
                            className='w-full'
                            value={formValue.password}
                            onChange={(e) => setFormValue({ ...formValue, password: e.target.value })}
                            isInvalid={isError && formValue.password.length < 1}
                        />
                        {isError && formValue.password.length < 1 && <Form.Control.Feedback type="invalid">
                            <p>Contraseña es obligatoria</p>
                        </Form.Control.Feedback>}
                        <label htmlFor="floatingInputCustom">Contraseña</label>
                    </Form.Floating>
                    <Form.Floating className="mb-1 w-full">
                        <Form.Control
                            id="floatingInputCustom"
                            type="password"
                            placeholder="****"
                            className='w-full'
                            value={formValue.confirmPassword}
                            onChange={(e) => setFormValue({ ...formValue, confirmPassword: e.target.value })}
                            isInvalid={isError && formValue.confirmPassword.length < 1}
                        />
                        {isError && formValue.confirmPassword.length < 1 && <Form.Control.Feedback type="invalid">
                            <p>Confirmar Contraseña es obligatoria</p>
                        </Form.Control.Feedback>}
                        <label htmlFor="floatingInputCustom">Confirmar Contraseña</label>
                    </Form.Floating>
                </div>
                <div className='flex flex-col gap-2'>
                    <button
                        type="submit"
                        disabled={isLoading || (formValue.password !== formValue.confirmPassword) || (validateEmail(formValue.email) === false)}
                        className='bg-blue-500 text-white p-2 rounded-2'>
                        {isLoading ? <LoadingComponents /> : 'Registrarse'}
                    </button>
                </div>
            </form >
        </div >
    )
}

export default FormNewUser