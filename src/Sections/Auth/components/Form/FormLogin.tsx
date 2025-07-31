'use client'
import { LoadingComponents } from '@/components/loading/LoadingComponent'
import { validateEmail } from '@/helpers/ValidateEmail/validateEmail'
import { webApiServices } from '@/services/webApiServices'
import { enqueueSnackbar } from 'notistack'
import React from 'react'
import { Box, Button, IconButton, Spinner, TextField } from '@radix-ui/themes'
import { BookmarkIcon, DotsHorizontalIcon, EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons'

const FormLogin = () => {
    const [showPassword, setShowPassword] = React.useState(false)

    const [formValue, setFormValue] = React.useState({
        email: '',
        password: ''
    })

    const [isLoading, setIsLoading] = React.useState(false)
    const [isError, setIsError] = React.useState(false)
    const [messageError, setMessageError] = React.useState('')


    const validateForm = (e: React.FormEvent) => {
        e.preventDefault()
        if (!formValue.email || !formValue.password) {
            enqueueSnackbar('Todos los campos son obligatorios', { variant: 'error' })
            setIsError(true)
            setMessageError('Todos los campos son obligatorios')
            setIsLoading(false)
            return false;
        }
        return true;
    }

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        const isValid = validateForm(e)
        if (!isValid) return;
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
        <div className='w-full bg-gray-50 rounded-2xl p-2'>

            {isLoading && <LoadingComponents />}
            {isError && <div className='text-red-500 text-center'>
                {messageError}
            </div>}
            <form className='flex flex-col gap-4 bg-white p-2 rounded-2xl' onSubmit={handleLogin}>

                <Box maxWidth="100%">
                    <TextField.Root
                        size="3"
                        placeholder="Correo Eléctronico"
                        value={formValue.email}
                        onChange={(e) => setFormValue({ ...formValue, email: e.target.value })}
                    />
                    {(isError && (formValue.email.length < 1) || (formValue.email.length > 2 && !validateEmail(formValue.email))) &&
                        <p className='text-red-500 text-xs'>Correo electrónico es obligatorio o correo electrónico es inválido</p>
                    }
                </Box>
                <Box maxWidth="100%">
                    <TextField.Root
                        size="3"
                        type={showPassword ? "text" : "password"}
                        placeholder="Contraseña"
                        value={formValue.password}
                        onChange={(e) => setFormValue({ ...formValue, password: e.target.value })}>
                        <TextField.Slot pr="3" side="right" >
                            {showPassword ? (
                                <IconButton size="2" variant="ghost" onClick={(e: React.MouseEvent) => { e.preventDefault(); setShowPassword(false) }}>
                                    <EyeOpenIcon height="16" width="16" />
                                </IconButton>
                            ) : (
                                <IconButton size="2" variant="ghost" onClick={(e: React.MouseEvent) => { e.preventDefault(); setShowPassword(true) }}>
                                    <EyeClosedIcon height="16" width="16" />
                                </IconButton>
                            )}
                        </TextField.Slot>
                    </TextField.Root>
                </Box>
                <div className='flex flex-col gap-2'>
                    <Button variant="surface" size="3" className="w-full" type="submit">
                        {isLoading && <Spinner loading={isLoading} />}
                        Iniciar Sesión
                    </Button>
                    <Button variant="outline" size="3" className="w-full" type="submit">¿Olvidaste tu contraseña?</Button>
                </div>
            </form >
        </div >

    )
}

export default FormLogin