import React from 'react'
import MainLayout from '~/layouts/MainLayout'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import '~/styles/index.scss'

export default function App({ Component, pageProps }: AppProps) {
  //TODO: Better route matching here
  const router = useRouter()
  const rootPath = new RegExp('^/$')
  console.log(router.pathname)
  console.log(rootPath.test(router.pathname))

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
