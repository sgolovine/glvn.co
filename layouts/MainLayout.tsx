import React, { ReactNode } from 'react'
import { Navbar } from '~/components/Navbar'

export default ({ children }: { children: ReactNode }) => (
  <div className="main-layout-container">
    <div className="main-layout-header-container">
      <Navbar />
    </div>
    <div className="main-layout-content-container">{children}</div>
  </div>
)
