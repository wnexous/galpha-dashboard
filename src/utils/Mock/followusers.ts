import { followUsersType } from "@/interfaces/dataRequests";

export const UserFollowsData: followUsersType[] = [
    {
        age: 8,
        imagePath: "nexinho122kk3.jpg",
        name: "Allana Mocelin De Matos",
        school: {
            name: "Pontificia Universidade Catolica Do Parana",
            classIdentifier: "B",
            classYear: 4
        },
        specialist: [
            { imagePath: "specialist1.jpg", name: "Maria de Almeida Santos" },
            { imagePath: "specialist1.jpg", name: "Maria de Almeida Santos" },
            { imagePath: "specialist1.jpg", name: "Maria de Almeida Santos" },
            { imagePath: "specialist1.jpg", name: "Maria de Almeida Santos" },
            { imagePath: "specialist1.jpg", name: "Maria de Almeida Santos" },
            { imagePath: "specialist1.jpg", name: "Maria de Almeida Santos" },
            { imagePath: "specialist1.jpg", name: "Pedro Afonso do Carmo" }
        ],
        ta: "Dislexia"
    },
    {
        age: 8,
        imagePath: "gustavinhohh44eddd.jpg",
        name: "Gustavo de almeida Santos Camargo",
        school: {
            name: "Pontificia Universidade Catolica Do Parana",
            classIdentifier: "A",
            classYear: 2
        },
        specialist: [
            { imagePath: "specialist1.jpg", name: "Maria de Almeida Santos" },
            { imagePath: "specialist1.jpg", name: "Maria de Almeida Santos" },
            { imagePath: "specialist1.jpg", name: "Maria de Almeida Santos" },
            { imagePath: "specialist1.jpg", name: "Pedro Afonso do Carmo" }
        ],
        ta: "Dislexia"
    }
]