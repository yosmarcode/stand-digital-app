//import { IAuth } from "../../auth/models"

import { IAuth } from "@/Sections/Auth/models"
import getSessionSupaBase from "@/helpers/getSessionSupaBase";
//import { UserKey } from "../const"
let userStore: IAuth | null = null

try {
    userStore = JSON.parse(localStorage.getItem('sb-dnzfareinxzwmngdycwu-auth-token') || '') ?? getSessionSupaBase()
} catch (error: Error | unknown) {
    if (error instanceof Error) {
        console.log(error.message)
    }
    userStore = null
}

export default userStore