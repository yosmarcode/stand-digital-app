import { LoadingComponents } from '@/components/loading/LoadingComponent'
import { Box, Flex, TextField } from '@radix-ui/themes'
import React, { Suspense } from 'react'
import { ICategory, ISellersList } from '@/Sections/sellers/models'
import { webApiServices } from '@/services/webApiServices'

const FormEditDataSellers = ({ detailsSeller }: { detailsSeller: ISellersList }) => {
    const [formValue, setFormValue] = React.useState<{
        name_sellers: string
        descriptions: string
        wallpper_img: string
        logo_sellers: string
        id_category: { id: number, name_category: string }
    }>({ name_sellers: '', descriptions: '', wallpper_img: '', logo_sellers: '', id_category: { id: 0, name_category: '' } })

    const [isLoading, setIsLoading] = React.useState()
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


    React.useEffect(() => {
        handGetListCategory()
    }, [])

    React.useEffect(() => {
        if (!detailsSeller) return
        setFormValue({ name_sellers: detailsSeller.name_sellers,
            descriptions: detailsSeller.descriptions, wallpper_img: detailsSeller.wallpper_img,
            logo_sellers: detailsSeller.logo_sellers,
            id_category: {id: Number(detailsSeller.idcategory), name_category: ''} })
    }, [detailsSeller])

    const handleSubmit = (e: any) => {
        e.preventDefault()

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
                        <Box maxWidth="100%" className="w-full">

                            <select
                                value={formValue.id_category.id}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormValue({ ...formValue, id_category: {id: Number(e.target.value), name_category: ''} })}
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


                    </Flex>
                </form>
            </Suspense>
        </div>
    )
}

export default FormEditDataSellers