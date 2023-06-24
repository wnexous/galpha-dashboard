import { NextApiRequest, NextApiResponse } from "next";
import { returnLoginInterface } from "./signin";
import jwt from "jsonwebtoken"

const cryptPass = process.env.AUTH_CRYPT_KEY || "defaultCryptPass"

const defaultAuthType = "Bearer"

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<returnLoginInterface>
) {
    const userAuth = req.headers.authorization
    console.log(userAuth);

    if (req.method == "POST" && userAuth) {
        const [type, token] = userAuth.split(" ")

        if (type && token) {
            try {
                const tokenDecrypt = jwt.verify(token, cryptPass)
                if (tokenDecrypt && type == defaultAuthType) res.send({ isLogged: true, message: "" })
                else res.send({ isLogged: false, message: "inválid token" })
            } catch (error) {
                res.send({ isLogged: false, message: "inválid token" })
            }
        }
        else res.send({ isLogged: false, message: "invalid type or token" })
    }
}
