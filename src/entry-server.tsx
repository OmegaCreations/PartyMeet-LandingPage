import React from 'react'
import ReactDOMServer from 'react-dom/server'
import './assets/scss/index.scss'
import './assets/scss/header.scss'
import './assets/scss/hero.scss'
import './assets/scss/about.scss'
import App from "./components/App"

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
  return { html }
}
