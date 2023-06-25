export interface AuthTokenInterface {
    code: AuthCodeTypes,
    message: string
}

export type AuthCodeTypes =
    "wrong-username" |
    "wrong-password" |
    "wrong-token" |
    "wrong-authtype" |
    "success-auth"

export const AuthCodes: AuthTokenInterface[] = [
    {
        code: "wrong-password",
        message: "senha incorreta"
    },
    {
        code: "wrong-username",
        message: "nome de usuário incorreto"
    },
    {
        code: "wrong-token",
        message: "a sessão expirou"
    },
    {
        code: "wrong-authtype",
        message: "a sessão é inexistente"
    },
    {
        code: "success-auth",
        message: "login efetuado com sucesso"
    }
]
export const authResponse = (e: AuthCodeTypes) => AuthCodes.find(findbycode => findbycode.code == e)