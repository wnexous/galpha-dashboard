import Card from '@/components/card'
import styles from './styles.module.scss'
import { useState } from 'react'
import axios from 'axios'
import { returnLoginInterface } from '../api/signin'
import cookies from 'js-cookie'
export default function Siginin() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {

        axios.post("/api/signin", {
            username, password
        }).then(request => {
            const loginResponse: returnLoginInterface = request.data
            if (loginResponse.isLogged) {
                cookies.set("token", request.headers.authorization)
                window.location.href = "/"
            } else alert(loginResponse.message)
        })
    }
    return <div className={styles.teste}>
        <h1>LOGIN</h1>
        <input type="text" placeholder='user' onChange={user => setUsername(user.currentTarget.value)} value={username} />
        <input type="password" placeholder='senha' onChange={pass => setPassword(pass.currentTarget.value)} value={password} />
        <button onClick={handleSubmit}>logar</button>
    </div>
}