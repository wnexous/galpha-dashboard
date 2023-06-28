import { AccountTypes } from "@/interfaces/accountTypes"

type accountTypes = ""

interface usersInterface {
    username: string
    password: string
    accountType: AccountTypes
    id: string
    imagePath: string
    name: string
    school: {
        name: string
        classYear: number
        classIdentifier: string
    }
    age: number
    ta: string
}

export const users: usersInterface[] = [
    {
        username: "wnexous",
        password: process.env.DEFAULT_USER_PASSWORD || "senha",
        id: "nexinho122kk3",
        accountType: "student",
        imagePath: "nexinho122kk3.jpg",
        name: "Andre Ruan Cesar",
        school: {
            name: "Pontificia Universidade Catolica Do Parana",
            classIdentifier: "B",
            classYear: 4
        },
        age: 10,
        ta: "TDH"
    },
    {
        username: "gusbrloko",
        password: process.env.DEFAULT_USER_PASSWORD || "senha",
        id: "gustavinhohh44eddd",
        accountType: "student",
        imagePath: "gustavinhohh44eddd.jpg",
        name: "Gustavo kovalki",
        school: {
            name: "Escola Estadual de Desempregados",
            classIdentifier: "A",
            classYear: 6
        },
        age: 8,
        ta: "Dislexia"
    }
]

export const fetchUser = (find: { username: string }) => users.find(u => u.username == find.username)