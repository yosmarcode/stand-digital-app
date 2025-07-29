import { supabase } from "@/instegrations/supabase"
import { enqueueSnackbar } from "notistack"

export const webApiServices = {
    getLoginServices: async (email: string, password: string) => {

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })
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
}
