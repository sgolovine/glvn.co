import React from 'react'
import { Navbar } from '~/components/Navbar'
import classNames from 'classnames'
import { LayoutProps } from '~/model/LayoutProps'

export default (props: LayoutProps) => {
  const headerStyles = classNames('main-layout-header-container', {
    hidden: !props.hideHeader,
  })

  const contentStyles = classNames(
    'main-layout-content-container',
    'main-layout-content-container-fixed-width'
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
