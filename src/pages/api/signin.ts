// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { verifyLogin } from '@/utils/Auth'
import { returnLoginInterface } from '@/interfaces/auth';


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<returnLoginInterface>
) {
    const { username, password } = req.body

    if (req.method == "POST" && username && password) {
        const getUserValidation = verifyLogin({ password, username })

        if (getUserValidation.isLogged && getUserValidation?.token) {
            res.setHeader("Authorization", "Bearer " + getUserValidation.token)
        }
        res.status(200).json(getUserValidation)
    }
}
