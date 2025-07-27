'use client'
import { Button, Col, FloatingLabel, Form } from "react-bootstrap"
export default function FormFilter() {
    return (
        <div className="w-full bg-white flex items-center justify-center p-12">

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
                <Col xs>
                    <FloatingLabel controlId="floatingSelect" label="Categorias">
                        <Form.Select aria-label="Floating label select example">
                            <option>Seleccione...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col xs className="pt-1">
                    <Button variant="outline-primary" size="lg" className="w-25" type="submit">Buscar</Button>
                </Col>

            </Form>
        </div>
    )
}