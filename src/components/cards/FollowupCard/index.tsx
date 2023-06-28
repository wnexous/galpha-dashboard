import Image from 'next/image'
import styles from './styles.module.scss'
import { PATHS } from '@/utils/Path'
import { followUsersType } from '@/interfaces/dataRequests'
export default function FollowupCard(props: followUsersType) {



    return <div className={styles.container}>
        <Image src={PATHS.images.PATH_IMAGE_PROFILE + props.imagePath} height={70} width={70} alt='icone de perfil de usuario' />

        <div className={styles.content}>
            <div></div>
            <div></div>
        </div>
    </div>
}