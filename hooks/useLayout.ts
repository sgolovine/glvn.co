import { useState, useEffect } from 'react'
import { usePathMatcher } from './usePathMatcher'
import classNames from 'classnames'

type LayoutState = {
  headerHidden: boolean
  contentCentered: boolean
  contentRegular: boolean
}

const initialState: LayoutState = {
  headerHidden: true,
  contentCentered: true,
  contentRegular: false,
}

export function useLayout() {
  const pathMatch = usePathMatcher()

  const [layoutState, setLayoutState] = useState<LayoutState>(initialState)

  useEffect(() => {
    if (pathMatch.isHome) {
      setLayoutState({
        headerHidden: true,
        contentCentered: true,
        contentRegular: false,
      })
    }
    if (pathMatch.isProjectRoot) {
      setLayoutState({
        headerHidden: false,
        contentCentered: false,
        contentRegular: true,
      })
    }
    if (pathMatch.isProjectPage) {
      setLayoutState({
        headerHidden: false,
        contentCentered: false,
        contentRegular: true,
      })
    }
    if (pathMatch.isContact) {
      setLayoutState({
        headerHidden: false,
        contentCentered: true,
        contentRegular: false,
      })
    }
  }, [pathMatch])

  const headerClassNames = classNames('main-layout-header-container', {
    hidden: layoutState.headerHidden,
  })

  const contentClassNames = classNames('main-layout-content-container', {
    'main-layout-content-container-centered': layoutState.contentCentered,
    'main-layout-content-container-fixed-width': layoutState.contentRegular,
  })

  return { headerClassNames, contentClassNames }
}
