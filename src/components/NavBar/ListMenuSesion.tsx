'use client'
import { supabase } from '@/instegrations/supabase';
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import { Button, DropdownMenu } from '@radix-ui/themes';
import { LoadingComponents } from '../loading/LoadingComponent';
import userStore from '@/guards/userstore';
const ListMenuSesion = () => {
    const nameUser = userStore?.user?.user_metadata.full_name
    const [isLoading, setIsLoading] = React.useState(false)
    const handsignOut = async () => {
        setIsLoading(true)
        const { error } = await supabase.auth.signOut()
        setIsLoading(false)
        if (error) {
            console.log(error)
            enqueueSnackbar('Error: ' + error.message, { variant: 'error' })
            return;
        }
        window.location.href = '/auth'
    }

    return (
        <div className='flex flex-row gap-2'>
            {isLoading && <LoadingComponents />}

            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <Button variant="solid" size="2">
                        {nameUser}
                        <DropdownMenu.TriggerIcon />
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                    <DropdownMenu.Item onClick={() => { window.location.href = '/profile' }}>Perfil</DropdownMenu.Item>
                    <DropdownMenu.Item onClick={handsignOut}>Cerrar Sesión</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>


        </div>
    )
}

export default ListMenuSesion