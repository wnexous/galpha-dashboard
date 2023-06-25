import { returnLoginInterface, signinInterface } from "@/interfaces/auth"
import { fetchUser, users } from "../Mock/users"

import jwt from "jsonwebtoken"
const cryptPass = process.env.AUTH_CRYPT_KEY || "defaultCryptPass"
const defaultAuthType = "Bearer"

interface userDataCrypt {
    id: string,
    username: string
}

export function verifyLogin({ password, username }: signinInterface): returnLoginInterface {
    const fetchUser = users.find(user => user.username == username)
    if (!!fetchUser) {
        return fetchUser.password == password
            ? { isLogged: true, token: jwt.sign(JSON.stringify(((): userDataCrypt => { return { ...fetchUser } })()), cryptPass), code: "success-auth" }
            : { isLogged: false, code: "wrong-password" }
    }
    return {
        isLogged: false,
        code: "wrong-username"
    }
}

export const verifyAuthToken = (authToken: string): returnLoginInterface => {
    const [type, token] = authToken.split(" ")

    if (type && token) {
        try {
            const tokenDecrypt = jwt.verify(token, cryptPass)

            return tokenDecrypt && type == defaultAuthType
                ? { isLogged: true, code: "success-auth" }
                : { isLogged: false, code: "wrong-authtype" }

        } catch (error) {
            return ({ isLogged: false, code: "wrong-token" })
        }
    }
    else return ({ isLogged: false, code: "wrong-token" })

}