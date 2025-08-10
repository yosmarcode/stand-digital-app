import { Flex, Link, Separator } from '@radix-ui/themes'
import React from 'react'
import userDefault from '@/assets/user-default.jpg'
import ModalComponents from '@/components/ui/ModalComponents'
import { Avatar } from '@radix-ui/themes'
import { Text, Heading } from '@radix-ui/themes'
import FormEditDataSellers from './Form/FormEditDataSellers'
import { ISellersList } from '@/Sections/sellers/models'
import UploadWallpper from '@/helpers/UploadFile/UploadWallpper'
import DetailsSocialNetWorks from './DetailsSocialNetWorks'
const DetailsSellerComponent = ({ detailsSeller, getDetailsSellerById }: { detailsSeller: ISellersList, getDetailsSellerById: (id_seller: number) => void }) => {
    return (
        <div className='w-full h-full bg-white p-2 gap-4 mt-4 rounded-xl'>
            <div className='grid grid-cols-2 lg:grid-cols-2 gap-4'>

                <div className='p-2 rounded-xl'>
                    <div className='gap-4 flex items-center'>
                        <div className='text-center'>
                            <Avatar src={detailsSeller?.logo_sellers ? process.env.NEXT_PUBLIC_SUPABASE_URL + detailsSeller?.logo_sellers : userDefault.src} size="8" radius="medium" fallback="T" color="blue" />

                            <ModalComponents titleModal="Editar Avatar" titleButton="Editar Avatar" buttonVariant="ghost" chiledrenBody={<UploadWallpper sellerId={detailsSeller?.id?.toString() || '0'} nameFunction="upload-logo-sellers" />} />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                        <Heading as="h3"> {detailsSeller?.name_sellers}</Heading>

                        
                            <Flex gap="3" align="center">
                                <Link href={detailsSeller?.nicknames} target="_blank">
                                    {detailsSeller?.nicknames}
                                </Link>
                                <Separator orientation="vertical" />
                                <Text as="span" size="3" weight="regular">
                                    10 Likes
                                </Text>
                            </Flex>
                            <Text as="span" size="2" weight="regular">
                                {detailsSeller?.descriptions}
                            </Text>


                            <Separator orientation="horizontal" size="4" />
                            <Flex className='flex justify-start'>
                                <ModalComponents titleModal="Editar Datos" titleButton="Editar Datos" buttonVariant="ghost" chiledrenBody={<FormEditDataSellers detailsSeller={detailsSeller} getDetailsSellerById={getDetailsSellerById} />} />
                            </Flex>

                        </div>
                    </div>




                </div>
                <div className='flex justify-start items-center w-full '>
               
                    <DetailsSocialNetWorks idSeller={Number(detailsSeller?.id) || 0 } />


                </div>


            </div>

        </div>
    )
}

export default DetailsSellerComponent