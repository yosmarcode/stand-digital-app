import { supabase } from '@/instegrations/supabase';
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const ListMenuSesion = () => {

    const handsignOut = async () => {
        const { error } = await supabase.auth.signOut()

        if (error) {
            console.log(error)
        }
        window.location.href = '/auth'
    }

    return (
        <DropdownButton id="dropdown-item-button" title="Cuenta">
            <Dropdown.Item as="button" onClick={() => { window.location.href = '/profile' }}>Perfil</Dropdown.Item>
            <Dropdown.Item as="button" onClick={handsignOut}>Cerrar Sesión</Dropdown.Item>
        </DropdownButton>
    )
}

export default ListMenuSesion