import { pageStateType } from '@/interfaces/pageStates'
import WaitingScreen from '@/layout/waitingScreen'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  const [pageState, setPageState] = useState<pageStateType>("waiting")
  const router = useRouter()

  useEffect(() => {

    
  }, [router])


  if (pageState == "logged") return <Component {...pageProps} />
  if (pageState == "waiting") return <WaitingScreen />

}
