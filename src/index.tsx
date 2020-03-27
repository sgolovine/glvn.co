import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom'

import HomePage from './pages/home'
import AboutPage from './pages/about'
import ProjectPage from './pages/projects'
import ContactPage from './pages/contact'

import { SiteLayout } from './components/SiteLayout'

import 'bootstrap/dist/css/bootstrap.min.css'

const MainRoutes = () => {
  const match = useRouteMatch()
  return (
    <SiteLayout>
      <Switch>
        <Route exact path={`${match.url}/about`}>
          <AboutPage />
        </Route>
        <Route exact path={`${match.url}/projects`}>
          <ProjectPage />
        </Route>
        <Route exact path={`${match.url}/contact`}>
          <ContactPage />
        </Route>
      </Switch>
    </SiteLayout>
  )
}
const Bootstrap = () => {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/pages">
          <MainRoutes />
        </Route>
      </BrowserRouter>
    </>
  )
}

ReactDOM.render(<Bootstrap />, document.getElementById('root'))
