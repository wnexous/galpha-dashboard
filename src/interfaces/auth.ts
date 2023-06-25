import { AuthCodeTypes } from "@/utils/login/responses"

export interface signinInterface {
    username: string
    password: string
}

export interface returnLoginInterface {
    isLogged: boolean
    code: AuthCodeTypes
    token?: string
}