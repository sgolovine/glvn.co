import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/store'
import { ThemeWrapper } from './src/ThemeWrapper'
import Layout from './src/components/Layout'

// CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css'
import './src/styles/bootstrap-overrides.css'

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <ThemeWrapper>{element}</ThemeWrapper>
    </Provider>
  )
}

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
