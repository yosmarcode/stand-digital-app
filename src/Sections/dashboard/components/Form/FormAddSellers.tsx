'use client'
import { Box, Button, Flex, TextArea, TextField } from '@radix-ui/themes'
import React, { Suspense } from 'react'
import { webApiServices } from '@/services/webApiServices'
import { enqueueSnackbar } from 'notistack'
import { ICategory } from '@/Sections/sellers/models'
import { LoadingComponents } from '@/components/loading/LoadingComponent'
import userStore from '@/guards/userstore'
import { ISellers } from '@/Sections/sellers/models'

const FormAddSellers = () => {
    const user_id = userStore?.user?.id
    const [formValue, setFormValue] = React.useState<ISellers>({
        id: "",
        name_sellers: "",
        descriptions: "",
        id_category: "",
        id_user: user_id as string,
        id_account: "",
        active: true,
        id_contry: "CL",
    })
    const [isLoading, setIsLoading] = React.useState(false)
    const [isError, setIsError] = React.useState(false)
    const [listCategory, setListCategory] = React.useState<ICategory[]>([])
    const [selectedCategory, setCategoryCategory] = React.useState<string>("")

    const getListCategory = async () => {
        setIsLoading(true)
        const { data, error } = await webApiServices.getListCategoryServices()
        setIsLoading(false)
        if (error) {
            console.log(error)
            enqueueSnackbar('Error: ' + error.message, { variant: 'error' })
            return;
        }
        if (data) {
            setListCategory(data)
        }
    }


    React.useEffect(() => {
        if (!user_id) return;
        //TODO: obtener lista de categorias
        getListCategory()
    }, [user_id])

    const handleGetIdAccount = async (user_id: string) => {
        const idAccount = await webApiServices.getIdAccountServices(user_id)
        console.log(idAccount)
        setFormValue({ ...formValue, id_account: idAccount })
    }

    React.useEffect(() => {
        //asigno id_account
        handleGetIdAccount(user_id as string)
    }, [user_id])

    React.useEffect(() => {
        if (selectedCategory) {
            setFormValue((prev) => ({ ...prev, id_category: selectedCategory }))
        }
    }, [selectedCategory])


    const validateForm = () => {
        if (formValue.name_sellers.length < 1) {
            enqueueSnackbar('Nombre es obligatorio', { variant: 'error' })
            setIsLoading(false)
            setIsError(true)
            return false
        }
        if (formValue.descriptions.length < 1) {
            enqueueSnackbar('Descripción es obligatoria', { variant: 'error' })
            setIsLoading(false)
            setIsError(true)
            return false
        }
        if (selectedCategory.length < 1) {
            enqueueSnackbar('Categoria es obligatoria', { variant: 'error' })
            setIsLoading(false)
            setIsError(true)
            return false
        }
        setIsError(false)
        return true
    }


    const handleResetForm = () => {
        setFormValue({
            id: "",
            name_sellers: "",
            descriptions: "",
            id_category: "",
            id_user: user_id as string,
            id_account: "",
            active: true,
            id_contry: "CL",
        })
    }


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        const isValid = validateForm()
        if (!isValid) return;
        const { error } = await webApiServices.createSellersServices(formValue)
        setIsLoading(false)
        if (error) {
            console.log(error)
            enqueueSnackbar('Error: ' + error.message, { variant: 'error' })
            return;
        }
        enqueueSnackbar('Sellers registrado correctamente', { variant: 'success' })
        handleResetForm()

    }


    return (
        <div className='pt-4'>
            <Suspense fallback={<LoadingComponents />}>
                {isLoading && <LoadingComponents />}

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
                            <TextArea
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
                            <select
                                value={selectedCategory}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategoryCategory(e.target.value)}
                                className="w-full mt-1 p-2 border rounded-md"
                            >
                                <option value="">Selecciona una categoria</option>
                                {listCategory.map((category: ICategory) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name_category}
                                    </option>
                                ))}
                            </select>
                            {isError && (selectedCategory.length < 1) &&
                                <p className='text-red-500 text-xs'>Categoria es obligatoria</p>
                            }
                        </Box>
                        <Box maxWidth="100%" pt="4" mb="4" >
                            <Button variant="solid" size="3" type="submit" disabled={isLoading}>Crear</Button>
                        </Box>

                    </Flex>
                </form>
            </Suspense>
        </div >
    )
}

export default FormAddSellers