import { LoadingComponents } from '@/components/loading/LoadingComponent'
import ToBacks from '@/components/ToBack/ToBacks'
import React, { Suspense } from 'react'
import userStore from '@/guards/userstore'

import MenuListSellers from './components/Menu/MenuListSellers'
import { Avatar, Text } from '@radix-ui/themes'
import userDefault from '@/assets/user-default.jpg'
import { ImageComponents } from '@/components/imageComponents/ImageComponents'
import ImagenDefault from '@/assets/default_wallpper.jpg'
import { webApiServices } from '@/services/webApiServices'
import { enqueueSnackbar } from 'notistack'
import { ISellers, ISellersList } from '../sellers/models'
import DetailsSellerComponent from './components/DetailsSellerComponent'

import ModalComponents from '@/components/ui/ModalComponents'
import UploadWallpper from '@/helpers/UploadFile/UploadWallpper'
import BadgeComponents from '@/components/ui/Badge/BadgeComponents'

const MaintainerSellers = () => {
    const user = userStore?.user
    const [sellersList, setSellersList] = React.useState<ISellers[]>([])
    const [detailsSeller, setDetailsSeller] = React.useState<ISellersList[] | null>(null)

    const getSellersListByIdUser = async (p_id_user: string) => {
        const { data, error } = await webApiServices.getSellerListByIdUserServices(p_id_user)
        if (error) {
            enqueueSnackbar(error.message, { variant: 'error' })
        }
        if (data) {
            console.log('data', data)
            // obtengo el detalle del primer seller
            getDetailsSellerById(data[0].id)
            setSellersList(data)

        }
    }

    const getDetailsSellerById = async (p_id_seller: number) => {
        const { data, error } = await webApiServices.getDetailsSellerByIdServices(p_id_seller)
        if (error) {
            enqueueSnackbar(error.message, { variant: 'error' })
        }
        if (data) {
            setDetailsSeller(data)

        }
    }

    React.useEffect(() => {
        getSellersListByIdUser(user?.id as string)
    }, [user?.id])


    return (
        <Suspense fallback={<LoadingComponents />}>
            <div className="flex flex-col lg:flex-row">

                <div className="w-full lg:max-w-[20%] bg-white pt-24 text-start p-6">
                    <div className="flex flex-col gap-2 bg-gray-50 p-2 rounded-xl ">
                        <div>
                            <ToBacks />
                        </div>
                        <div className="flex items-center justify-center">
                            <Avatar src={userDefault.src} size="8" radius="full" fallback="T" color="blue" />
                        </div>
                        <div className="flex flex-col gap-y-2 pt-6 p-2">
                            <span className="text-xl font-bold text-black font-sans">Bienvenidos</span>
                            <p className="text-gray-500 text-md "> {user?.user_metadata?.full_name}</p>

                        </div>
                        <div>
                            <MenuListSellers sellersList={sellersList} getDetailsSellerById={getDetailsSellerById} />
                        </div>

                    </div>
                </div>

                <div className="w-full lg:max-w-[78%] ">
                    <div className="flex flex-col justify-center p-4 pt-24">




                        <div className="w-full">

                            {detailsSeller && (
                                <div className="relative pt-4">
                                    <div className="w-full h-[auto] ">

                                        <div className="absolute top-10 left-10 w-full h-full">
                                            <ModalComponents
                                                titleModal="Actualizar Wallpper"
                                                titleButton="Subir imagen"
                                                buttonVariant="solid"
                                                chiledrenBody={<div>
                                                    <UploadWallpper sellerId={detailsSeller[0]?.id?.toString() || '0'} nameFunction="upload-wallpper" />
                                                </div>}
                                            />
                                        </div>
                                        {detailsSeller && detailsSeller[0]?.wallpper_img ?

                                            <ImageComponents src={process.env.NEXT_PUBLIC_SUPABASE_URL + detailsSeller[0].wallpper_img.toString()} alt="squares" className="w-full h-[400px] object-cover rounded-xl" width={1600} height={200} />
                                            :
                                            <ImageComponents src={ImagenDefault.src} alt="squares" className="w-full h-[400px] object-cover rounded-xl" width={815} height={400} />

                                        }
                                        <div className='flex justify-end items-center gap-2 mt-2'>
                                            {detailsSeller && <div className="flex justify-end items-center">
                                                <BadgeComponents category={{ id: Number(detailsSeller[0]?.idcategory), description: detailsSeller[0]?.namecategory }} />
                                            </div>}
                                        </div>
                                    </div>
                                </div>


                            )}


                        </div>
                        {/* detalles del vendedor */}
                        <div className='w-full h-full rounded-xl'>
                            {detailsSeller && (
                                <DetailsSellerComponent detailsSeller={detailsSeller[0] as ISellersList} getDetailsSellerById={getDetailsSellerById} />
                            )}
                        </div>
                    </div>


                </div>


            </div>

        </Suspense >
    )
}

export default MaintainerSellers