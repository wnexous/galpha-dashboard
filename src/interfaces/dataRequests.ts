export type followUsersType = {
    name: string
    imagePath: string
    school: {
        name: string
        classYear: number
        classIdentifier: string
    }
    age: number
    ta: string
    specialist: specialistInformationsInterface[]
}

export interface specialistInformationsInterface { imagePath: string, name: string }


