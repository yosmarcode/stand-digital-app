'use client'
import { IUser } from '@/components/Auth/models'
import React from 'react'
import { Form } from 'react-bootstrap'

const FormUserData = ({ userData }: { userData: IUser | undefined }) => {

    return (
        <div className='bg-blue-50 rounded-lg p-3 mt-2'>
            <div className='pt-2'>
                <p className='text-xl text-black'>Información de Usuario</p>
            </div>
            <Form.Floating className="mb-1">
                <Form.Control
                    id="floatingInputCustom-email"
                    type="email"
                    placeholder="name@example.com"
                    value={userData?.user_metadata.email}
                //onChange={(e) => setFormValue({ ...formValue, email: e.target.value })}
                //isInvalid={(isError && (formValue.email.length < 1) || (formValue.email.length > 2 && !validateEmail(formValue.email)))}
                />
                {/* {(isError && (formValue.email.length < 1) || (formValue.email.length > 2 && !validateEmail(formValue.email))) && <Form.Control.Feedback type="invalid">
                    <p>Correo electrónico es obligatorio o correo electrónico es inválido</p>
                </Form.Control.Feedback>} */}
                <label htmlFor="floatingInputCustom-email">Correo Usuario</label>
            </Form.Floating>
            <Form.Floating className="mb-1">
                <Form.Control
                    id="floatingInputCustom-full_name"
                    type="text"
                    placeholder="Nombre"
                    value={userData?.user_metadata.full_name}
                //onChange={(e) => setFormValue({ ...formValue, email: e.target.value })}
                //isInvalid={(isError && (formValue.email.length < 1) || (formValue.email.length > 2 && !validateEmail(formValue.email)))}
                />
                {/* {(isError && (formValue.email.length < 1) || (formValue.email.length > 2 && !validateEmail(formValue.email))) && <Form.Control.Feedback type="invalid">
                    <p>Correo electrónico es obligatorio o correo electrónico es inválido</p>
                </Form.Control.Feedback>} */}
                <label htmlFor="floatingInputCustom-full_name">Nombre Usuario</label>
            </Form.Floating>

            <Form.Floating className="mb-1">
                <Form.Control
                    id="floatingInputCustom-phone"
                    type="text"
                    placeholder="1234567890"
                    value={userData?.phone}
                //onChange={(e) => setFormValue({ ...formValue, email: e.target.value })}
                //isInvalid={(isError && (formValue.email.length < 1) || (formValue.email.length > 2 && !validateEmail(formValue.email)))}
                />
                {/* {(isError && (formValue.email.length < 1) || (formValue.email.length > 2 && !validateEmail(formValue.email))) && <Form.Control.Feedback type="invalid">
                    <p>Correo electrónico es obligatorio o correo electrónico es inválido</p>
                </Form.Control.Feedback>} */}
                <label htmlFor="floatingInputCustom-phone">Teléfono</label>
            </Form.Floating>
        </div>
    )
}

export default FormUserData