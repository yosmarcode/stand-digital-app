'use client'
import { LoadingComponents } from "@/components/loading/LoadingComponent";
import { Suspense } from "react";
import ToBacks from "@/components/ToBack/ToBacks";
import userStore from "@/guards/userstore";
import { IUser } from "@/Sections/Auth/models";
import userDefault from "@/assets/user-default.jpg";
import FormUserData from "./components/Form/FormUserData";
import FormChangePassword from "./components/Form/FormChangePassword";
import { Flex, Box, Card, Avatar, Text } from "@radix-ui/themes";
import ModalComponents from "@/components/ui/ModalComponents";
import MenuProfile from "./components/Menu/MenuProfile";
import React from "react";
import FormAddSellers from "../dashboard/components/Form/FormAddSellers";
import useIsSellersActive from "@/hooks/useIsSellersActive";

export default function MainProfile() {
    const userData: IUser | undefined = userStore?.user
    const isSeller = useIsSellersActive({ userId: userData?.id as string })


    return (
        <Suspense fallback={<LoadingComponents />}>
            <div className="flex flex-col min-h-screen w-full  pt-24 ">
                <div className="mx-auto">
                    <ToBacks />
                    <Flex gap="3" direction="row">
                        <Box width="100%" className="p-2">
                            <Card size="1">
                                <div className="flex items-center justify-center">
                                    <Avatar src={userDefault.src} size="8" radius="full" fallback="T" color="blue" />
                                </div>
                                <Flex gap="3" align="center" p="2" direction="column">

                                    <Box className="text-center">
                                        <Text as="div" size="2" weight="bold">
                                            {userData?.user_metadata?.full_name}
                                        </Text>
                                        <Text as="div" size="2" color="gray">
                                            {userData?.user_metadata?.email}
                                        </Text>
                                    </Box>

                                    <ModalComponents
                                        titleModal="Datos de usuario"
                                        titleButton="Editar datos de usuario"
                                        chiledrenBody={<FormUserData userData={userData} />}
                                    />


                                    <ModalComponents
                                        titleModal="Cambiar Contraseña"
                                        titleButton="Cambiar Contraseña"
                                        chiledrenBody={<FormChangePassword />}
                                    />


                                </Flex>
                            </Card>
                        </Box>
                    </Flex>
                    <Flex gap="3" direction="row" pt="2" className="p-2">
                        <Box width="500px">

                            <Card size="2">
                                {isSeller ? (
                                    <MenuProfile />
                                ) : (
                                    <Flex gap="3" direction="column" justify="center">
                                        <Text as="div" size="4" weight="regular" color="gray" style={{ textAlign: 'center' }}>
                                            ¿Quieres promocionar tu Emprendimiento?
                                        </Text>
                                        <div className="flex items-center justify-center">
                                            <ModalComponents
                                                titleModal="¡Activa tu cuenta!"
                                                titleButton="¡Activa tu cuenta!"
                                                chiledrenBody={<FormAddSellers />}
                                            />
                                        </div>
                                    </Flex>
                                )}
                            </Card>
                        </Box>
                    </Flex>
                </div>





            </div>



        </Suspense >
    )
}