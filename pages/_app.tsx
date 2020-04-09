import React from 'react'
import { AppProps } from 'next/app'
import { useLayout } from '~/hooks/useLayout'

import '~/styles/index.scss'
import { Navbar } from '~/components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  const layout = useLayout()

  return (
    <div className="main-layout-container">
      <div className={layout.headerClassNames}>
        <Navbar />
      </div>
      <div className={layout.contentClassNames}>
        <Component {...pageProps} />
      </div>
    </div>
  )
}
