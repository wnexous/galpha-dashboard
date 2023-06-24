import Link from "next/link"
import styles from "./styles.module.scss"

export default function NotLogged() {

    return (<div className={styles.content}>

        <h1>Oops...</h1>
        <p>parece que voce não está logado!</p>
        <Link type="button" href={"/signin"} >clique aqui para efetuar seu login</Link>




    </div>)
}