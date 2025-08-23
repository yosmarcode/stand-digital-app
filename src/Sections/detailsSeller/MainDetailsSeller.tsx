'use client'
import { LoadingComponents } from '@/components/loading/LoadingComponent'
import ToBacks from '@/components/ToBack/ToBacks'
import { Avatar } from '@radix-ui/themes'
import React from 'react'
import { Suspense } from 'react'
import userDefault from '@/assets/user-default.jpg'
import ImagenDefault from '@/assets/default_wallpper.jpg'
import { ImageComponents } from '@/components/imageComponents/ImageComponents'
import { webApiServices } from '@/services/webApiServices'
import Link from 'next/link'

const MainDetailsSeller = ({ nicknames }: { nicknames: string }) => {
    // Decode the nickname to handle URL-encoded characters like @ -> %40
    const decodedNickname = decodeURIComponent(nicknames)
    const [dataDetailsSeller, setDataDetailsSeller] = React.useState<any>(null)

    const handleGetDetailsSeller = async (nicknames: string) => {
        const { data, error } = await webApiServices.getDetailsSellerByNickNameServices(nicknames)
        if (error) {
            console.log(error)
        }
        setDataDetailsSeller(data)
    }

    React.useEffect(() => {
        handleGetDetailsSeller(decodedNickname)
    }, [])

    return (
        <Suspense fallback={<LoadingComponents />}>
            <div className="flex flex-col lg:flex-row">

                <div className="w-full lg:max-w-[20%] bg-white pt-24 text-start p-6">
                    <div className="flex flex-col gap-2 bg-gray-50 p-2 rounded-xl ">
                        <div>
                            <ToBacks />
                        </div>
                        <div className="flex items-center justify-center">
                            <Avatar src={dataDetailsSeller && dataDetailsSeller[0]?.logo_sellers ? process.env.NEXT_PUBLIC_SUPABASE_URL + dataDetailsSeller[0]?.logo_sellers : userDefault.src} size="8" radius="full" fallback="T" color="blue" />
                        </div>
                        <div className="flex flex-col gap-y-2 pt-6 p-2">
                            <span className="text-xl font-bold text-black font-sans">Tienda</span>
                            {dataDetailsSeller && (dataDetailsSeller[0]?.nicknames) && (
                                <Link href={dataDetailsSeller && (dataDetailsSeller[0]?.nicknames ?? 'S/N')} target="_blank">
                                    {dataDetailsSeller && (dataDetailsSeller[0]?.nicknames ?? 'S/N')}
                                </Link>
                            )}

                            <span className="text-black text-xl "> {dataDetailsSeller && (dataDetailsSeller[0]?.name_sellers ?? 'S/N')}</span>
                            <span className="text-gray-500 text-md "> {dataDetailsSeller && (dataDetailsSeller[0]?.descriptions ?? 'S/N')}</span>
                            <div className='pt-2'>
                                <ul className='flex flex-col'>
                                    <li className='bg-white p-2 rounded-xl'><span className="font-bold  bg-gray-50 p-2 ">Página Oficial:</span> {dataDetailsSeller && (dataDetailsSeller[0]?.page_oficial ?? 'S/N')}</li>
                                    <li className='bg-white p-2 rounded-xl'><span className="font-bold  bg-gray-50 p-2 ">Whatsapp:</span> {dataDetailsSeller && (dataDetailsSeller[0]?.whatsapp ?? 'S/N')}</li>
                                </ul>
                            </div>


                        </div>


                    </div>
                </div>

                <div className="w-full lg:max-w-[78%] ">
                    <div className="flex flex-col justify-center p-4 pt-24">

                        <div className="w-full">

                            <div className="relative pt-4">
                                <div className="w-full h-[auto] ">
                                    <ImageComponents src={dataDetailsSeller && dataDetailsSeller[0]?.wallpper_img ? process.env.NEXT_PUBLIC_SUPABASE_URL + dataDetailsSeller[0]?.wallpper_img : ImagenDefault.src} alt="squares" className="w-full h-[400px] object-cover rounded-xl" width={815} height={400} />
                                </div>
                            </div>

                        </div>
                        {/* detalles del vendedor */}
                        <div className='w-full h-full rounded-xl'>
                            <h1>Productos</h1>
                            <div>
                                Sugerencia de tiendas y productos
                            </div>

                        </div>
                    </div>


                </div>


            </div>

        </Suspense >
    )
}

export default MainDetailsSeller