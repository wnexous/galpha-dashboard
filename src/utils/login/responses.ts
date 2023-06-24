export interface AuthTokenInterface {
    code: string,
    message: string
}

export const AuthCodes: AuthTokenInterface[] = [
    {
        code: "oie",
        message: "senha incorreta"
    }
]
const testee = AuthCodes.map(e => e.code)
export const authResponse = <AuthTokenInterface>(e: string) => AuthCodes.find(findbycode => findbycode.code == e)