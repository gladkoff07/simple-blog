import { useEffect, useContext, useReducer } from 'react'
import ThemeContext from '../context/context'
import BlockPost from './BlockPost'
import Footer from './Footer'
import Header from './Header'

const reducer = (state, action) => {
  switch (action.type) {
    case 'fetch':
      return {
        ...state,
        posts: action.payload,
      }

    case 'posts':
      return {
        ...state,
        type: action.type,
      }

    case 'users':
      return {
        ...state,
        type: action.type,
      }

    case 'check':
      return {
        ...state,
        check: !state.check,
      }

    default:
      return state
  }
}

export default function App() {
  const [{ posts, type, check }, dispath] = useReducer(reducer, {
    posts: [],
    type: 'posts',
    check: false,
  })
  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    setTimeout(() => {
      document.title = `Page ${type}`
    }, 300)

    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => dispath({ type: 'fetch', payload: json }))

    return () => {
      document.title = 'Page'
    }
  }, [type])

  const change = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    dispath({ type: 'check' })
  }

  const setType = type => dispath({ type })

  return (
    <div className={`app ${theme}`}>
      <Header changeType={setType} check={check} changeTheme={change} />
      <BlockPost posts={posts} />
      <Footer />
    </div>
  )
}
