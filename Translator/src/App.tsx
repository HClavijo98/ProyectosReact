import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useReducer } from 'react'
import { type State } from './types.d'
import { type Action } from './types.d'

const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

function reducer (state: State, action: Action) {

  if (action.type === 'INTERCHANGE_LANGUAGES') {
    return {
     ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (action.type === 'SET_FROM_LANGUAGE') {
    return{
     ...state,
      fromLanguage: action.payload
    }
  }

  if (action.type === 'SET_TO_LANGUAGE') {
    return{
     ...state,
      toLanguage: action.payload
    }
  }

  if (action.type === 'SET_FROM_TEXT') {
    return{
     ...state,
      loading: true,
      fromText: action.payload,
      result: ''
    }
  }

  if (action.type === 'SET_RESULT') {
    return{
     ...state,
      loading: false,
      result: action.payload
    }
  }

  return state
}

function App() {
  const [{
    fromLanguage
  }, dispatch] = useReducer(reducer, initialState)
  console.log(fromLanguage)
  return (
    <>
      <h1>Google Translate</h1>
      <button onClick={() => {
        dispatch({ type: 'SET_FROM_LANGUAGE', payload: 'es' })
      }}>Cambiar a Español</button>
      {fromLanguage}
    </>
  )
}

export default App
