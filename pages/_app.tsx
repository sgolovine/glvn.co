import React from 'react'
import MainLayout from '~/layouts/MainLayout'

import '~/styles/index.scss'

export default function App({
  Component,
  pageProps,
}: {
  Component: any
  pageProps: any
}) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
