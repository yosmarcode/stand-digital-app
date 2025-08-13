import React from 'react'
import { Box, Button, TextField } from '@radix-ui/themes'
import { enqueueSnackbar } from 'notistack'
import { webApiServices } from '@/services/webApiServices'
import { validateEmail } from '@/helpers/ValidateEmail/validateEmail'

const FormAddSocialNetWorks = ({ socialNetworks, idSeller, fetchSocialNetworks }: { socialNetworks: any[], idSeller: number, fetchSocialNetworks: (idSeller: number) => void }) => {
    const [formValue, setFormValue] = React.useState<{
        whatsapp: string,
        tiktok: string,
        instagram: string,
        facebook: string,
        page_oficial: string,
        email_sellers: string
    }>({
        whatsapp: '',
        tiktok: '',
        instagram: '',
        facebook: '',
        page_oficial: '',
        email_sellers: '',
        })
    const [isError, setIsError] = React.useState(false)
    const [messageError, setMessageError] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)
    const [isUpdate, setIsUpdate] = React.useState(false)

    const validateForm = (e: React.FormEvent): boolean => {
        e.preventDefault()
        if (formValue.whatsapp.length > 0 && !formValue.whatsapp.includes('+')) {
            enqueueSnackbar('Formato de whatsapp es inválido', { variant: 'error' })
            setIsError(true)
            setMessageError('Todos los campos son obligatorios')
            setIsLoading(false)
            return false;
        }


        if (formValue.tiktok.length > 0 && !formValue.tiktok.includes('@')) {
            enqueueSnackbar('Formato de tiktok es inválido', { variant: 'error' })
            setIsError(true)
            setMessageError('Todos los campos son obligatorios')
            setIsLoading(false)
            return false;
        }


        if (formValue.instagram.length > 0 && !formValue.instagram.includes('@')) {
            enqueueSnackbar('Formato de instagram es inválido', { variant: 'error' })
            setIsError(true)
            setMessageError('Todos los campos son obligatorios')
            setIsLoading(false)
            return false;
        }

        if (formValue.facebook.length > 0 && !formValue.facebook.includes('@')) {
            enqueueSnackbar('Formato de facebook es inválido', { variant: 'error' })
            setIsError(true)
            setMessageError('Todos los campos son obligatorios')
            setIsLoading(false)
            return false;
        }

        if (formValue.page_oficial.length > 0 && (!formValue.page_oficial.includes('https://') || !formValue.page_oficial.includes('http://'))) {
            enqueueSnackbar('Formato de pagina oficial es inválido', { variant: 'error' })
            setIsError(true)
            setMessageError('Todos los campos son obligatorios')
            setIsLoading(false)
            return false;
        }
        if (formValue.email_sellers.length > 0 && !validateEmail(formValue.email_sellers)) {
            enqueueSnackbar('Formato de email es inválido', { variant: 'error' })
            setIsError(true)
            setMessageError('Todos los campos son obligatorios')
            setIsLoading(false)
            return false;
        }
        return true;
    }

    const handleNewSocialNetwork = async (e: React.FormEvent) => {

        e.preventDefault()
        if (!validateForm(e)) return
        setIsLoading(true)
        setIsError(false)
        const error = await webApiServices.SaveSocialNetworkServices(idSeller, formValue.whatsapp, formValue.tiktok, formValue.instagram, formValue.facebook, formValue.page_oficial, formValue.email_sellers)
        if (!error) {
            enqueueSnackbar('Error al guardar social networks', { variant: 'error' })
            setIsLoading(false)
            return
        }
        enqueueSnackbar('Se ha guardado correctamente las redes sociales', { variant: 'success' })
        setIsLoading(false)
        // refrescar la lista de redes sociales
        fetchSocialNetworks(idSeller)
    }

    const handleUpdateSocialNetwork = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validateForm(e)) return
        setIsLoading(true)
        setIsError(false)
        const error = await webApiServices.updateSocialNetworkServices(socialNetworks[0]?.id, formValue.whatsapp, formValue.tiktok, formValue.instagram, formValue.facebook, formValue.page_oficial, formValue.email_sellers)
        if (!error) {
            enqueueSnackbar('Error al actualizar', { variant: 'error' })
            setIsLoading(false)
            return
        }
        enqueueSnackbar('Actualizado correctamente', { variant: 'success' })
        setIsLoading(false)
        // refrescar la lista de redes sociales
        fetchSocialNetworks(idSeller)
    }

    React.useEffect(() => {
        if (socialNetworks.length > 0) {
            setIsUpdate(true)
            setFormValue({
                whatsapp: socialNetworks[0].whatsapp ?? '',
                tiktok: socialNetworks[0].tiktok ?? '',
                instagram: socialNetworks[0].instagram ?? '',
                facebook: socialNetworks[0].facebook ?? '',
                page_oficial: socialNetworks[0].page_oficial ?? '',
                email_sellers: socialNetworks[0].email_sellers ?? '',
            })
        }
    }, [socialNetworks])

    return (
        <form className='flex flex-col gap-4'>
 
            <Box maxWidth="100%">
                <TextField.Root
                    size="3"
                    placeholder="+6281234567890"
                    value={formValue.whatsapp}
                    onChange={(e) => setFormValue({ ...formValue, whatsapp: e.target.value })}
                />
                {(isError && (formValue.whatsapp.length > 1)) &&
                    <p className='text-red-500 text-xs'>Whatsapp es obligatorio o whatsapp es inválido</p>
                }
            </Box>
            <Box maxWidth="100%">
                <TextField.Root
                    size="3"
                    placeholder="@tiktok"
                    value={formValue.tiktok}
                    onChange={(e) => setFormValue({ ...formValue, tiktok: e.target.value })}
                />
                {(isError && (formValue.tiktok.length > 1)) &&
                    <p className='text-red-500 text-xs'>Tiktok es obligatorio o tiktok es inválido</p>
                }
            </Box>
            <Box maxWidth="100%">
                <TextField.Root
                    size="3"
                    placeholder="@instagram"
                    value={formValue.instagram}
                    onChange={(e) => setFormValue({ ...formValue, instagram: e.target.value })}
                />
                {(isError && (formValue.instagram.length > 1)) &&
                    <p className='text-red-500 text-xs'>Instagram es obligatorio o instagram es inválido</p>
                }
            </Box>
            {/* <Box maxWidth="100%">
                <TextField.Root
                    size="3"
                    placeholder="@facebook"
                    value={formValue.facebook}
                    onChange={(e) => setFormValue({ ...formValue, facebook: e.target.value })}
                />
                {(isError && (formValue.facebook.length > 1)) &&
                    <p className='text-red-500 text-xs'>Facebook es obligatorio o facebook es inválido</p>
                }
            </Box> */}
            <Box maxWidth="100%">
                <TextField.Root
                    size="3"
                    placeholder="Correo Electronico"
                    value={formValue.email_sellers}
                    onChange={(e) => setFormValue({ ...formValue, email_sellers: e.target.value })}
                />
                {(isError && (formValue.email_sellers.length > 1 && !validateEmail(formValue.email_sellers))) &&
                    <p className='text-red-500 text-xs'>Email es obligatorio o email es inválido</p>
                }
            </Box>
            <Box maxWidth="100%">
                <TextField.Root
                    size="3"
                    placeholder="Pagina Oficial"
                    value={formValue.page_oficial}
                    onChange={(e) => setFormValue({ ...formValue, page_oficial: e.target.value })}
                />
                {(isError && (formValue.page_oficial.length > 1)) &&
                    <p className='text-red-500 text-xs'>Pagina Oficial es obligatorio o pagina oficial es inválido</p>
                }
            </Box>
            {isUpdate ? (
                <Button type="button" onClick={handleUpdateSocialNetwork} disabled={isLoading} loading={isLoading}>
                    Actualizar
                </Button>
            ) : (
                <Button type="button" onClick={handleNewSocialNetwork} disabled={isLoading} loading={isLoading}>
                    Guardar
                </Button>
            )}
        </form>
    )
}

export default FormAddSocialNetWorks