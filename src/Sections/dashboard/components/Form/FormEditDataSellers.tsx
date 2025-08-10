import { LoadingComponents } from '@/components/loading/LoadingComponent'
import { Box, Button, Flex, TextField } from '@radix-ui/themes'
import React, { Suspense } from 'react'
import { ICategory, ISellersList } from '@/Sections/sellers/models'
import { webApiServices } from '@/services/webApiServices'
import { enqueueSnackbar } from 'notistack'

const FormEditDataSellers = ({ detailsSeller, getDetailsSellerById }: { detailsSeller: ISellersList, getDetailsSellerById: (id_seller: number) => void }) => {
    const [formValue, setFormValue] = React.useState<{
        name_sellers: string
        descriptions: string
        wallpper_img: string
        logo_sellers: string
        id_category: { id: number, name_category: string }
        nicknames: string
    }>({ name_sellers: '', descriptions: '', wallpper_img: '', logo_sellers: '', id_category: { id: 0, name_category: '' }, nicknames: '' })

    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [isError, setIsError] = React.useState<boolean>(false)
    const [isMessage, setIsMessage] = React.useState<string>('')
    const [dataCategory, setDataCategory] = React.useState<any[]>([])


    const handGetListCategory = async () => {
        const { data, error } = await webApiServices.getListCategoryServices()
        if (error) {
            console.log(error)
            return false
        }
        if (data) {
            setDataCategory(data)
        }
    }

    const handleValiteForm = (): boolean => {
        if (formValue.name_sellers.length < 1) {
            setIsError(true)
            setIsMessage('El nombre es obligatorio')
            enqueueSnackbar('Error: El nombre es obligatorio', { variant: 'error' })
            return false
        }
        if (formValue.descriptions.length < 1) {
            setIsError(true)
            setIsMessage('La descripción es obligatoria')
            enqueueSnackbar('Error: La descripción es obligatoria', { variant: 'error' })
            return false
        }
        if (formValue.id_category.id < 1) {
            setIsError(true)
            setIsMessage('La categoría es obligatoria')
            enqueueSnackbar('Error: La categoría es obligatoria', { variant: 'error' })
            return false
        }
        if (formValue.nicknames.length < 1) {
            setIsError(true)
            setIsMessage('El nicknames es obligatorio')
            enqueueSnackbar('Error: El nicknames es obligatorio', { variant: 'error' })
            return false
        }
        if (!formValue.nicknames.includes('@')) {
            setIsError(true)
            setIsMessage('El nicknames debe de contener @')
            enqueueSnackbar('Error: El nicknames debe de contener @', { variant: 'error' })
            return false
        }
        setIsError(false)
        return true
    }




    React.useEffect(() => {
        handGetListCategory()
    }, [])

    React.useEffect(() => {
        if (!detailsSeller) return
        setFormValue({
            name_sellers: detailsSeller.name_sellers,
            descriptions: detailsSeller.descriptions, wallpper_img: detailsSeller.wallpper_img,
            logo_sellers: detailsSeller.logo_sellers,
            id_category: { id: Number(detailsSeller.idcategory), name_category: '' },
            nicknames: detailsSeller?.nicknames || ''
        })
    }, [detailsSeller])

    const handleSubmit = async (e: any) => {
        
        e.preventDefault()
        try {
            const isValid = handleValiteForm()
            if (!isValid) return;
            setIsLoading(true)
            const { error } = await webApiServices.updateDataSellerByUser(Number(detailsSeller?.id), formValue.name_sellers, formValue.descriptions, formValue?.id_category?.id?.toString(), formValue.nicknames)
            if (error) {
                console.log(error)
                enqueueSnackbar('Error: ' + error.message, { variant: 'error' })
                setIsLoading(false)
                return false
            }
            if (!error) {
                enqueueSnackbar('Datos actualizados correctamente', { variant: 'success' })
                setIsLoading(false)
                // REFRES DETAILS SELLER
                getDetailsSellerById(Number(detailsSeller?.id))
            }
        } catch (error: unknown) {
            const err = error as Error
            console.log(err)
            enqueueSnackbar('Error: ' + err.message, { variant: 'error' })
            setIsLoading(false)
        }
      

     

    }
    return (
        <div className='pt-4'>
            <Suspense fallback={<LoadingComponents />}>
                {isLoading && <LoadingComponents />}
                <div className='mb-2 pt-2 text-center'>
                    {isError && <p className='text-red-500 text-xs'>{isMessage}</p>}
                </div>
                <form onSubmit={handleSubmit}>
                    <Flex direction="column" gap="2" >
                        <Box maxWidth="100%">
                            <TextField.Root
                                size="3"
                                placeholder="Nombre del emprendimiento"
                                value={formValue.name_sellers}
                                onChange={(e) => setFormValue({ ...formValue, name_sellers: e.target.value })}
                            />
                            {isError && (formValue.name_sellers.length < 1) &&
                                <p className='text-red-500 text-xs'>Nombre es obligatorio</p>
                            }
                        </Box>
                        <Box maxWidth="100%">
                            <TextField.Root
                                size="3"
                                placeholder="Descripción del emprendimiento"
                                value={formValue.descriptions}
                                onChange={(e) => setFormValue({ ...formValue, descriptions: e.target.value })}
                            />
                            {isError && (formValue.descriptions.length < 1) &&
                                <p className='text-red-500 text-xs'>Descripción es obligatoria</p>
                            }
                        </Box>
                        <Box maxWidth="100%">
                            <TextField.Root
                                size="3"
                                placeholder="Nicknames"
                                value={formValue.nicknames}
                                onChange={(e) => setFormValue({ ...formValue, nicknames: e.target.value })}
                            />
                            {isError && (formValue.nicknames.length < 1) &&
                                <p className='text-red-500 text-xs'>Nicknames es obligatorio</p>
                            }
                        </Box>
                        <Box maxWidth="100%" className="w-full">

                            <select
                                value={formValue.id_category.id}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormValue({ ...formValue, id_category: { id: Number(e.target.value), name_category: '' } })}
                                className="w-full mt-1 p-2 border rounded-md"
                            >
                                <option value="">Todo</option>
                                {dataCategory.map((category: ICategory) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name_category}
                                    </option>
                                ))}
                            </select>


                        </Box>
                        <Box maxWidth="100%" className="w-full" pt="2">
                            <Button size="3" variant='outline' disabled={isLoading} >Actualizar</Button>
                        </Box>
                

                    </Flex>
                </form>
            </Suspense>
        </div>
    )
}

export default FormEditDataSellers