import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import HomePage from './pages/home'
import AboutPage from './pages/about'
import ProjectPage from './pages/projects'
import ContactPage from './pages/contact'
import CopyBinPage from './pages/copyBin'
import ResumePage from './pages/resume'

import { SiteLayout } from './components/SiteLayout'

import 'bootstrap/dist/css/bootstrap.min.css'

type SiteRouteProps = {
  path: string
  children: any
}

const SiteRoute = (props: SiteRouteProps) => {
  return (
    <Route exact path={props.path}>
      <SiteLayout>{props.children}</SiteLayout>
    </Route>
  )
}

const Site = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <SiteRoute path="/about">
        <AboutPage />
      </SiteRoute>
      <SiteRoute path="/projects">
        <ProjectPage />
      </SiteRoute>
      <SiteRoute path="/projects/copy-bin">
        <CopyBinPage />
      </SiteRoute>
      <SiteRoute path="/projects/copybin">
        <Redirect to="/project/copy-bin" />
      </SiteRoute>
      <SiteRoute path="/copybin">
        <Redirect to="/projects-copybin" />
      </SiteRoute>
      <SiteRoute path="/contact">
        <ContactPage />
      </SiteRoute>
      <Route path="/resume">
        <ResumePage />
      </Route>
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<Site />, document.getElementById('root'))
