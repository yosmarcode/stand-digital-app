'use client'
import React from "react"
import { webApiServices } from "@/services/webApiServices"
import { enqueueSnackbar } from "notistack"
import { ICategory } from "../../models"
import { LoadingComponents } from "@/components/loading/LoadingComponent"
import { Button, Grid, TextField, Box } from "@radix-ui/themes"

export default function FormFilter() {
    const [selectedCategory, setCategoryCategory] = React.useState<string>("")
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
    return (
        <div className="w-full bg-white flex items-center justify-center p-4 ">
            {isLoading && <LoadingComponents />}
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col lg:flex-row lg:gap-4 gap-2 w-full">
                <Grid columns={{ initial: "1", md: "2", lg: "3" }} gap="3" width="auto">
                    <Box maxWidth="100%" className="w-full">
                        <input type="text" placeholder="Buscar…" className="w-full mt-1 p-2 border rounded-md" />
                    </Box>
                    <Box maxWidth="100%" className="w-full">

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


                    </Box>
                    <Box maxWidth="100%" m="1" className="w-full">
                        <Button variant="outline" size="3" className="w-full lg:w-auto" type="submit">Buscar</Button>
                    </Box>
                </Grid>




            </form >
        </div >
    )
}