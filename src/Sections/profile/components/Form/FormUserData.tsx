'use client'
import { IUser } from '@/Sections/Auth/models'
import { validateEmail } from '@/helpers/ValidateEmail/validateEmail'
import { Box, Button, Spinner, TextField, Flex } from '@radix-ui/themes'
import React from 'react'

const FormUserData = ({ userData }: { userData: IUser | undefined }) => {
    const [isError, setIsError] = React.useState(false)
    const [formValue, setFormValue] = React.useState({
        email: userData?.user_metadata?.email ?? '',
        name: userData?.user_metadata?.full_name ?? '',
        phone: userData?.phone ?? '',
    })
    const [isLoading, setIsLoading] = React.useState(false)

    return (
        <div className='bg-blue-50 rounded-xl p-3 mt-2 gap-2'>


            <Flex direction="column" gap="3">
                <Box maxWidth="100%">
                    <TextField.Root
                        size="3"
                        placeholder="Correo Eléctronico"
                        value={formValue.email}
                        onChange={(e) => setFormValue({ ...formValue, email: e.target.value })}
                    />
                    {(isError && (formValue.email.length < 1) || (formValue.email.length > 2 && !validateEmail(formValue.email))) &&
                        <p>Correo electrónico es obligatorio o correo electrónico es inválido</p>
                    }
                </Box>
                <Box maxWidth="100%">
                    <TextField.Root
                        size="3"
                        placeholder="Nombre"
                        value={formValue.name}
                        onChange={(e) => setFormValue({ ...formValue, name: e.target.value })}
                    />
                    {(isError && (formValue.name.length < 1)) &&
                        <p>Nombre es obligatorio</p>
                    }
                </Box>

                <Box maxWidth="100%">
                    <TextField.Root
                        size="3"
                        placeholder="Teléfono"
                        value={formValue.phone}
                        onChange={(e) => setFormValue({ ...formValue, phone: e.target.value })}
                    />
                    {(isError && (formValue.phone.length < 1)) &&
                        <p>Teléfono es obligatorio</p>
                    }
                </Box>
                <div className='flex items-center justify-center pt-2'>
                    <Button
                        type="submit"
                        size="3"
                        variant="outline">
                        {isLoading && <Spinner loading={isLoading} />} Actualizar
                    </Button>
                </div>
            </Flex>
        </div>
    )
}

export default FormUserData