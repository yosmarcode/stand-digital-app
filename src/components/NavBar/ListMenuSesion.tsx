'use client'
import { supabase } from '@/instegrations/supabase';
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { LoadingComponents } from '../loading/LoadingComponent';
import userStore from '@/guards/userstore'
const ListMenuSesion = () => {
    const nameUser = userStore?.user.user_metadata.full_name

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
            <DropdownButton id="dropdown-item-button" title={nameUser || 'Cuenta'} >
                <Dropdown.Item as="button" onClick={() => { window.location.href = '/profile' }}>Perfil</Dropdown.Item>
                <Dropdown.Item as="button" onClick={handsignOut}>Cerrar Sesión</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default ListMenuSesion