// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from "jsonwebtoken"

export interface returnLoginInterface {
    isLogged: boolean
    message: string
    token?: string
}
const cryptPass = process.env.AUTH_CRYPT_KEY || "defaultCryptPass"


interface signin {
    username: string
    password: string
}

interface usersInterface {
    username: string
    password: string
    id: string
}
const users: usersInterface[] = [
    {
        username: "wnexous",
        password: process.env.DEFAULT_USER_PASSWORD || "senha",
        id: "nexussaboroso"
    },
    {
        username: "gusbrloko",
        password: process.env.DEFAULT_USER_PASSWORD || "senha",
        id: "gustavinhohh"
    }
]

function verifyLogin({ password, username }: signin): returnLoginInterface {
    const fetchUser = users.find(user => user.username == username)

    if (!!fetchUser) {
        if (fetchUser.password == password) return {
            isLogged: true, message: "", token:
                jwt.sign(
                    JSON.stringify({ userId: fetchUser.id }),
                    cryptPass)
        }
        else return { isLogged: false, message: "incorrect password" }
    }
    return {
        isLogged: false,
        message: "user not found"
    }
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<returnLoginInterface>
) {

    console.log(req.body);
    const { username, password } = req.body

    if (req.method == "POST" && username && password) {
        const getUserValidation = verifyLogin({ password, username })
        console.log(getUserValidation);

        if (getUserValidation.isLogged && getUserValidation?.token) {
            res.setHeader("Authorization", "Bearer " + getUserValidation.token)
        }
        res.status(200).json(getUserValidation)
    }
}
