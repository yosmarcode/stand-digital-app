//import { IAuth } from "../../auth/models"

import { IAuth } from "@/components/Auth/models"

//import { UserKey } from "../const"
let userStore: IAuth | null = null

try {
    userStore = JSON.parse(localStorage.getItem('sb-dnzfareinxzwmngdycwu-auth-token') || '')
} catch (error: Error | unknown) {
    if (error instanceof Error) {
        console.log(error.message)
    }
    userStore = null
}

export default userStore