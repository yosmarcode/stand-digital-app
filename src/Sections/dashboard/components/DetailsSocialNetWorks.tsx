'use client'
import React from 'react'
import { Text, Separator, Flex, Card, Box, Avatar, Link } from '@radix-ui/themes'
import ModalComponents from '@/components/ui/ModalComponents'
import { webApiServices } from '@/services/webApiServices'
import FormAddSocialNetWorks from './Form/FormAddSocialNetWorks'

const DetailsSocialNetWorks = ({ idSeller }: { idSeller: number }) => {

    const [socialNetworks, setSocialNetworks] = React.useState<any[]>([])

    const fetchSocialNetworks = async (p_id_seller: number) => {
        const { data, error } = await webApiServices.getListSocialNetworkServices(p_id_seller)
        if (error) {
            console.log(error)
        }
        if (data) {
            setSocialNetworks(data)
        }
    }

    React.useEffect(() => {
        if (
            idSeller
        ) {
            fetchSocialNetworks(idSeller)
        }

    }, [idSeller])

    return (
        <div className='p-2'>
            {socialNetworks && socialNetworks.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
                    <Flex className='flex flex-col lg:flex-row items-center justify-center gap-2 bg-white p-2 rounded-xl border-1 border-gray-200'>
                        <ul className='flex flex-col gap-y-2 '>
                            {socialNetworks[0].whatsapp && (
                                <li className='flex items-center gap-2 w-full'>
                                    <Avatar
                                        size="3"
                                        src=""
                                        radius="full"
                                        fallback="W"
                                    />
                                    <Box>
                                        <Text as="div" size="2" weight="bold">
                                            WhatsApp
                                        </Text>
                                        <Text as="div" size="2" color="gray">
                                            {socialNetworks[0].whatsapp}
                                        </Text>
                                    </Box>
                                </li>
                            )}
                            {socialNetworks[0].email_sellers && (
                                <li className='flex items-center gap-2 w-full'>
                                    <Avatar
                                        size="3"
                                        src=""
                                        radius="full"
                                        fallback="E"
                                    />
                                    <Box>
                                        <Text as="div" size="2" weight="bold">
                                            Email
                                        </Text>
                                        <Text as="div" size="2" color="gray">
                                            {socialNetworks[0].email_sellers}
                                        </Text>
                                    </Box>
                                </li>
                            )}

                            {socialNetworks[0].instagram && (
                                <li className='flex items-center gap-2 w-full'>
                                    <Avatar
                                        size="3"
                                        src=""
                                        radius="full"
                                        fallback="I"
                                    />
                                    <Box>
                                        <Text as="div" size="2" weight="bold">
                                            Instagram
                                        </Text>
                                        <Text as="div" size="2" color="gray">
                                            {socialNetworks[0].instagram}
                                        </Text>
                                    </Box>
                                </li>
                            )}
                            {socialNetworks[0].tiktok && (
                                <li className='flex items-center gap-2 w-full'>
                                    <Avatar
                                        size="3"
                                        src=""
                                        radius="full"
                                        fallback="T"
                                    />
                                    <Box>
                                        <Text as="div" size="2" weight="bold">
                                            Tiktok
                                        </Text>
                                        <Text as="div" size="2" color="gray">
                                            {socialNetworks[0].tiktok}
                                        </Text>
                                    </Box>
                                </li>
                            )}
                        </ul>

                    </Flex>
                    {socialNetworks[0].page_oficial && (


                        <Flex className='flex flex-col items-center justify-center gap-2 w-full bg-white rounded-xl border-1 border-gray-200'>
                            <Text as="div" size="2" weight="bold">
                                Pagina Oficial:
                            </Text>
                            <div className="p-2">
                                <Link href={socialNetworks[0].page_oficial} target="_blank">
                                    {socialNetworks[0].page_oficial}
                                </Link>
                            </div>
                        </Flex>
                    )}


                    <Flex className='flex mx-auto justify-center items-center'>
                        <ModalComponents titleModal="Editar redes sociales" titleButton="Editar redes sociales" buttonVariant="ghost" chiledrenBody={<div><FormAddSocialNetWorks socialNetworks={socialNetworks} idSeller={idSeller} /></div>} />
                    </Flex>
                </div>

            ) : (
                <div className='w-full bg-white rounded-xl border-1 border-gray-200 p-12'>
                    <Text as="div" size="2" weight="bold">
                        <ModalComponents titleModal="Configurar redes sociales" titleButton="Debes de configurar tus redes sociales" buttonVariant="ghost" chiledrenBody={<div><FormAddSocialNetWorks socialNetworks={socialNetworks} idSeller={idSeller} /></div>} />
                    </Text>
                </div>
            )}

        </div>
    )
}

export default DetailsSocialNetWorks