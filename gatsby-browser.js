import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/store'

// CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css'
import './src/styles/global.css'
import './src/styles/bootstrap-overrides.css'

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
