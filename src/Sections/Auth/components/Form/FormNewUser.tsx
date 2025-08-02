
'use client'
import { LoadingComponents } from '@/components/loading/LoadingComponent'
import { validateEmail } from '@/helpers/ValidateEmail/validateEmail'
import { webApiServices } from '@/services/webApiServices'
import { Box, Button, Flex, TextField } from '@radix-ui/themes'
import { enqueueSnackbar } from 'notistack'
import React from 'react'

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
        const { error } = await webApiServices.getRegisterProfileServices(user_id, formValue.name, formValue.lastName, formValue.email)
        if (error) {
            console.log(error)
            enqueueSnackbar('Error: ' + error.message, { variant: 'error' })
            setIsError(true)
            setMessageError(error.message)
            setIsLoading(false)
        }
        if (!error) {
            enqueueSnackbar('Perfil registrado correctamente', { variant: 'success' })
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
            const { data, error } = await webApiServices.getNewUserServices(formValue.email, formValue.password, formValue.name, formValue.lastName)

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
        <div className='w-full bg-gray-50 rounded-xl'>
            {isLoading && <LoadingComponents />}
            {isError && <div className='text-red-500 text-center p-2'>
                {messageError}
            </div>}
            <div className='flex flex-col gap-2 text-start p-4'>
                <h1 className='text-2xl font-bold text-black'>Registro</h1>
                <p className='text-gray-500 text-md'>Registrate para poder iniciar sesión</p>
            </div>
            <form onSubmit={handleRegisterByUser} className='flex flex-col gap-4 bg-white p-4 rounded-xl' >
                <Box maxWidth="100%">
                    <TextField.Root
                        size="3"
                        placeholder="Correo Eléctronico"
                        value={formValue.email}
                        onChange={(e) => setFormValue({ ...formValue, email: e.target.value })}
                    />
                    {(isError && (formValue.email.length < 1) || (formValue.email.length > 2 && !validateEmail(formValue.email))) &&
                        <p className='text-red-500 text-center p-2 text-sm'>Correo electrónico es obligatorio o correo electrónico es inválido</p>
                    }
                </Box>
                <Box maxWidth="100%">
                    <TextField.Root
                        size="3"
                        placeholder="Nombres"
                        value={formValue.name}
                        onChange={(e) => setFormValue({ ...formValue, name: e.target.value })}
                    />
                    {(isError && formValue.name.length < 1) && <p className='text-red-500 text-center p-2 text-sm'>Nombre es obligatorio</p>}
                </Box>
                <Box maxWidth="100%">
                    <TextField.Root
                        size="3"
                        placeholder="Apellidos"
                        value={formValue.lastName}
                        onChange={(e) => setFormValue({ ...formValue, lastName: e.target.value })}
                    />
                    {(isError && formValue.lastName.length < 1) && <p className='text-red-500 text-center p-2 text-sm'>Apellido es obligatorio</p>}
                </Box>

                <Flex gap="2" direction="row">
                    <Box maxWidth="100%" minWidth="50%">
                        <TextField.Root
                            size="3"
                            placeholder="Contraseña"
                            type="password"
                            value={formValue.password}
                            onChange={(e) => setFormValue({ ...formValue, password: e.target.value })}
                        />
                        {(isError && formValue.password.length < 1) && <p className='text-red-500 text-center p-2 text-sm'>Contraseña es obligatoria</p>}
                    </Box>
                    <Box maxWidth="100%" minWidth="50%">
                        <TextField.Root
                            size="3"
                            placeholder="Confirmar Contraseña"
                            type="password"
                            value={formValue.confirmPassword}
                            onChange={(e) => setFormValue({ ...formValue, confirmPassword: e.target.value })}
                        />
                        {(isError && formValue.confirmPassword.length < 1) && <p className='text-red-500 text-center p-2 text-sm'>Confirmar Contraseña es obligatoria</p>}
                    </Box>
                </Flex>
                <div className='flex flex-col gap-2'>
                    <Button
                        type="submit"
                        disabled={isLoading || (formValue.password !== formValue.confirmPassword) || (validateEmail(formValue.email) === false)}
                        size="3"
                        variant="outline">
                        {isLoading ? <LoadingComponents /> : 'Registrarse'}
                    </Button>
                </div>
            </form >
        </div >
    )
}

export default FormNewUser