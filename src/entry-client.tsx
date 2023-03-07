import './assets/scss/index.scss'
import './assets/scss/header.scss'
import './assets/scss/hero.scss'
import './assets/scss/about.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
