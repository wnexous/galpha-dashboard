import { specialistInformationsInterface } from "@/interfaces/dataRequests"
import styles from "./styles.module.scss"
import Image from "next/image"
import { PATHS } from "@/utils/Path"


interface UserBubblesInterface {
    showAmount?: number
    usersArray: specialistInformationsInterface[]
}

export default function UserBubbles(props: UserBubblesInterface) {
    const maxRenderBubbles = props.showAmount || 3
    const sliceArray = props.usersArray.slice(0, maxRenderBubbles)
    const renderMoreBubbles = props.usersArray.length > maxRenderBubbles

    return <span className={styles.content}>
        {sliceArray.map(user => <Image src={PATHS.images.PATH_IMAGE_PROFILE + user.imagePath} width={30} height={30} alt={user.name} />)}
        {renderMoreBubbles && <span>{`+${props.usersArray.length - sliceArray.length}`}</span>}
    </span>

}