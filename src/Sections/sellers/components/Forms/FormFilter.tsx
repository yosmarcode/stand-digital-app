'use client'
import { Button, Col, FloatingLabel, Form } from "react-bootstrap"
import React from "react"
import { webApiServices } from "@/services/webApiServices"
import { enqueueSnackbar } from "notistack"
import { ICategory } from "../../models"
import { LoadingComponents } from "@/components/loading/LoadingComponent"

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
        getListCategory()
    }, [])
    return (
        <div className="w-full bg-white flex items-center justify-center p-12 rounded-b-5">

            {isLoading && <LoadingComponents />}
            <Form onSubmit={(e) => e.preventDefault()} className="flex flex-col lg:flex-row lg:gap-4 gap-2 w-full">

                <Col xs>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Buscar"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Tienda, producto, servicio" />
                    </FloatingLabel>
                </Col>
                <Col xs={2}>
                    <FloatingLabel controlId="floatingSelect-regiones" label="Regiones">
                        <Form.Select aria-label="Floating label select regiones">
                            <option>Seleccione...</option>
                            {listCategory.map((category: ICategory) => (
                                <option key={category.id} value={category.id}>{category.name_category}</option>
                            ))}
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col xs={2}>
                    <FloatingLabel controlId="floatingSelect-ciudades" label="Ciudades">
                        <Form.Select aria-label="Floating label select ciudades">
                            <option>Seleccione...</option>
                            {listCategory.map((category: ICategory) => (
                                <option key={category.id} value={category.id}>{category.name_category}</option>
                            ))}
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col xs={2}>
                    <FloatingLabel controlId="floatingSelect-categorias" label="Categorias">
                        <Form.Select aria-label="Floating label select categorias">
                            <option>Seleccione...</option>
                            {listCategory.map((category: ICategory) => (
                                <option key={category.id} value={category.id}>{category.name_category}</option>
                            ))}
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col xs={12} sm={12} md={2} className="pt-1">
                    <Button variant="outline-primary" size="lg" className="w-full" type="submit">Buscar</Button>
                </Col>

            </Form>
        </div>
    )
}