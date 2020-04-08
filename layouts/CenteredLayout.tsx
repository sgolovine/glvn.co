import React from 'react'
import classNames from 'classnames'
import { Navbar } from '~/components/Navbar'
import { LayoutProps } from '~/model/LayoutProps'

export default (props: LayoutProps) => {
  const headerStyles = classNames('main-layout-header-container', {
    hidden: !props.hideHeader,
  })

  const contentStyles = classNames(
    'main-layout-content-container',
    'main-layout-content-container-centered'
  )

  return (
    <div className="main-layout-container">
      <div className={headerStyles}>
        <Navbar />
      </div>
      <div className={contentStyles}>{props.children}</div>
    </div>
  )
}
