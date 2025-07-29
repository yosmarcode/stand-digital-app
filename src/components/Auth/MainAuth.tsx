'use client'
import ModalComponents from "../ui/ModalComponents";
import FormLogin from "./components/Form/FormLogin";
import React from "react";
import FormNewUser from "./components/Form/FormNewUser";
import userStore from "@/guards/userstore";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function MainAuth() {
    const [isOpen, setIsOpen] = React.useState(false);

    const sessionStatus: boolean = userStore ? true : false;
    useEffect(() => {
        if (sessionStatus) {
            redirect("/");
        }
    }, [sessionStatus]);

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="flex flex-col gap-4 lg:w-1/2 w-full lg:p-12 p-4 text-center">
                <h1 className="text-2xl font-bold text-black">Stand Digital</h1>
                <p className="text-gray-500 text-md">Stand Digital es un sistema que permite registrar tu negocio en la plataforma digital, para que puedas vender tus productos y servicios en línea.</p>
                <div>
                    <button type="button" className='text-blue-500 hover:text-blue-600 hover:cursor-pointer rounded-md p-1 ' onClick={() => setIsOpen(true)}>¿No tienes cuentas? </button>
                </div>

                <div className="lg:p-12 p-2">
                    <FormLogin />
                </div>
            </div>
            <div className="w-2/2 h-full items-center justify-center bg-blue-100 lg:block hidden" />
            <ModalComponents title="Creando nueva cuenta" isOpen={isOpen} setIsOpen={setIsOpen} chiledrenBody={<FormNewUser />} chiledrenFooter={<button type="button" className='text-blue-500 hover:text-blue-600 hover:cursor-pointer rounded-md p-1 ' onClick={() => setIsOpen(false)}>Cancelar</button>} />

        </div>

    )
}