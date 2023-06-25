import { NextApiRequest, NextApiResponse } from "next";
import { returnLoginInterface } from "@/interfaces/auth";
import { verifyAuthToken } from "@/utils/Auth";
import { UserFollowsData } from "@/utils/Mock/followusers";
import { followUsersType } from "@/interfaces/dataRequests";

export interface followUsersInterface {
    auth: returnLoginInterface
    data?: followUsersType
}


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<followUsersInterface>
) {
    const userAuthHeader = req.headers.authorization

    if (req.method == "POST" && userAuthHeader) {
        const userAuth = verifyAuthToken(userAuthHeader)

        res.send(
            userAuth.isLogged
                ? { auth: userAuth, data: UserFollowsData }
                : { auth: userAuth }
        )
    }
    else res.send({ auth: { isLogged: false, code: "wrong-token" } })
}
