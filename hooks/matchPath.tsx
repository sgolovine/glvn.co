import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

/**
 * This hook controls how everything will look
 * from page to page on the site
 *
 */

type Props = {
  path: string
}

function matchPath(props: Props) {
  const [path, setPath] = useState<string>('')
  const [showHeader, setShowHeader] = useState<boolean>(false)
  const [isHome, setIsHome] = useState<boolean>(false)
  const [isProjects, setIsProject] = useState<boolean>(false)
  const [isContact, setIsContact] = useState<boolean>(false)

  const router = useRouter()

  // Set the path on load
  useEffect(() => {
    setPath(router.pathname)
  }, [])

  // Then onwards any time the router
  // path changes
  useEffect(() => {
    // Check if the user is on
    // /projects or /projects/something/else/*
    const projectMainPath = new RegExp('^/projects$')
    const projectPaths = new RegExp('^/projects/.*$')
    const rootPath = new RegExp('^/$')
    const aboutPath = new RegExp('^/about$')
    const contactPath = new RegExp('^/contact$')

    console.log(projectMainPath.test(router.pathname))
    console.log(projectPaths.test(router.pathname))
    console.log(rootPath.test(router.pathname))
    console.log(aboutPath.test(router.pathname))
    console.log(contactPath.test(router.pathname))

    setPath(router.pathname)
  }, [router.pathname])

  // Homepage rules
  useEffect(() => {}, [isHome])
  // Project rules
  useEffect(() => {}, [isProjects])
  // Contact rules
  useEffect(() => {}, [isContact])
}
