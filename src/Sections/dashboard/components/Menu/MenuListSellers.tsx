import { ISellers } from '@/Sections/sellers/models'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Button, Flex, Text } from '@radix-ui/themes'
import React from 'react'

const MenuListSellers = ({ sellersList }: { sellersList: ISellers[] }) => {
    return (

        <div className='Flex flex-col'>

            <ul className='flex flex-col gap-y-2 pt-6 p-2'>
                <Text as="div" size="2" weight="bold">
                    Tu Sellers
                </Text>
                {sellersList.map((seller) => (
                    <li
                        key={seller.id}
                        className='bg-blue-50 hover:bg-blue-200 p-4 rounded-xl cursor-pointer transition-all duration-300 text-blue-500 hover:text-blue-600'>
                        <Flex className='flex gap-2 items-center' justify="between">
                            <span>{seller.name_sellers}</span>
                            <Button variant="ghost" size="2" className="w-full" onClick={() => { }}>
                                <ArrowRightIcon height="20" width="20" />
                            </Button>
                        </Flex>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default MenuListSellers