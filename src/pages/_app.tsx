import { NOT_LOGIN_PAGES } from '@/constants/notLoginPages'
import { pageStateType } from '@/interfaces/pageStates'
import NotLogged from '@/layout/notLogged'
import WaitingScreen from '@/layout/waitingScreen'
import '@/styles/globals.css'
import axios from 'axios'
import type { AppProps } from 'next/app'
import cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { returnLoginInterface } from './api/signin'





export default function App({ Component, pageProps }: AppProps) {

  const [pageState, setPageState] = useState<pageStateType>("waiting")
  const router = useRouter()

  useEffect(() => {

    axios.post("/api/verify-login", {}, {
      headers: {
        Authorization: cookies.get("token")
      }
    }).then(request => {
      const loginResponse: returnLoginInterface = request.data
      setPageState(loginResponse.isLogged ? "logged" : "not-logged")
    })

  }, [router])


  /**
   * Rendenizará a pagina apenas se o pathname da pagina 
   * estiver na lista de NOT_LOGIN_PAGES ou se o usuario 
   * estiver logado
   *  */
  if (pageState == "logged" || NOT_LOGIN_PAGES.includes(router.pathname)) return <Component {...pageProps} />

  // caso o estado esteja em espera, rendenizará a tela de espera
  if (pageState == "waiting") return <WaitingScreen />

  // caso o estado retorne como nao loado, rendenizará a pagina de nao logado
  if (pageState == "not-logged") return <NotLogged />

}
