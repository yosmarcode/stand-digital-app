'use client'
import React from "react"
import { webApiServices } from "@/services/webApiServices"
import { enqueueSnackbar } from "notistack"
import { ICategory } from "../../models"
import { LoadingComponents } from "@/components/loading/LoadingComponent"
import { Button, Grid, Select, TextField, Box } from "@radix-ui/themes"

export default function FormFilter() {
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

                <Grid columns="3" gap="3" width="auto">
                    <Box maxWidth="100%">
                        <TextField.Root size="3" placeholder="Buscar…" />
                    </Box>
                    <Select.Root defaultValue="0" size="3">
                        <Select.Trigger />
                        <Select.Content>
                            <Select.Group>
                                <Select.Item value="0">Seleccione...</Select.Item>
                                {listCategory.map((category: ICategory) => (
                                    <Select.Item key={category.id} value={category.id}>{category.name_category}</Select.Item>
                                ))}
                            </Select.Group>
                        </Select.Content>
                    </Select.Root>

                    <Box maxWidth="100%">
                        <Button variant="outline" size="3" className="w-full lg:w-auto" type="submit">Buscar</Button>
                    </Box>
                </Grid>




            </form>
        </div>
    )
}