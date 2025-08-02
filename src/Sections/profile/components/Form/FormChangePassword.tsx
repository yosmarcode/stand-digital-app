'use client'
import { Box, Button, Flex, Spinner, TextField } from '@radix-ui/themes'
import React from 'react'

const FormChangePassword = () => {
    const [isLoading, setIsLoading] = React.useState(false)


    const handleSubmit = () => {
        setIsLoading(true)
    }
    return (
        <div className='bg-blue-50 rounded-xl p-3 mt-2'>
            <form onSubmit={handleSubmit}>
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
                    <div className='flex items-center justify-center pt-2'>
                        <Button
                            size="3"
                            variant="outline"
                            onClick={handleSubmit}
                        >
                            {isLoading ? <Spinner loading={isLoading} /> : 'Actualizar'}
                        </Button>
                    </div>
                </Flex>
            </form>
        </div>
    )
}

export default FormChangePassword