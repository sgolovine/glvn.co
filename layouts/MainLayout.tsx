import React, { ReactNode } from 'react'
import { Navbar } from '~/components/Navbar'
import { useRouter } from 'next/router'
import classNames from 'classnames'

export default ({ children }: { children: ReactNode }) => {
  const { pathname } = useRouter()
  const isContactPage = pathname === '/contact'
  const isHomePage = pathname === '/'

  const centeredLayoutPages = isContactPage || isHomePage

  const styles = classNames('main-layout-content-container', {
    'main-layout-content-container-fixed-width': !centeredLayoutPages,
    'main-layout-content-container-centered': centeredLayoutPages,
  })

  const headerStyles = classNames('main-layout-header-container', {
    hidden: isHomePage,
  })

  return (
    <div className="main-layout-container">
      <div className={headerStyles}>
        <Navbar />
      </div>
      <div className={styles}>{children}</div>
    </div>
  )
}
