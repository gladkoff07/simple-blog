import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import ThemeContext from './context/context'
import './index.scss'

const Main = () => {
  const [theme, setTheme] = useState('light')

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <App />
      </ThemeContext.Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
