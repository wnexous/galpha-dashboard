import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import styles from "../styles.module.scss"
import { randomBytes } from "crypto"
import Image from "next/image"

interface inputTextInterface {
    props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    icon: {
        src: string,
        alt: string
        title?: string
    }
}

export default function InputText({ props, icon }: inputTextInterface) {

    const getId = props.id || randomBytes(8).toString("hex")
    return <span className={styles.content}>
        <label htmlFor={getId}>
            <Image loading="lazy" width={20} height={20} src={icon.src} alt={icon.alt} title={icon.title || ""} quality={30} />
        </label>
        <input {...props} id={getId} />
    </span>
}