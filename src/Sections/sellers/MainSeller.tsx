import { dataSeller } from "@/helpers/Dummy/dataSeller";
import { CardComponentsSellers } from "../../components/ui/CardComponentsSellers";
import { Suspense } from "react";
import { LoadingComponents } from "../../components/loading/LoadingComponent";
export function SellerAllComponents() {
    const urlPath = '/client';
    return (
        <Suspense fallback={<LoadingComponents />}>
            <div className="flex flex-col gap-4 pt-20 mb-20">
                <h1 className="text-2xl font-bold text-black">Tiendas</h1>
                <div className="flex flex-col items-center justify-center gap-4">

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {dataSeller.map((seller) => (
                            <CardComponentsSellers key={seller.id} imageSrc={urlPath + seller.urlLogo} title={seller.nameSeller} description={seller.description} category={seller.category} />
                        ))}
                    </div>
                </div>
            </div>
        </Suspense>
    )
}   