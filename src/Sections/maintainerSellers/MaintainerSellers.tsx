import { LoadingComponents } from '@/components/loading/LoadingComponent'
import ToBacks from '@/components/ToBack/ToBacks'
import React, { Suspense } from 'react'

const MaintainerSellers = () => {
    return (
        <Suspense fallback={<LoadingComponents />}>
            <div className="flex flex-col min-h-screen w-full pt-24 ">

                <div className="mx-auto">
                    <ToBacks />
                    <div className="bg-white p-4 rounded-xl w-full">
                        <h1>Configuración de vendedores</h1>
                    </div>
                </div>
            </div>
        </Suspense>
    )
}

export default MaintainerSellers