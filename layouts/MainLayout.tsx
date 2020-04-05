import React, { ReactNode } from 'react'
import { Navbar } from '~/components/Navbar'
import { useRouter } from 'next/router'
import classNames from 'classnames'

export default ({ children }: { children: ReactNode }) => {
  const { pathname } = useRouter()
  const re = new RegExp('/contact')
  const isContactPage = re.test(pathname)

  const styles = classNames({
    'main-layout-content-container': !isContactPage,
    'main-layout-content-container-centered': isContactPage,
  })
  return (
    <div className="main-layout-container">
      <div className="main-layout-header-container">
        <Navbar />
      </div>
      <div className={styles}>{children}</div>
    </div>
  )
}
