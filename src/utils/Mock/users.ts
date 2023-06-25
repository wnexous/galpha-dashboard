import { AccountTypes } from "@/interfaces/accountTypes"

interface usersInterface {
    username: string
    password: string
    accountType: AccountTypes
    id: string
}

export const users: usersInterface[] = [
    {
        username: "wnexous",
        password: process.env.DEFAULT_USER_PASSWORD || "senha",
        id: "nexussaboroso",
        accountType: "student"
    },
    {
        username: "gusbrloko",
        password: process.env.DEFAULT_USER_PASSWORD || "senha",
        id: "gustavinhohh",
        accountType: "student"
    }
]

export const fetchUser = (find: { username: string }) => users.find(u => u.username == find.username)