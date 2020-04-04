import React from 'react'
import MainLayout from '~/layouts/MainLayout'

import '~/styles/_reset.css'
import '~/styles/root.css'
import '~/styles/layout.css'

import '~/styles/linker.css'
import '~/styles/navbar.css'

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
