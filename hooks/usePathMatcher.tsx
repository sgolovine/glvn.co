import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
/**
 * This hook controls how everything will look
 * from page to page on the site
 *
 */

type HookState = {
  isHome: boolean
  isContact: boolean
  isProjectRoot: boolean
  isProjectPage: boolean
}

const initialState: HookState = {
  isHome: false,
  isContact: false,
  isProjectRoot: false,
  isProjectPage: false,
}

const test = (pathName: string) => {
  // Check if the user is on
  // /projects or /projects/something/else/*

  type MappingItem = { path: keyof HookState; regex: RegExp }

  const mapping: MappingItem[] = [
    {
      path: 'isHome',
      regex: new RegExp('^/$'),
    },
    {
      path: 'isContact',
      regex: new RegExp('^/contact$'),
    },
    {
      path: 'isProjectRoot',
      regex: new RegExp('^/projects$'),
    },
    {
      path: 'isProjectPage',
      regex: new RegExp('^/projects/.*$'),
    },
  ]

  return mapping.reduce((newHookState: HookState, item: MappingItem) => {
    if (item.regex.test(pathName)) {
      return {
        ...newHookState,
        [item.path]: true,
      }
    } else {
      return {
        ...newHookState,
        [item.path]: false,
      }
    }
  }, initialState)
}

export function usePathMatcher() {
  const [pathState, setPathState] = useState<HookState>(initialState)

  const router = useRouter()

  useEffect(() => {
    setPathState(test(router.pathname))
  }, [router.pathname])

  return pathState
}
