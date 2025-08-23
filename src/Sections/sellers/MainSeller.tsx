import { CardComponentsSellers } from "../../components/ui/CardComponentsSellers";
import { Suspense } from "react";
import { LoadingComponents } from "../../components/loading/LoadingComponent";
import React from "react";
import { useContextSellerList } from "./context/ContextSellerList";
import { ISellersList } from "./models";
import { Box } from "@radix-ui/themes";
import FormAddSellers from "../dashboard/components/Form/FormAddSellers";
import ModalComponents from "@/components/ui/ModalComponents";
import ImagDefault from '@/assets/default-featured-image.jpg'
import useIsSellersActive from "@/hooks/useIsSellersActive";
import userStore from "@/guards/userstore";
export function SellerAllComponents() {
    const { dataSeller } = useContextSellerList()
    const isSellers = useIsSellersActive({ userId: userStore?.user?.id || '' })
    return (
        <Suspense fallback={<LoadingComponents />}>
            <div className="flex flex-col gap-4 pt-12 mb-8 lg:p-6 p-2">
                <h1 className="text-2xl font-bold text-black">Tiendas disponibles</h1>
                <div className="flex flex-col items-center justify-center gap-4">
                    {(dataSeller?.length === 0 && !isSellers) && (
                        <div className="bg-white p-4 rounded-xl border-1 border-gray-200 flex flex-col items-center justify-center gap-4">
                            <span className="text-xl font-bold text-black">No hay tiendas disponibles</span>
                            <Box maxWidth="100%" className="w-full">
                                <ModalComponents
                                    titleModal="¿Quieres crear una tienda?"
                                    titleButton="Crea tu tienda"
                                    chiledrenBody={<FormAddSellers />}
                                />
                            </Box>
                        </div>
                    )}

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {dataSeller?.map((seller: ISellersList) => (
                            <CardComponentsSellers
                                key={seller.id}
                                nicknames={seller.nicknames ?? ''}
                                imageSrc={seller.logo_sellers ? process.env.NEXT_PUBLIC_SUPABASE_URL + seller.logo_sellers : ImagDefault.src}
                                title={seller.name_sellers} description={seller.descriptions}
                                category={{ id: Number(seller.idcategory), description: seller.namecategory }} />
                        ))}
                    </div>
                </div>
            </div>
        </Suspense>
    )
}   