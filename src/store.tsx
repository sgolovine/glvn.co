// Types
type AppAction = {
  type: string
  payload?: any
}

type Theme = 'light' | 'dark'

type State = {
  theme: Theme
}

// Actiontypes
const SET_THEME = 'SET_THEME'

// Actions
export const setTheme = (theme: Theme) => {
  return {
    type: SET_THEME,
    payload: theme,
  }
}

// Initial State
const initialState: State = {
  theme: 'light',
}

// Reducer
export function reducer(state: State = initialState, action: AppAction): State {
  switch (action.type) {
    case SET_THEME: {
      return {
        ...state,
        theme: action.payload,
      }
    }
    default:
      return state
  }
}

// Selectors
export const getTheme = (state: State) => state.theme
