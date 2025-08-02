'use client'
import FormLogin from "./components/Form/FormLogin";
import React from "react";
import FormNewUser from "./components/Form/FormNewUser";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import ModalComponents from "@/components/ui/ModalComponents";
import userStore from "@/guards/userstore";

export default function MainAuth() {
    const sessionStatus: boolean = userStore ? true : false;
    useEffect(() => {
        if (sessionStatus) {
            redirect("/");
        }
    }, [sessionStatus]);

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="flex flex-col gap-4 lg:w-1/2 w-full lg:p-12 p-4 text-center">
                <div className="text-5xl font-bold text-black">Stand Digital</div>
                <p className="text-gray-500 text-md">Stand Digital es un sistema que permite registrar tu negocio en la plataforma digital, para que puedas vender tus productos y servicios en línea.</p>
                <div className="pt-8">
                    <ModalComponents
                        titleModal="Creando nueva cuenta"
                        titleButton="¿No tienes cuentas? "
                        chiledrenBody={<FormNewUser />}
                    />
                </div>

                <div className="pt-12">
                    <FormLogin />
                </div>
            </div>
            <div className="w-2/2 h-full items-center justify-center bg-blue-100 lg:block hidden" />

        </div>

    )
}