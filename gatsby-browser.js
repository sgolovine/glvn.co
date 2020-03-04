import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/store'
import { ThemeWrapper } from './src/ThemeWrapper'
import { SiteLayout } from './src/components/SiteLayout'
import { MetaHelmet } from './src/components/MetaHelmet'
// CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css'
import './src/styles/bootstrap-overrides.css'

export const wrapRootElement = ({ element }) => {
  return (
    <div>
      <MetaHelmet />
      <Provider store={store}>
        <ThemeWrapper>{element}</ThemeWrapper>
      </Provider>
    </div>
  )
}

export const wrapPageElement = ({ element }) => {
  return <SiteLayout>{element}</SiteLayout>
}
