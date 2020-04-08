import React from 'react'
import MainLayout from '~/layouts/MainLayout'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import '~/styles/index.scss'

const PATHS = {
  HOME: '/',
  PROJECT: '/projects',
  CONTACT: '/contact',
}

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  //TODO: Better route matching here

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
