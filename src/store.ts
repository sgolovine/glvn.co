import { createStore } from 'redux'

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
function reducer(state: State = initialState, action: AppAction): State {
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

// Create Store
export const store = createStore(
  reducer,
  initialState,
  // Redux Devtools Extension
  typeof window !== undefined &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
