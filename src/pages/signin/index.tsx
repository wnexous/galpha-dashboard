import Card from '@/components/card'
import styles from './styles.module.scss'
import { FormEvent, useState } from 'react'
import axios from 'axios'
import cookies from 'js-cookie'
import InputText from '@/components/input/inputText'
import InputPassword from '@/components/input/inputPassword'
import { returnLoginInterface } from '@/interfaces/auth'
import { authResponse } from '@/utils/login/responses'
export default function Siginin() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [submitButton, setSubmitButton] = useState(false)

    const handleSubmit = () => {
        axios.post("/api/signin", {
            username, password
        }).then(request => {
            const loginResponse: returnLoginInterface = request.data
            if (loginResponse.isLogged) {
                cookies.set("token", request.headers.authorization)
                window.location.href = "/"
            } else {
                setSubmitButton(false)
                alert(authResponse(loginResponse.code))
            }
        }).catch(err => {
            setSubmitButton(false)
        })
    }

    const handleForms = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmitButton(true)
        handleSubmit()
    }
    return <form className={styles.teste} onSubmit={handleForms}>
        <h1>LOGIN</h1>
        <InputText props={{
            placeholder: "nome de usuario",
            value: username,
            onChange: user => setUsername(user.currentTarget.value)
        }} icon={{
            src: "assets/input-icons/user.svg",
            alt: "nome de usuario"
        }} />

        <InputPassword props={{
            placeholder: "insira sua senha",
            value: password,
            onChange: pass => setPassword(pass.currentTarget.value)
        }} icon={{
            src: "assets/input-icons/password.svg",
            alt: "senha de login"
        }} />

        <button disabled={submitButton} type='submit'>Entrar</button>
    </form>
}