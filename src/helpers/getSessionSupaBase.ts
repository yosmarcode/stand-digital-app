import { webApiServices } from "@/services/webApiServices"

const getSessionSupaBase = async () => {

    const { data, error } = await webApiServices.getSessionServices()
    if (error) {
        console.log('error', error)
        throw error
    }
    return data.session
}

export default getSessionSupaBase
