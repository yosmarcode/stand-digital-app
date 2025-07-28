//import { IAuth } from "../../auth/models"
//import { UserKey } from "../const"
let userStore: any = null

try {
    userStore = JSON.parse(localStorage.getItem('sb-dnzfareinxzwmngdycwu-auth-token') || '')
} catch (error: Error | unknown) {
    if (error instanceof Error) {
        console.log(error.message)
    }
    userStore = null
}

export default userStore