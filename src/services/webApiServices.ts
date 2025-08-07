import { supabase } from "@/instegrations/supabase"
import { ISellers } from "@/Sections/sellers/models"

export const webApiServices = {
    getLoginServices: async (email: string, password: string) => {

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })
        return { data, error }

    },
    getLogoutServices: async () => {
        const { error } = await supabase.auth.signOut()
        return { error }
    },
    getSessionServices: async () => {
        const { data, error } = await supabase.auth.getSession()
        return { data, error }
    },
    getNewUserServices: async (email: string, password: string, name: string, lastName: string) => {

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    full_name: name + ' ' + lastName
                }
            }
        })
        return { data, error }

    },
    getRegisterProfileServices: async (user_id: string, name: string, lastName: string, email: string) => {
        const { error } = await supabase.from('account').insert({
            id_user: user_id,
            names: name + ' ' + lastName,
            email: email,
            active: true
        })
        return { error }
    },

    getListCategoryServices: async () => {
        const { data, error } = await supabase.from('category').select('id, name_category, active').eq('active', 1)
        return { data, error }
    },

    // obtener si el usuario vende
    getValidateIfTheUserSellsByUserIdServices: async (user_id: string) => {
        const { data, error } = await supabase.from('sellers').select('*').eq('id_user', user_id)
        if (error) {
            console.log(error)
            return false
        }
        console.log(data?.length)
        return data?.length > 0 ? true : false
    },
    getIdAccountServices: async (user_id: string) => {
        const { data, error
        } = await supabase.from('account').select('*').eq('id_user', user_id)
        if (error) {
            console.log(error)

        }
        if (data) {
            return data[0].id
        }
    },

    createSellersServices: async (body: ISellers) => {
        const { error } = await supabase.from('sellers').insert({
            id_user: body.id_user,
            name_sellers: body.name_sellers,
            descriptions: body.descriptions,
            id_category: body.id_category,
            id_account: body.id_account,
            active: body.active,
            id_contry: body.id_contry
        })
        return { error }
    },
    getListSellersByNameSellerAndCategoryServices: async (p_name_sellers: string, p_idcategory: string) => {
        const { data, error } = await supabase
            .rpc('getlistsellersactive', {
                p_idcategory,
                p_name_sellers
            })
        return { data, error }
    },

    getDetailsSellerByNickNameServices: async (p_nickname: string) => {
        const { data, error } = await supabase.rpc('getDetailsSellerByNickName', {
            p_nickname
        })
        return { data, error }

    },
    getSellerListByIdUserServices: async (p_id_user: string) => {
        const { data, error } = await supabase
            .rpc('getsellerlistbyiduser', {
                p_id_user
            })
        return { data, error }
    },
    getDetailsSellerByIdServices: async (p_id_seller: number) => {
        const { data, error } = await supabase.rpc('getdetailssellerbyiduser', {
            p_id_seller
        })
        return { data, error }
    }
}
