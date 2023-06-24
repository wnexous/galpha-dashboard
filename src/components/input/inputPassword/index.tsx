import { DetailedHTMLProps, InputHTMLAttributes, useEffect, useState } from "react"
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

export default function InputPassword({ props, icon }: inputTextInterface) {

    const [passVisible, setPassVisible] = useState(false)

    const eyeTypes = {
        open: <Image loading="lazy" width={20} height={20} src={`assets/input-icons/eye-open.svg`} alt={icon.alt} title={icon.title || ""} quality={30} />,
        close: <Image loading="lazy" width={20} height={20} src={`assets/input-icons/eye-close.svg`} alt={icon.alt} title={icon.title || ""} quality={30} />
    }

    const getId = props.id || randomBytes(8).toString("hex")
    return <span className={styles.content}>
        <label htmlFor={getId}>
            <Image loading="lazy" width={20} height={20} src={icon.src} alt={icon.alt} title={icon.title || ""} quality={30} />
        </label>
        <input {...props} id={getId} type={passVisible ? "text" : "password"} />
        <button type="button" onClick={() => setPassVisible(!passVisible)}>
            {eyeTypes[passVisible ? "open" : "close"]}
        </button>
    </span>
}