import React from 'react'
import FormFilter from './components/Forms/FormFilter'
import { SellerAllComponents } from './MainSeller'
import { useContextSellerList } from './context/ContextSellerList'

/**
 * Pagina que muestra la lista de vendedores en una grid,
 * ademas de un formulario para filtrar los vendedores por categorias.
 * @returns {JSX.Element}
 */
const PagesSellersList = () => {
    const { dataSeller } = useContextSellerList()
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:max-w-[20%] bg-white pt-24 text-start p-6">
                <div className="flex flex-col gap-2 bg-gray-50 p-2 rounded-3 ">
                    <span className="text-xl font-bold text-black font-sans">Servicios y Productos</span>
                    <p className="text-gray-500 text-md">Encuentra los mejores servicios y productos en línea</p>
                    <p className="text-gray-500 text-md "> {dataSeller?.length} Resultados</p>
                </div>
            </div>

            <div className="w-full lg:max-w-[80%]">
                <div className="lg:pt-24 pt-12 bg-blue-50 flex flex-col items-center justify-center h-auto rounded-xl p-4">
                    <div className="w-full">
                        <FormFilter />
                    </div>
                    <div>
                        <SellerAllComponents />
                    </div>
                </div>


            </div>
        </div >
    )
}

export default PagesSellersList