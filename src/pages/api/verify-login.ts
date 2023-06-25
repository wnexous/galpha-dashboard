import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken"
import { returnLoginInterface } from "@/interfaces/auth";
import { verifyAuthToken } from "@/utils/Auth";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<returnLoginInterface>
) {
    const userAuth = req.headers.authorization

    if (req.method == "POST" && userAuth) {
        res.send(verifyAuthToken(userAuth))
    }
    else res.send({ isLogged: false, code: "wrong-token" })
}
