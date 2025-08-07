import { LoadingComponents } from '@/components/loading/LoadingComponent'
import ToBacks from '@/components/ToBack/ToBacks'
import React, { Suspense } from 'react'
import userStore from '@/guards/userstore'

import MenuListSellers from './components/Menu/MenuListSellers'
import { Avatar } from '@radix-ui/themes'
import userDefault from '@/assets/user-default.jpg'
import { ImageComponents } from '@/components/imageComponents/ImageComponents'
import ImageSquaresWallppar from '@/assets/default_wallpper.jpg'
import { webApiServices } from '@/services/webApiServices'
import { enqueueSnackbar } from 'notistack'
import { ISellers, ISellersList } from '../sellers/models'
import DetailsSellerComponent from './components/DetailsSellerComponent'
import { pathImgAssets } from '@/constants'

const MaintainerSellers = () => {
    
    const id_seller = 11 as number
    const user = userStore?.user
    const [sellersList, setSellersList] = React.useState<ISellers[]>([])
    const [detailsSeller, setDetailsSeller] = React.useState<ISellersList[] | null>(null)

    const getSellersListByIdUser = async (p_id_user: string) => {
        const { data, error } = await webApiServices.getSellerListByIdUserServices(p_id_user)
        if (error) {
            enqueueSnackbar(error.message, { variant: 'error' })
        }
        if (data) {
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
        getDetailsSellerById(id_seller)
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
                            <MenuListSellers sellersList={sellersList} />
                        </div>

                    </div>
                </div>

                <div className="w-full lg:max-w-[80%] ">
                    <div className="lg:pt-24 pt-12 bg-blue-50 flex flex-col items-center justify-center h-auto rounded-xl p-4">

                        <div className="w-full">
                            {detailsSeller && (
                                <div>
                                   { detailsSeller[0]?.wallpper_img ?
                                    <ImageComponents src={ pathImgAssets + detailsSeller[0]?.wallpper_img.toString()} alt="squares" className="w-full h-full object-cover rounded-xl" width={1600} height={200} />
                                    :
                                    <ImageComponents src={ImageSquaresWallppar.src} alt="squares" className="w-full h-full object-cover rounded-xl" width={800} height={200} />
                                    }
                                    <DetailsSellerComponent detailsSeller={detailsSeller[0] as ISellersList} />
                                </div>
                            )}


                        </div>

                    </div>


                </div>
            </div >
        </Suspense >
    )
}

export default MaintainerSellers