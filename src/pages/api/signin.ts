// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { useState } from 'react'
import crypto, { getRandomValues, randomBytes } from "crypto"

export interface returnLoginInterface {
    isLogged: boolean
    message: string
    token?: string
}

interface signin {
    username: string
    password: string
}

interface usersInterface {
    username: string
    password: string
}
const users: usersInterface[] = [
    {
        username: "wnexous",
        password: "senha"
    },
    {
        username: "gusbrloko",
        password: "senha"
    }
]

function verifyLogin({ password, username }: signin): returnLoginInterface {

    const fetchUser = users.find(user => user.username == username)

    if (!!fetchUser) {
        if (fetchUser.password == password) return { isLogged: true, message: "", token: randomBytes(32).toString("hex") }
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
    const { username, password } = req.body.data

    const [usersToken, setUsersToken] = useState([])
    if (req.method == "POST" && username && password) {
        const getUserValidation = verifyLogin({ password, username })
        if (getUserValidation.isLogged) {
            let getList = usersToken
            //@ts-ignore
            getList.push(getUserValidation.token)
            setUsersToken(getList)
            console.log(getList);
        }
        res.status(200).json(getUserValidation)
    }
}
