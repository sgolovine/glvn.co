import React from 'react'
import MainLayout from '~/layouts/MainLayout'
import { AppProps } from 'next/app'
import { usePathMatcher } from '~/hooks/usePathMatcher'

import '~/styles/index.scss'

export default function App({ Component, pageProps }: AppProps) {
  const pathMatch = usePathMatcher()

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
