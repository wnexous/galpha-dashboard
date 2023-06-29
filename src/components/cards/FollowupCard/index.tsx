import Image from 'next/image'
import styles from './styles.module.scss'
import { PATHS } from '@/utils/Path'
import { followUsersType } from '@/interfaces/dataRequests'
import NanoTag from '@/components/tags/nano'
import UserBubbles from '@/components/bubbles/usersbubbles'
export default function FollowupCard(props: followUsersType) {



    return <div className={styles.container}>
        <Image src={PATHS.images.PATH_IMAGE_PROFILE + props.imagePath} height={70} width={70} alt='icone de perfil de usuario' />

        <div className={styles.content}>
            <div className={styles.topContent}>
                <div className={styles.textContent}>
                    <span className={styles.fieldTextTag}>
                        <b>{props.name} </b>
                        <NanoTag warning='default' className={styles.tag}>{`${props.school.classYear}° ${props.school.classIdentifier}`}</NanoTag>
                    </span>
                    <span>{props.school.name}</span>
                </div>
            </div>

            <div className={styles.bottomContent}>
                <UserBubbles usersArray={props.specialist} />
                <span className={styles.ageContent}>
                    <b>{`${props.age} anos`} </b>
                    <span className={styles.verticalLine} />
                    {`TA: ${props.ta}`}


                </span>

            </div>

        </div>
    </div>
}