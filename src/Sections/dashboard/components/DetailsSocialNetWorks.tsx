'use client'
import React from 'react'
import { Text, Separator, Flex, Card, Box, Avatar, Link } from '@radix-ui/themes'
import ModalComponents from '@/components/ui/ModalComponents'
import { webApiServices } from '@/services/webApiServices'

const DetailsSocialNetWorks = ({idSeller}: {idSeller: number}) => {

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
      
        idSeller && fetchSocialNetworks(idSeller)
    }, [idSeller])

    return (
        <div className='p-2'>
            {socialNetworks && socialNetworks.length > 0 ? (
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                <Flex className='flex flex-col lg:flex-row items-center justify-center gap-2 bg-white p-2 rounded-xl border-1 border-gray-200'>
                <ul className='flex flex-col gap-y-2 '>
                    <li className='flex items-center gap-2'>
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
                 
                    <li className='flex items-center gap-2'>
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
                            {socialNetworks[0].email}
                            </Text>
                        </Box>
                    </li>
                </ul>
            
            </Flex>
            <Flex className='flex flex-col items-center justify-center gap-2 w-full bg-white p-2 rounded-xl border-1 border-gray-200'>
                <Text as="div" size="2" weight="bold">
                    Pagina Oficial:
                </Text>
                <Link href={socialNetworks[0].page_oficial} target="_blank">
              {socialNetworks[0].page_oficial}
                </Link>
            </Flex>
      
            <Flex className='flex flex-col items-center justify-center gap-2 w-full bg-white p-2 rounded-xl border-1 border-gray-200'>
                <Text as="div" size="2" weight="bold">
                    Instagram:
                </Text>
                <Link href={socialNetworks[0].instagram} target="_blank">
              {socialNetworks[0].instagram}
                </Link>
            </Flex>
            <Flex className='flex mx-auto'> 
            <ModalComponents titleModal="Editar redes sociales" titleButton="Editar redes sociales" buttonVariant="ghost" chiledrenBody={<div></div>} />
            </Flex>
            </div>
        
            ) : (
                <div className='w-full bg-white p-2 rounded-xl border-1 border-gray-200 p-12'>
                    <Text as="div" size="2" weight="bold">
                    <ModalComponents titleModal="Configurar redes sociales" titleButton="Debes de configurar tus redes sociales" buttonVariant="ghost" chiledrenBody={<div></div>} />
                    </Text>
                </div>
            )}
        
        </div>
    )
}

export default DetailsSocialNetWorks