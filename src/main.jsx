import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import { App } from './App'

const JSX = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ReactDOM.render(JSX(), document.getElementById(`root`))
