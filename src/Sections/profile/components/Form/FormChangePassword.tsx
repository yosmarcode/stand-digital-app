'use client'
import { Box, Flex, TextField } from '@radix-ui/themes'
import React from 'react'

const FormChangePassword = () => {
    return (
        <div className='bg-blue-50 rounded-xl p-3 mt-2'>
            <div className='pt-2'>
                <p className='text-xl text-black'>Cambio Contraseña</p>
            </div>
            <Flex direction="column" gap="3">
                <Box maxWidth="100%">
                    <TextField.Root
                        size="3"
                        placeholder="Contraseña Actual"

                    />
                </Box>

                <Box maxWidth="100%">
                    <TextField.Root
                        size="3"
                        placeholder="Nueva Contraseña"
                    />
                </Box>
                <Box maxWidth="100%">
                    <TextField.Root
                        size="3"
                        placeholder="Confirme Contraseña"
                    />
                </Box>
            </Flex>

        </div>
    )
}

export default FormChangePassword