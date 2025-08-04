
import React from "react";
import { ISellersList } from "../models";
import { enqueueSnackbar } from "notistack";
import { webApiServices } from "@/services/webApiServices";

export const ContextSellerList = React.createContext<any | null>(null);


export const ContextSellerListProvider = ({ children }: { children: React.ReactNode }) => {
    const { dataSeller, setDataSeller, formValueFilter, setFormValueFilter } = SellerStoresContext()

    const getListSellersByNameSellerAndCategory = async (p_name_sellers: string, p_idcategory: string) => {
        const { data, error } = await webApiServices.getListSellersByNameSellerAndCategoryServices(p_name_sellers, p_idcategory)
        if (error) {
            console.log(error)
            enqueueSnackbar('Error: ' + error.message, { variant: 'error' })
            return;
        }
        if (data) {
            setDataSeller(data)
        }
    }

    React.useEffect(() => {
        getListSellersByNameSellerAndCategory(formValueFilter.name_sellers, formValueFilter.id_category.toString())
    }, [formValueFilter])

    return (
        <ContextSellerList.Provider value={{
            dataSeller,
            setDataSeller,
            formValueFilter,
            setFormValueFilter,
            // FUNCTIONS
            getListSellersByNameSellerAndCategory
        }}>
            {children}
        </ContextSellerList.Provider>
    )
}


export const SellerStoresContext = () => {
    const [dataSeller, setDataSeller] = React.useState<ISellersList[] | null>(null)
    const [formValueFilter, setFormValueFilter] = React.useState({
        name_sellers: '',
        id_category: 0
    })
    return {
        dataSeller,
        setDataSeller,
        formValueFilter,
        setFormValueFilter
    }



}

export const useContextSellerList = () => {
    const context = React.useContext(ContextSellerList);
    if (!context) {
        throw new Error('useContextSellerList must be used within a ContextSellerListProvider');
    }
    return context;
}
