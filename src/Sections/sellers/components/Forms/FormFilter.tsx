'use client'
import React from "react"
import { webApiServices } from "@/services/webApiServices"
import { enqueueSnackbar } from "notistack"
import { ICategory } from "../../models"
import { LoadingComponents } from "@/components/loading/LoadingComponent"
import { Button, Grid, Box } from "@radix-ui/themes"
import { useContextSellerList } from "../../context/ContextSellerList"
export default function FormFilter() {
    const { formValueFilter, setFormValueFilter, getListSellersByNameSellerAndCategory } = useContextSellerList()
    const [listCategory, setListCategory] = React.useState<ICategory[]>([])
    const [isLoading, setIsLoading] = React.useState(false)

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

        //TODO: obtener lista de categorias
        getListCategory()
    }, [])
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        getListSellersByNameSellerAndCategory(formValueFilter.name_sellers, formValueFilter.id_category.toString())
    }
    return (
        <div className="w-full bg-white flex items-center justify-center p-4 ">
            {isLoading && <LoadingComponents />}
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col lg:flex-row lg:gap-4 gap-2 w-full">
                <Grid columns={{ initial: "1", md: "2", lg: "3" }} gap="3" width="auto">
                    <Box maxWidth="100%" className="w-full">
                        <input
                            value={formValueFilter.name_sellers}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormValueFilter({ ...formValueFilter, name_sellers: e.target.value })}
                            type="text" placeholder="Buscar…" className="w-full mt-1 p-2 border rounded-md" />
                    </Box>
                    <Box maxWidth="100%" className="w-full">

                        <select
                            value={formValueFilter.id_category}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormValueFilter({ ...formValueFilter, id_category: Number(e.target.value) })}
                            className="w-full mt-1 p-2 border rounded-md"
                        >
                            <option value="">Todo</option>
                            {listCategory.map((category: ICategory) => (
                                <option key={category.id} value={category.id}>
                                    {category.name_category}
                                </option>
                            ))}
                        </select>


                    </Box>
                    <Box maxWidth="100%" m="1" className="w-full">
                        <Button variant="outline" size="3" className="w-full lg:w-auto" type="submit">Buscar</Button>
                    </Box>
                </Grid>




            </form >
        </div >
    )
}