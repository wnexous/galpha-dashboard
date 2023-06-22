import styles from "./styles.module.scss"

export default function WaitingScreen() {
    return <div className={styles.centralizeEllipsis}>
        <div className={styles.ldsEllipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div >
}