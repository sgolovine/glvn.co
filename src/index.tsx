import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './pages/home'
import ProjectPage from './pages/projects'
import ContactPage from './pages/contact'

import { SiteLayout } from './components/SiteLayout'
import { MetaHelmet } from './components/MetaHelmet'

import 'bootstrap/dist/css/bootstrap.min.css'

const Bootstrap = () => {
  return (
    <>
      <MetaHelmet />
      <BrowserRouter>
        <SiteLayout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/projects">
              <ProjectPage />
            </Route>
            <Route exact path="/contact">
              <ContactPage />
            </Route>
          </Switch>
        </SiteLayout>
      </BrowserRouter>
    </>
  )
}

ReactDOM.render(<Bootstrap />, document.getElementById('root'))
