import React from 'react'
import MainLayout from '~/layouts/MainLayout'
import { AppProps } from 'next/app'

import '~/styles/index.scss'

export default function App({ Component, pageProps }: AppProps) {
  //TODO: Better route matching here

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
