import { TagBgColor, TagWarningType } from "@/interfaces/tagsTypes"
import styles from "./styles.module.scss"



interface NanoTagInterface {
    warning: TagWarningType,
    children?: any
    className?: string
}

export default function NanoTag(props: NanoTagInterface) {
    return <span style={{ backgroundColor: TagBgColor[props.warning] }} className={[styles.content, props.className].join(" ")}>
        {props.children}
    </span>

}