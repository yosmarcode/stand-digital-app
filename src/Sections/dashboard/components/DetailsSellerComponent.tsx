import { Flex } from '@radix-ui/themes'
import React from 'react'
import userDefault from '@/assets/user-default.jpg'
import ModalComponents from '@/components/ui/ModalComponents'
import { Avatar } from '@radix-ui/themes'
import { Text } from '@radix-ui/themes'
import FormEditDataSellers from './Form/FormEditDataSellers'
import { ISellersList } from '@/Sections/sellers/models'
import BadgeComponents from '@/components/ui/Badge/BadgeComponents'
const DetailsSellerComponent = ({ detailsSeller }: { detailsSeller: ISellersList }) => {
    return (
        <div>
            <Flex className="flex items-center justify-start pt-12 gap-4">
                <Avatar src={userDefault.src} size="8" radius="full" fallback="T" color="blue" />
                <div className="flex flex-col gap-y-2">
                    <Text as="span" size="9" weight="bold">
                        {detailsSeller?.name_sellers}
                    </Text>
                    <Flex className='flex flex-col items-start gap-y-1'>
                        <Text as="span" size="2" weight="medium">
                            {detailsSeller?.nicknames}
                        </Text>
                        <Text as="span" size="2" weight="regular">
                            10 Likes
                        </Text>
                        <Text as="span" size="4" weight="regular">
                        {detailsSeller?.descriptions}
                    </Text>
                    <div>
                        {detailsSeller?.namecategory && (
                            <BadgeComponents className="" category={{ id: Number(detailsSeller?.idcategory), description: detailsSeller?.namecategory }} handClick={() => console.log('category', detailsSeller)} />
                        )}
                    </div>

                    </Flex>
                
                    <ModalComponents titleModal="Editar Datos" titleButton="Editar" chiledrenBody={<div>
                        <FormEditDataSellers detailsSeller={detailsSeller} />
                    </div>} />
                </div>
            </Flex>
        </div>
    )
}

export default DetailsSellerComponent